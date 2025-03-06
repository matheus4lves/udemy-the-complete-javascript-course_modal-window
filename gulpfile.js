import { src, dest, series, watch, lastRun } from "gulp";
import ts from "gulp-typescript";

const tsESM = ts.createProject("./tsconfig.json");

function compileTS() {
  return src("./app/**/*.ts", { since: lastRun(compileTS) })
    .pipe(tsESM())
    .pipe(dest("dist/"));
}

function copy() {
  return src("./app/**/*.{html,css}", { since: lastRun(copy) }).pipe(
    dest("dist/")
  );
}

function watchFiles() {
  watch("./app/**/*.ts", compileTS);
  watch("./app/**/*.{html,css}", copy);
}

const build = series(compileTS, copy);

export { build, watchFiles };

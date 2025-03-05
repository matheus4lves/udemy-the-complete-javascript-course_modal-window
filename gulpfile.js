import { src, dest, series } from "gulp";
import ts from "gulp-typescript";

const tsESM = ts.createProject("./tsconfig.json");

function compileTS() {
  return src("./app/**/*.ts").pipe(tsESM()).pipe(dest("dist/"));
}

function copy() {
  return src(["./app/**/*.html", "app/**/*.css"]).pipe(dest("dist/"));
}

const build = series(compileTS, copy);

export default build;

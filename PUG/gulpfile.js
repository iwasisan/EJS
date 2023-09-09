const { src, dest } = require("gulp");
const pug = require("gulp-pug");

const compilePug = (done) => {
  src(["./src/pug/**/*.pug", "!./src/pug/**/_*.pug"])
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./public"));
  done();
};

module.exports = {
  pug: compilePug,
};

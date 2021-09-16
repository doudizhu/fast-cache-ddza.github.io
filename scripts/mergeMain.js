const path = require("path");
const callfile = require("child_process");

const cwd = path.resolve(__dirname, `../`)



callfile.exec(
  `
    git checkout main &&
    git reset --soft HEAD^ &&
    git pull &&
    git merge dev &&
    git push
  `,
  {
    cwd,
  },
  async function (error, stdout, stderr) {
    console.log(error, stdout, stderr)
  }
)

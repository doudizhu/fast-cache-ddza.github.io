const path = require("path");
const callfile = require("child_process");

const cwd = path.resolve(__dirname, `../`)

const commitMsg = process.argv[2] // commit信息
const branch = process.argv[3] || 'dev' // 分支名


callfile.exec(
  `

    git checkout ${branch} &&
    git reset --soft HEAD^ &&
    git pull origin ${branch} &&
    git add . &&
    git commit -m ${commitMsg} &&
    git push origin ${branch}
  `,
  {
    cwd,
  },
  async function (error, stdout, stderr) {
    console.log(error, stdout, stderr)
  }
)

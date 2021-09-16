/*
 * @Author: your name
 * @Date: 2021-09-16 14:59:55
 * @LastEditTime: 2021-09-16 15:00:15
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fast-cache-ddza/scripts/packagePage.js
 */
const path = require("path");
const callfile = require("child_process");

const cwd = path.resolve(__dirname, `../`)
const packagePath = path.resolve(__dirname, `../package/fast-cache-ddza.github.io`)

callfile.exec(
  `
    gitbook build &&
    cp -r _book/ ../package/fast-cache-ddza.github.io &&
    cd ../package/fast-cache-ddza.github.io &&

    git pull &&
    git add . &&
    git commit -m 'update' &&
    git push
  `,
  {
    cwd,
  },
  async function (error, stdout, stderr) {
    console.log(error, stdout, stderr)
  }
)

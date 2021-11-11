import { execSync } from 'child_process';
import chalk from 'chalk';

/** Map of forbidden words and their match regex */
const words = {
  fit: '\\s*fit\\(',
  fdescribe: '\\s*fdescribe\\(',
  'it.only': '\\s*it.only\\(',
  'describe.only': '\\s*describe.only\\(',
  debugger: '(debugger);?',
};

let status = 0;
for (let word of Object.keys(words)) {
  const matchRegex = words[word];
  const gitCommand = `git diff --staged -G"${matchRegex}" --name-only`;
  const badFiles = execSync(gitCommand).toString();
  const filesAsArray = badFiles.split('\n');
  const tsFileRegex = /\.ts$/;
  const onlyTsFiles = filesAsArray.filter(file => tsFileRegex.test(file.trim()));
  if (onlyTsFiles.length) {
    status = 1;
    console.log(chalk.bgRed.black.bold(`The following files contains '${word}' in them:`));
    console.log(chalk.bgRed.black(onlyTsFiles.join('\n')));
    console.log('\n' + chalk.yellow('Skip this check using: git commit --no-verify -m <COMMIT_MESSAGE>\n'));
  }
}

process.exit(status);
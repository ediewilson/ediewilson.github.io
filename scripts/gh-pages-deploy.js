/* eslint-disable no-console */
const { execFileSync } = require('node:child_process');
const fs = require('node:fs');

const run = (command, args) => {
  execFileSync(command, args, { stdio: 'inherit' });
};

const read = (command, args) => execFileSync(command, args, { encoding: 'utf8' }).trim();

(async () => {
  const originalBranch = read('git', ['branch', '--show-current']) || 'main';

  try {
    run('git', ['switch', '--orphan', 'gh-pages']);
    console.log('Building started...');
    run('npm', ['run', 'build']);

    const folderName = fs.existsSync('dist') ? 'dist' : 'build';
    run('git', ['--work-tree', folderName, 'add', '--all']);
    run('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages']);
    console.log('Pushing to gh-pages...');
    run('git', ['push', 'origin', 'HEAD:gh-pages', '--force']);
    fs.rmSync(folderName, { recursive: true, force: true });
    run('git', ['switch', '-f', originalBranch]);
    run('git', ['branch', '-D', 'gh-pages']);
    console.log('Successfully deployed, check your settings');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
})();

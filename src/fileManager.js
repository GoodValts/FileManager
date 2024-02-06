import { homedir } from 'os';
import readline from 'readline';
import cd from './modules/cd.mjs';
import ls from './modules/ls.mjs';
import add from './modules/basicOperations/add.mjs';
import cat from './modules/basicOperations/cat.mjs';
import rn from './modules/basicOperations/rn.mjs';
import cp from './modules/basicOperations/cp.mjs';
import mv from './modules/basicOperations/mv.mjs';
import rm from './modules/basicOperations/rm.mjs';
import hash from './modules/hash.mjs';
import osFunc, { osValues } from './modules/os.mjs';
import zip from './modules/zip.mjs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userName = '';
let __dirname = homedir();

const checkUser = () => {
  const cliArg = process.argv.slice(2).find(arg => arg.startsWith('--username='));
  if (cliArg && cliArg.slice(11)) {
    userName = cliArg.slice(11);
    console.log(`Welcome to the File Manager, ${userName}!`);
  } else {
    console.log(`Welcome to the File Manager!`);
  }
}

const checkDirectory = () => {
  console.log(`\n\x1b[42mYou are currently in ${__dirname}\x1b[0m`);
}

const throwFSOperationFailed = () => {
  console.log('\x1b[31mOperation failed\x1b[37m');
}

const throwInvalidInputMessage = () => {
  console.log('\x1b[31mInvalid input\x1b[37m');
}

rl.on('line', async (ctx) => {
  const command = ctx.split(' ')[0];
  const argsArr = ctx.split(' ').slice(1);

  // console.log(ctx);
  // console.log(command)
  // console.log(argsArr)

  switch (command) {
    case 'up':
      const newFolder = await cd(__dirname, 'up');
      __dirname = newFolder;
      break;
    case 'cd':
      if (argsArr.length === 1) {
        try {
          const newFolder = await cd(__dirname, argsArr[0]);
          // console.log('newFolder', newFolder);
          __dirname = newFolder;

        } catch (err) {
          // console.log('cd command err');
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'ls':
      try {
        await ls(__dirname);
      } catch (err) {
        throwFSOperationFailed();
      }
      break;
    case 'cat':
      if (argsArr.length === 1) {
        try {
          await cat(argsArr[0]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'add':
      if (argsArr.length === 1) {
        try {
          await add(__dirname, argsArr[0]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'rn':
      if (argsArr.length === 2) {
        try {
          await rn(argsArr[0], argsArr[1]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'cp':
      if (argsArr.length === 2) {
        try {
          await cp(argsArr[0], argsArr[1]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'mv':
      if (argsArr.length === 2) {
        try {
          await mv(argsArr[0], argsArr[1]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'rm':
      if (argsArr.length === 1) {
        try {
          await rm(argsArr[0]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'hash':
      if (argsArr.length === 1) {
        try {
          await hash(argsArr[0]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'os':
      if (argsArr.length === 1 && osValues.some((str) => str === argsArr[0])) {
        try {
          await osFunc(argsArr[0]);
        } catch (err) {
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case 'compress':
    case 'decompress':
      if (argsArr.length === 2) {
        // await zip(argsArr[0], argsArr[1], command);
        try {
          await zip(argsArr[0], argsArr[1], command);
        } catch (err) {
          // console.log(err);
          throwFSOperationFailed();
        }
      } else {
        throwInvalidInputMessage();
      };
      break;
    case '.exit': process.exit();
    
    default: throwInvalidInputMessage();
  }
  checkDirectory();
});

const exitFunc = () => {
  console.log('');
  userName
    ? console.log(`Thank you for using File Manager, ${userName}, goodbye!`)
    : console.log(`Thank you for using File Manager, goodbye!`);
  process.exit();
}

checkUser();
checkDirectory();

process.on('exit', () => {
  exitFunc();
});
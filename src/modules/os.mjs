import os from 'os';

export const osValues = [
  '--EOL',
  '--cpus',
  '--homedir',
  '--username',
  '--architecture',
]

const osFunc = async (flag) => {
  switch(flag.slice(2)) {
    case 'EOL':
      console.log(`Default system End-Of-Line: \x1b[33m${JSON.stringify(os.EOL)}\x1b[37m`);
      break;
    case 'cpus':
      console.log(`CPUs amounts: \x1b[33m${os.cpus().length}\x1b[37m\n`);
      for (let i = 0; i < os.cpus().length; i++) {
        console.log(`CPU number: \x1b[33m${i + 1}\x1b[37m`);
        console.log(`CPU model: \x1b[33m${os.cpus()[i].model}\x1b[37m`);
        console.log(`CPU speed: \x1b[33m${(os.cpus()[i].speed)}\x1b[5m MHz\x1b[37m`);
        console.log('-'.repeat(30));
      }
      break;
    case 'homedir':
      console.log(`Home directory: \x1b[33m${os.homedir()}\x1b[37m`);
      break;
    case 'username':
      console.log(`UserName: \x1b[33m${os.userInfo().name || 'n/d'}\x1b[37m`);
      break;
    case 'architecture':
      console.log(`CPU Architecture: \x1b[33m${os.arch()}\x1b[37m`);
      break;
  }
}

export default osFunc;
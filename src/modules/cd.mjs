import { homedir } from "os";
import path from "path";
import fs from 'fs';

const cd = async (__dirname, arg) => {
  // console.log('currDir=', __dirname);
  // console.log('arg=', arg);

  if (arg === 'up' || arg === '..') {
    if (homedir() === __dirname) {
      console.log('\x1b[31mYou are in the root folder yet!\x1b[37m');
      return __dirname;
    } else {
      console.log('\x1b[32mSwitch successfully\x1b[31m');
      return path.resolve(__dirname, '..');
    }
  } else {
    let __dirnameTarget = path.isAbsolute(arg) ? arg : path.join(__dirname, arg);
    // console.log('__dirnameTarget=,', __dirnameTarget);

    if (!__dirnameTarget.startsWith(homedir)) {
      console.log('\x1b[31mYou can\'t reach upper the root folder!\x1b[37m');
      return __dirname;
    }

    try {
      await fs.promises.access(__dirnameTarget);
      console.log(`\x1b[32mSwitch to ${__dirnameTarget}\x1b[37m`);
      return __dirnameTarget;
    } catch (err) {
      throw err;
    }
  }
};

export default cd;
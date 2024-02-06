import fs from 'fs';
import path from 'path';

const rn = async (pathToOld, newName) => {
  const pathToDir = path.dirname(pathToOld);
  // console.log('pathToDir=', pathToDir);
  const pathToNew = path.join(pathToDir, newName)
  // console.log('pathToNew=', pathToNew);

  try {
    await fs.promises.rename(pathToOld, pathToNew);
    console.log(`\x1b[35m${path.basename(pathToOld)}\x1b[37m renamed to \x1b[35m${newName}\x1b[37m!`);
  } catch(err) {
    throw err;
  }
}

export default rn;
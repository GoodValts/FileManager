import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const zip = async (pathToFile, pathToTarget, command) => {
  try {
    await fs.promises.access(pathToFile);
  } catch (err) {
    console.log(`\x1b[31mFile '${pathToFile}' does not exist!\x1b[37m`);
    throw err;
  }

  try {
    await fs.promises.access(path.dirname(pathToTarget));
  } catch (err) {
    console.log(`\x1b[31mFolder '${path.dirname(pathToTarget)}' does not exist!\x1b[37m`);
    throw err;
  }
 
  await new Promise((resolve, reject) => {  
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(pathToTarget);
    const zlibStream = command === 'compress' ? zlib.createBrotliCompress() : zlib.createBrotliDecompress();
    readStream.pipe(zlibStream).pipe(writeStream);

    writeStream.on('finish', () => {
      const file = path.basename(pathToFile);
      const target = path.basename(pathToTarget);
      command === 'compress'
        ? console.log(`\x1b[35m${file}\x1b[37m have been compressed to \x1b[33m${target}\x1b[37m`)
        : console.log(`\x1b[35m${file}\x1b[37m have been decompressed to \x1b[33m${target}\x1b[37m`);
      
      resolve();
    });

    writeStream.on('error', (err) => {
      // console.log(err);
      reject(err);
    });
  });
}

export default zip;
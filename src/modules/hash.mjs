import fs from "fs";
import path from "path";
import crypto from 'crypto';

const hash = async (pathToFile) => {
  try {
    const fileName = path.basename(pathToFile);
    const hash = crypto.createHash('sha256');
    const stream = fs.createReadStream(pathToFile);

    await new Promise((resolve, reject) => {
      stream.on('data', (data) => {
        hash.update(data);
      });
  
      stream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(`\x1b[35m${fileName}\x1b[37m hash is \x1b[33m${fileHash}\x1b[37m!`);
        resolve();
      });
  
      stream.on('error', (err) => {
        reject(err);
      });
    });
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default hash;
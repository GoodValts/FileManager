import fs from "fs";
import path from "path";

const cp = async (pathToFile, newPath) => {
  try {
    const fileName = path.basename(pathToFile);
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(path.join(newPath, fileName), { flags: "w" });

    readStream.pipe(writeStream);

    await new Promise((resolve, reject) => {
      writeStream.on("finish", resolve);
      writeStream.on("error", reject);
    });

    console.log(`\x1b[35m${fileName}\x1b[37m copied to \x1b[34m${newPath}\x1b[37m!`);
  } catch(err) {
    throw(err);
  }
}

export default cp;
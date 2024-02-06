import fs from "fs";
import path from "path";

const rm = async (pathToFile) => {
  try {
    const fileName = path.basename(pathToFile);
  
    await fs.promises.unlink(pathToFile);
  
    console.log(`\x1b[35m${fileName}\x1b[37m removed!`);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default rm;
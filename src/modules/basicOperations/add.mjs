import fs from 'fs';
import { join } from 'path';

const add = async (__dirname, name) => {
  const file = join(__dirname, name);

  // console.log(file);

  try {
    await fs.promises.writeFile(file, '');
    console.log(`\x1b[35m${name}\x1b[37m created!`);
  } catch(err) {
    console.log(err);
    throw err;
  }
}

export default add;
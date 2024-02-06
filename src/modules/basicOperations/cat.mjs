import fs from 'fs';

const cat = async (path) => {
  try {
    const data = await fs.promises.readFile(path, 'utf8');
    console.log(data);
  } catch {
    console.log(err);
    throw err;
  }
}

export default cat;
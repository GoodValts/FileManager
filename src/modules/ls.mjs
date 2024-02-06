import fs from 'fs';

const ls = async (__dirname) => {
  // console.log('__dirname=', __dirname);
  const filesArr = [];

  try {
    const list = await fs.promises.readdir(__dirname);
    // console.log('list=', list);

    const classifiedList = [];

    for (const item of list) {
      const itemPath = `${__dirname}/${item}`;
      const itemStats = await fs.promises.stat(itemPath);

      classifiedList.push({
        name: item,
        type: itemStats.isDirectory() ? 'folder' : 'file',
      });
    }

    const folders = classifiedList.filter(el => el.type === 'folder');
    const files = classifiedList.filter(el => el.type === 'file');
    folders.forEach(el => filesArr.push({name: el.name, type: 'folder'}));
    files.forEach(el => filesArr.push({name: el.name, type: 'file'}));

    console.log('#', '|', 'Name'.padEnd(50), '|', 'Type');
    console.log('-'.repeat(60));

    for (let i = 0; i < filesArr.length; i++) {
      console.log(
        i,
        '|',
        filesArr[i].type === 'folder' ? `\x1b[34m${filesArr[i].name.padEnd(50)}\x1b[37m` : `\x1b[36m${filesArr[i].name.padEnd(50)}\x1b[37m`,
        '|',
        filesArr[i].type
      );
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default ls;
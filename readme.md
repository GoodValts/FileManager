# File Manager

_Like files, such is the manager..._

## General:

To start the application, please make sure you have [Git](https://git-scm.com) and [Node.js](https://nodejs.org) installed on your machine. Then, follow these steps:

1. Clone repository: `git clone https://github.com/GoodValts/FileManager.git`
1. Navigate to the project directory: `cd FileManager`
1. Switch to 'develop' branch: `git checkout develop`

## Commands:

### Start \ stop:

1. Type npm `run start -- --username=your_username`, replacing "your_username" with your name
1. Type `.exit` or press `Ctrl + C` to exit

### Navigation:

1. Type `up` or `cd ..` to go upper from current directory (you can't move upper root directory. You can check it using Info commands below)
1. Type `cd path_to_directory` to switch directory. Path can be relative or absolute (includes root path)

   _Example command: `cd downloads`_

1. Type `ls` to get list of folders and files in current directory

### Basic operations with files:

1. Type `add new_file_name` to create file in current directory

   _Example command: `add list.txt`_

1. Type `cat path_to_file` to read file content (path should be absolute, file should exist)

   _Example command: `cat С:\User\Users\list.txt`_

1. Type `rn path_to_file new_filename` to rename file (path should be absolute, file should exist)

   _Example command: `rn С:\User\Users\list.txt log.txt`_

1. Type `cp path_to_file path_to_new_directory` to copy file (paths should be absolute, file and directory should exist)

   _Example command: `cp С:\User\Users\log.txt C:\User\Users\Downloads`_

1. Type `mv path_to_file path_to_new_directory` to move file (paths should be absolute, file and directory should exist)

   _Example command: `cp С:\User\Users\Downloads\log.txt C:\User\Users\`_

1. Type `rm path_to_file` to remove file (path should be absolute, file should exist)

   _Example command: `rm С:\User\Users\log.txt`_

### Info:

1. Type `os --EOL` to view default system End-Of-Line
1. Type `os --cpus` to view information about CPU
1. Type `os --homedir` to view home directory (root path)
1. Type `os --username` to view system user name
1. Type `os --architecture` to view CPU architecture

### Hash calculating:

1. Type `hash path_to_file` to view file hash (path should be absolute, file should exist)

   _Example command: `hash С:\User\Users\log.txt`_

### Brotli compression:

1. Type `compress path_to_file path_to_destination` to compress file (path should be absolute, file and destination directory should exist)

   _Example command: `compress С:\User\Users\log.txt С:\User\Users\log.br`_

1. Type `decompress path_to_file path_to_destination` to decompress file (path should be absolute, file and destination directory should exist)

   _Example command: `decompress С:\User\Users\log.br С:\User\Users\log.txt`_

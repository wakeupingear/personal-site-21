#!/bin/bash 
unset GIT_INDEX_FILE 
echo "Publishing our React App" 
git --work-tree /home/git/build --git-dir=/home/git/react-hello-world.git checkout -f 
cd /home/git/build 
npm run-script build 
cp -r /home/git/build/build/* /home/git/www
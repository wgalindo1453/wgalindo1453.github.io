#!/bin/bash

cd $1

if [ ! -d “.git” ]; then
echo “# xxxxxx.github.io” >> README.md
git init
git add README.md
git commit -m “first commit”
git branch -M main
git remote add origin git@github.com:wgalindo1453/wgalindo1453.github.io.git
git push -u origin main
fi

git add -A
git commit -m “Website update.”
git push -u origin main
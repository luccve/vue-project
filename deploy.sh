#!/usr/bin/env sh

set -e
npm run build

cd dist

git init
git add -A

git commit -m 'Update version'

git push -f git@github.com:luccve/vertice.git master:gh-pages

cd -
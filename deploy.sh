#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
 echo 'www.anzudev.com' > CNAME

git init
git add -A
git commit -m 'update gh-pages'


# push to branch gh-pages
git push -f git@github.com:anzuj/portfolio.git master:gh-pages

cd -
#!/usr/bin/env bash

rm -Rf './netlify/functions/server/build/'
rm -Rf './.cache'
rm -Rf './public/build/'

yarn routes:generate

yarn build

yarn sitemap

yarn feed

netlify deploy
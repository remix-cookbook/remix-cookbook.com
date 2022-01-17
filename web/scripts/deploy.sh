#!/usr/bin/env bash

set -e

rm -Rf './netlify/functions/server/build/'
rm -Rf './.cache'
rm -Rf './public/build/'

yarn routes:generate

yarn build

yarn sitemap

yarn feed

yarn ci

netlify deploy
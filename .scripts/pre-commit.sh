#!/bin/bash

current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

if [ 'master' = ${current_branch} ]
then
    npm run prod;
    exit 0 # push will not execute
else
  exit 0 # push will execute
fi

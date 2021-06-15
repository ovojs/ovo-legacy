#!/bin/bash

# This shell script is just temporary.

set -e


rm -rf ../ovo-site/assets/
rm -f ../ovo-site/index.html

cp -r examples/svelte/dist/* ../ovo-site/

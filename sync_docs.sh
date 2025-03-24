#!/bin/bash

git submodule update --recursive --remote
rsync -aHv --numeric-ids --progress --delete external/sdk/src/methods/ docs/sdk/API
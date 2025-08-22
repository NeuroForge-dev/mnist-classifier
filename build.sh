#!/bin/bash

cd $( dirname -- "$( readlink -f -- "$0"; )"; )
mkdir -p build && cd build
cmake .. -DCMAKE_INSTALL_PREFIX=../nnet

cmake --build . --target install --config Debug
#!/bin/bash

export TOP="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

export LOCAL_NPM_BIN=`npm bin`;

export PATH="$TOP/bin:$LOCAL_NPM_BIN:$PATH"

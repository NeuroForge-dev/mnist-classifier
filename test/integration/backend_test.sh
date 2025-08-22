#!/bin/bash
# starts backend sends random image data to classify function and returns json response

thisdir="$(dirname -- "$( readlink -f -- "$0"; )")";
rootdir="$thisdir/../.."
echo "$thisdir"
echo "$rootdir"


$rootdir/build/backend/backend_exe &
PID=$!
sleep 1
head -c 784 /dev/urandom > image.raw
curl -s -X POST http://localhost:8080/classify --data-binary @image.raw > response.json
kill $PID

cat response.json | jq '.'

rm response.json

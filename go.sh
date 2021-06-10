#!/usr/bin/env bash



curl http://localhost:3000/
echo ---
curl http://localhost:3000/checkHeadersForThing -H 'fooHeader: thing'
echo ---
curl -X POST  -H 'Content-Type: application/json' \
    -d '{"fruit": "banana", "animal": "raccoon"}' \
    http://localhost:3000/parsePayload


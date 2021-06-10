# didactic-guacamole
`````¯\_(ツ)_/¯`````


Hi!  This little server is kind of a mess. Can you help? 

Start it up with 
```bash 
npm start
```

These curl commands are supposed to do some things, but they don't work.


This one should check all the headers for one with the value "thing"

```bash
curl http://localhost:3000/checkHeadersForThing
```
this isn't working though.



This one should tell me what my favorite fruit and animal are as a string, but this does not look right


```bash

curl -X POST  -H 'Content-Type: application/json' \
    -d '{"fruit": "banana", "animal": "raccoon"}' \
    http://localhost:3000/parsePayload
```

Please help me by submitting a PR against this repo to fix this stuff!


There are some other code problems too, but fixing them is tedious.  
Can you just do it?

Thanks!
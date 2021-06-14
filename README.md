# didactic-guacamole

Hi!  This little server is kind of a mess. Can you help? 

Start it up with 
```bash 
npm start
```

These curl commands are supposed to do some things, but they don't work.


## 1. Inspect Headers
This one should check all the headers for one with an arbitrary key and the value "thing"

```bash
curl http://localhost:3000/checkHeadersForThing
```
this curl isn't working though.


## 2. Sending data
This one should take a JSON payload and return my favorite fruit and animal are as a string, but this isn't working.

```bash

curl -X POST -H 'Content-Type: application/json' \
    -d '{"fruit": "banana", "animal": "raccoon"}' \
    http://localhost:3000/parsePayload
```

## 3. A new endpoint.
We need an endpoint that takes a query parameter with the key 'revMe' and returns the reverse of the param value.


---  

There are some other random code problems too, can you fix them?

Thanks!

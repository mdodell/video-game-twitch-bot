'use strict';

const express = require('express');
const request = require('request');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  request({
   url: `http://public-api.tracker.gg/v2/apex/standard/profile/${process.env.PLATFORM}/${process.env.PROFILE}`,
   proxy: 'http://host.docker.internal:8051'
}, function (error, response, body) {
   if (error) {
     console.log(error)
   } else {
     res.send(JSON.parse(body))
   }
 });
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

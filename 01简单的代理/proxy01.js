/**
 * Created by 严俊东 on 2017/2/25.
 */
"use strict";
const express = require('express');
const path = require('path');
const config = require('./config.json');
var proxy = require('http-proxy-middleware');
const app = express();

for (let key in config.map) {
  console.log(key)
  app.use(key, proxy({target: config.map[key], changeOrigin: true}));
}

// app.use('/', express.static('./static')) // 静态目录

app.listen(config.port, '127.0.0.1', function () {
  console.log('http://' + config.localhost + ":" + config.port);
});
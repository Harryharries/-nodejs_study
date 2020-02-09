const fs = require('fs');
const jwt = require('jsonwebtoken');

/// decrypto
const key = "233233233";

const token = fs.readFileSync('./token1.txt','utf-8');

const obj = jwt.verify(token, key);

console.log(obj);
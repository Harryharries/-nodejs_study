const fs = require('fs');
const jwt = require('jsonwebtoken');

const key = "233233233";

let user = {
    name:'harry',
};

// encrypto
let token = jwt.sign(user, key, {expiresIn:30});
console.log(token);

fs.writeFileSync('./token1.txt',token);
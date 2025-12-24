const bcrypt = require("bcryptjs");

const hash = bcrypt.hashSync("789456123", 10);
console.log(hash);

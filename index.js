require('dotenv').config() //if there is a dotenv on the root it will merge into process.env

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server up`);
});

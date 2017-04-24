const http = require('http');
const app = require('./lib/app');

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () =>{
  console.log(`Server listening at ${PORT}.`);
});
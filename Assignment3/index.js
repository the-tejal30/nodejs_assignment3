const fs = require('fs/promises');
const http = require('http');
const express = require('express');
const app = express();

app.get('/:name', async (req, res) => {
  const name = req.params.name;
  await fs.writeFile('index.html', `<h1>Hello World</h1><p>This is ${name}...</p>`);
  res.sendFile(__dirname + '/index.html');//__dirname --> represents the current directory path
});

const server = http.createServer(app);

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});






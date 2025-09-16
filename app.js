
import http from 'http';
const server = http.createServer(app);


import express from 'express';
const app = express();


import { Server } from 'socket.io';
const io = new Server(server);

import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 






app.get('/', (req,res)=>{
      res.sendFile(join(__dirname, "cliente", "index.html"));
})

server.listen(3000, () =>{
    console.log('Server corriendo en el http://localhost:3000/')
})  
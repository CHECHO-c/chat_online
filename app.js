


import express from 'express';
const app = express();

import http from 'http';
const server = http.createServer(app);




import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

 
import { Server } from 'socket.io';
const io = new Server(server);

io.on('connection',(socket)=>{
    console.log("Un usuario se ha conectado")

    socket.on('chat',(msg)=>{
       io.emit('chat',msg);
    })
})

import path from 'path';
app.use(express.static(path.join(__dirname, 'cliente')));


app.get('/', (req,res)=>{
      res.sendFile(join(__dirname, "cliente", "index.html"));
})

server.listen(3000, () =>{
    console.log('Server corriendo en el http://localhost:3000/')
})  
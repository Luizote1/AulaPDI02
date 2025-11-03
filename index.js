import express from "express";

const host = "0.0.0.0";
const porta = 3100;

const server = express();

server.listen(porta, host, ()=>{
    console.log(`Servidor Rodando em https://${host}:${porta}`)
})
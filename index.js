import express from "express";

const host = "0.0.0.0";
const porta = 3100;

const server = express();

server.get("/", (req,res)=>{
    req.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
        `);
});

server.listen(porta, host, ()=>{
    console.log(`Servidor Rodando em https://${host}:${porta}`)
});
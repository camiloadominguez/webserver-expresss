const con = console.log;
const http = require('http')

http.createServer( (req, res) =>{
    res.writeHead(200, {'Content-Type': 'application/json'})
    
    let salida = {
        nombre: 'Camilo',
        edad: 24,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

con('Servidor corriendo, Escuchando por el puerto 8080');
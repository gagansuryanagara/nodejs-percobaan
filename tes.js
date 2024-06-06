const http = require('http')


let server = http.createServer((req,res) => {
    console.log('Menyalakan server')
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('Sudah Cukup Ya<hr>')
})


server.listen(3000,() => {
    console.log('Server sudah siap jalan')
})
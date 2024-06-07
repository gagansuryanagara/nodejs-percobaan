const http  = require('http')
const fs    = require('fs')
const port  = 3000

let server = http.createServer(function(request,respon){
    if (request.url == '/utama') {
        respon.writeHead(200, {'Content-Type': 'text/html'})
        // fs.createReadStream() => membaca file yang diinginkan
        // pipe () => kirim sebagai apa, file yang sudah dibaca
        fs.createReadStream('./view/utama.html').pipe(respon)
    } 

    else if (request.url == '/beranda') {
        respon.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./view/beranda.html').pipe(respon)
    }

    else if (request.url == '/profil') {
        respon.writeHead(200, {'Content-Type': 'text/html'})
        respon.write('<h1>Profil Coach</h1>')
        respon.end()
    }

    else {
        respon.writeHead(404, {'Content-Type': 'text/html'})
        respon.write('<h1>File Tidak Ada</h1>')
        respon.end()
    }

})

server.listen(port, () => {
    console.log(`server sudan on, buka http://localhost:${port}`)
})
let nama = 'Aji'
let alamat = 'Jakarta'
let gajian = 100000*30 - 35000

// menggunakan modul yang sudah disiapkan oleh node.js
// modul http berfungsi untuk 
// membuat komputer kita bisa diakses dari luar (internet)
// local host adalah replica (dummy) dari situs web asli internet sungguhan tapi hanya jalan di komputer kita
// untuk keperluan pengembangan / pembuatan aplikasi
const http = require('http')


let server = http.createServer((req,res) => {
    // mendefinisikan status code dan tipe konten yang ingin diberikan ke user
    res.writeHead(200, {'Content-Type': 'text/html'})

    // isi dari konten
    res.end('<h1>'+nama +'</h1>'+' ' +alamat +' ' +gajian)
})

// konfigurasi port yang ingin digunakan
// karena port default (80) sudah dipakai oleh software lain
// jadi kita pakai port yang free
server.listen(3000, () => {
    console.log('Server sudah siap jalan')
})

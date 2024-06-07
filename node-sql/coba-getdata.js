// panggil modul mysql dari node_modulus
const mysql = require('mysql2')

// koneksi
const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'xdb_belajar_database',
})

// menyambungakn database
database.connect()

//
try{
    database.query('select * from karyawan', function (error, hasil) {
        if(error) throw error;

        // untuk melihat data yang dihasilkan dari syntax sql yang ditulis
        
        // 

        // data yang sudah diolah
        // } else {
        //     console.log(hasil)

        for (const i in hasil) {
            let notelp = ''
            if(hasil[i].no_telp){
                notelp=hasil[i].no_telp
            } else {
                notelp='-'
            }
            console.log(hasil[i].nama +' , No Telp' +notelp)
            
        }
    })
    database.end()
}   catch (err){
        console.log (err)
}

//     console.log(result)
//     console.log(fields)

// }
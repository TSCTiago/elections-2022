
 const sqlite = require('sqlite3').verbose();
 const filepath = "./db/eleicoes2022-pi.db";

 const database = new sqlite.Database(filepath, (error) => {
     if (error) {
         console.log(error.message)
     }
 })

 module.exports = {
     database
 }



          const path = require('path');

          const sqlite3 = require('sqlite3').verbose();
          const db_name = path.join(__dirname, "src/data", "app-logintest.db");
          const db = new sqlite3.Database(db_name, err => {
               if (err) {
                    return console.error(err.message);
               }
               console.info("Successful connection to the database 'app-logintest.db-->'");
          });


          const sql_create = `CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) NOT NULL,
            password VARCHAR(100) NOT NULL
          );`;

          db.run(sql_create, err => {
               if (err) {
                    return console.error(err.message+"al crear la tabla");
               }
               console.log("Successful creation of the 'Users' table");
          });


          const bcrypt  = require ('bcrypt-nodejs');

          const sql_create_default_users =`INSERT INTO Users (id, name, email, password) VALUES
          (1, 'Miguel Mencía', 'adminuser@mobilender.com', '${bcrypt.hashSync('notsecret', bcrypt.genSaltSync(8), null)}'),
          (2, 'Ricardo Santos', 'defaultuser@mobilender.com', '${bcrypt.hashSync('notsecret', bcrypt.genSaltSync(8),null)}');`

          db.run(sql_create_default_users, err => {
               if (err) {
                    return console.error(err.message);
               }
               console.log("Successful creation of 2 users");
          });







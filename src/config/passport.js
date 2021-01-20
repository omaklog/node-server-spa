const LocalStrategy = require('passport-local').Strategy;

const bcrypt  = require ('bcrypt-nodejs');

const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const db_name = path.join(__dirname, "../data/", "app-logintest.db");

const db = new sqlite3.Database(db_name, err => {
     if (err) {
          return console.error(err.message);
     }
     console.info("Successful connection to the database 'app-logintest.db--'");
});


module.exports = function (passport) {



     // LOGIN
     passport.use( 'local-login', new LocalStrategy({
          usernameField: 'email',
          passwordField: 'password',
          passReqToCallback: true
     },function(req, email, password, done) {


          db.get('SELECT password, id, email FROM Users WHERE email = ?', email, function(err, user) {
               if (!user) return done(null, false, 'Usuario o password incorrectos');
               var hash = bcrypt.compareSync(password, user.password)

               if (!hash) return done(null, false, 'Usuario o password incorrectos');
               else{
                    delete user.password
                    return done(null, user);
               }

          });

     }));

     passport.serializeUser(function(user, done) {
          console.log(""+user.id+"...>"+done)
          return done(null, user.id);
     });

     passport.deserializeUser(function(id, done) {
          db.get('SELECT id, email FROM Users WHERE id = ?', id, function(err, user) {
               if (!user) return done(null, false);
               return done(null, user);
          });
     });

}


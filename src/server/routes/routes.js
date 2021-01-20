const path = require('path');

module.exports = (app, passport) =>{

     app.use(function (req, res, next) {
          console.log("----------------->"+JSON.stringify(req.user));
          if(req.user != undefined)
               res.locals.user = req.user
          else res.locals.user = { email:'login' }
          console.log("----------------->"+JSON.stringify(res.locals.user));
          next()
     })

     app.get('/', isLoggedIn, (req, res) => {
          res.render('index', {getInfo: true});
     });

     app.get('/login', isLoggedIn, (req, res) => {
          res.render('index');
     });

     app.post('/login', passport.authenticate('local-login',{
          usernameField: 'email',
          passwordField: 'password'
     }), (req, res, info) =>{
          if(req.user) res.send({success:true, message:"usuario logueado"});
          else res.send({success:true, message:info})
     });


     app.get('/logout', (req, res) => {
          req.logout();
          res.redirect('/');
     });

     app.get('/home', isLoggedIn, (req, res) => {
          req.logout();
          res.redirect('/');
     });

     function isLoggedIn (req, res, next) {
          if(req.isAuthenticated() && req.route.path ==='/login'){
               res.redirect('/');
          }else if(!req.isAuthenticated() && req.route.path !='/login'){
               res.redirect('/login');
          }else{
               return next();
          }

     }

};

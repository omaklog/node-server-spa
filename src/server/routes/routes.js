const path = require('path');

module.exports = (app, passport) =>{

     app.get('/', isLoggedIn, (req, res) => {
          res.render('index');
     });

     app.get('/login', isLoggedIn, (req, res) => {
          res.render('index');
     });

     // app.post('/login', passport.authenticate('local-login',{
     //      usernameField: 'email',
     //      passwordField: 'password'
     // }), (req, res) =>{
     //      console.log(JSON.stringify(req.user));
     //           res.send({success:true, message:'user logged'})
     // });

     app.post('/post-test', (req, res) => {
          console.log('Got body:', req.headers);
          console.log('Got body:', req.get('password'));
          res.sendStatus(200);
     });

     app.post('/login',function(req, res, next) {
          passport.authenticate('local-login',(req,user,info)=>{
               console.log(req);
               console.log(user);
                console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
               req.logIn(user,function(err){
                    if(err) return next(err);
                    console.log('Dentro del req.login() callback')
                    console.log('User', user);

               })

          })(req, res, next);
     });


     app.post('/logout', (req, res) => {
          req.logout();
          res.redirect('/');
     });

     app.get('/home', isLoggedIn, (req, res) => {
          req.logout();
          res.redirect('/');
     });

     function isLoggedIn (req, res, next) {
          if (req.isAuthenticated()) {
               return next();
          }
          if(req.route.path ==='/login'){
               res.render('index');
          }else{
               res.redirect('/login');
          }

     }

};

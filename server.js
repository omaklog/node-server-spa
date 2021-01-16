const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const server = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

server.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);


const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');
const session = require('express-session');

const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');


// require('./config/passport')(passport);

server.set('port', process.env.PORT || 3000);
console.log("--->"+path.join(__dirname,'public'));
server.use(express.static(path.join(__dirname,'public')));
server.set('views',path.join(__dirname,'src/views'))
server.set('view engine', 'ejs');

server.use(morgan('dev'));
server.use(cookieParser());
server.use(bodyParse.urlencoded({extended: false}));

server.use(session({
   secret: 'juntechnicaltest',
   resave:false,
   saveUninitialized: false
}));

server.use(passport.initialize());
server.use(passport.session());
server.use(flash());

require('./src/server/routes/routes')(server,passport);


server.listen(server.get('port'), ()=>{
   console.log(`server runing on port ${server.get('port')}`);
});


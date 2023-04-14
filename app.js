var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true})

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var doctorRouter = require('./routes/doctor');
var SelectorRouter = require('./routes/Selector');
var boardRouter = require('./routes/board');
var doctor = require("./models/doctor");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/doctor', doctorRouter);
app.use('/board', boardRouter);
app.use('/Selector', SelectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await doctor.deleteMany();
let instance1 = new doctor({patient_Name:"Vijay", patient_Age:29,Mail_Id:"Vijay@gmail.com"});
instance1.save().then(doc=>
  {console.log("First object saved")}
  ).catch(err=>{console.error(err)});

  let instance2 = new doctor({patient_Name:"ajay", patient_Age:26,Mail_Id:"ajay@gmail.com"});
instance2.save().then(doc=>
  {console.log("Second object saved")}
  ).catch(err=>{console.error(err)});

  let instance3 = new doctor({patient_Name:"poojitha", patient_Age:33,Mail_Id:"poojitha@gmail.com"});
instance3.save().then(doc=>
  {console.log("Third object saved")}
  ).catch(err=>{console.error(err)});
}

let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;

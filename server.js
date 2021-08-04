const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/allroutes')



// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://errol:aUdi0o0o@cluster0.6ps2d.mongodb.net/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));
  

// register view engine
app.set('view engine', 'ejs');

//middle ware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



//routes

app.use('/',userRoutes);

// app.get('/newUser', (req, res) => {
//     res.render('Register', { title: 'Welcome page' });
//   });

//   app.get('/Dashboard', (req, res) => {
//     res.render('Dashboard', { title: 'Dashboard' });
//   });

//   app.get('/list', (req, res) => {
//     res.render('List', { title: 'List' });
//   });

//   app.get('/resetpassword', (req, res) => {
//     res.render('password', { title: 'ResetPassword' });
//   });

//   app.get('/newuser', (req, res) => {
//     res.render('Register', { title: 'Add New User' });
//   });
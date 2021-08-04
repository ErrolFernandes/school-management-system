const User = require('../models/user')
const Student = require('../models/studentData')
const Teacher = require('../models/TeacherData')
const bcrypt = require('bcrypt')

const newUser = (req, res) => {
        res.render('Register', { title: 'Add New User' });
      }

const addUser = async (req, res) => {
  console.log(req.body.email)
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({ name: req.body.name, email:req.body.email, password: hashedPassword,types:req.body.types });
    user.save()
      .then(result => {
        res.redirect('/userlist');
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  
const viewLogin = (req, res) => {
    res.render('Login', { title: 'Login' });
  }



  const loginUser=(req, res) => {
     
    const user = User.findOne({email:req.body.email})
     .then(async user=>{
    if (user == null) {
      return res.status(400).send('Cannot find user')
    }
    try {
      
      if(await bcrypt.compare(req.body.password, user.password)){
        
        res.render('Dashboard', { title: 'Dashboard'});
      }else {
        res.send('Not Allowed')
      }
    } catch {
      res.status(500).send()
    }})
  }

  

const userList = (req, res) => {
    Student.find().sort() && Teacher.find().sort()
      .then(result => {
        res.render('List', { student: result,teacher:result  });
      })
      .catch(err => {
        console.log(err);
      });
    }

    
  
  module.exports={
    viewLogin,
    newUser,
    addUser,
    loginUser,
    userList
    
  }
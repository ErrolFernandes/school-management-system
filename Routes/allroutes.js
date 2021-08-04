const express = require('express');
const loginController = require('../Controller/logincontroller');
// const marksController = require('../Controller/markscontroller');
// const studentController = require('../Controller/studentcontroller');
// const teacherController = require('../Controller/teachercontroller');


const router = express.Router();

//register
router.get('/newUser',loginController.newUser)
router.post('/newUser',loginController.addUser)

//login
router.get('/login',loginController.viewLogin)
router.post('/login',loginController.loginUser)

//userlist
router.get('/userlist',loginController.userList)

//student
// router.get('/studentdashboard',studentController.student_details)//list
// router.get('/studentdashboard/:id',studentController.delete_student_details)
// router.post('/studentdashboard',studentController.add_student_details)
// router.delete('/studentdashboard/:id',studentController.delete_student_details)
// router.put('/studentdashboard/:id',studentController.update_student_details)

// //teacher
// router.get('/teachersdashboard',teacherController.teacher_details)//list
// router.get('/teachersdashboard/:id',teacherController.teacher_details)
// router.post('/teachersdashboard',teacherController.add_teacher_details)
// router.delete('/teachersdashboard/:id',teacherController.delete_teacher_details)
// router.put('/teachersdashboard/:id',teacherController.update_teacher_details)

// //marks
// router.get('/marksheet',marksController.marks)
// router.post('/marksheet',marksController.add_marks)
// router.delete('/marksheet/:id',marksController.delete_marks)
// router.put('/marksheet/:id',marksController.update_marks)

module.exports = router;
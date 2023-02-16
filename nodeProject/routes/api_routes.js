const express = require("express")
const router = express.Router();
const coursesctr = require('../controller/courses');
const userctr = require('../controller/users');


router.get('/courses', coursesctr.allCourses);
router.post('/courses/new/:title/:abstract/:teacher', coursesctr.addCourse);
router.post('/users/new/:role/:unitnname', userctr.addUser);
router.get('/users', userctr.allUsers);
router.get('/users/students', userctr.allStudents);
router.get('/users/teachers', userctr.allTeachers);
router.get('/users/:unitnname', userctr.usersByUnitnname);


module.exports = router;
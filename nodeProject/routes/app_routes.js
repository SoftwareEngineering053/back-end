const express = require("express")
const router = express.Router();
const coursesctr = require('../controller/courses');
const userctr = require('../controller/users');


router.get('/users/:unitnname', userctr.usersByUnitnname);
router.get('/courses/view/:id', coursesctr.coursesById);
router.post('/courses/new/', coursesctr.addCourse);



module.exports = router;
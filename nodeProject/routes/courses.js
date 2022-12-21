const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses');


router.get('/courses', coursesController.allCourses);
router.post('/courses', ); 


module.exports = router;



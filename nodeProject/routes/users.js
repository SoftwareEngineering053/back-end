const router = require('express').Router();
const controller = require('../controllers/users');


router.post('/users/new/:role/:unitnname', controller.addUser);
router.get('/users', controller.allUsers);
router.get('/users/students', controller.allStudents);
router.get('/users/teachers', controller.allTeachers);
router.get('/users/:unitnname', controller.usersByUnitnname);


module.exports = router;
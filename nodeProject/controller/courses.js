const coursemodel = require('../model/courses');


const addCourse = async (req, res, next) => {
    result = await coursemodel.addCourse(req.title, req.abstract)
    res.status(200)
    res.send(result)
}

const allCourses = async (req, res, next) => {
    result = await coursemodel.allCourses()
    res.status(200)
    res.send(result)
}

const coursesById = async (req, res, next) => {
    result = await coursemodel.coursesById()
    res.status(200)
    res.send(result)
}

module.exports = {
    addCourse,
    allCourses,
    coursesById
};
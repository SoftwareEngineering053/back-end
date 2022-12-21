

const newCourse = (req, res, next) => {
    //res.json({message: "new course posted"});
};

const allCourses = (req, res, next) => {
    //res.json({message: "new tea posted"});
    res.json({title: "this is a course"});
};

//const addCourse

//const addSubscriber

//const addSubscriber


module.exports = { newCourse, allCourses /*, otherObject */};
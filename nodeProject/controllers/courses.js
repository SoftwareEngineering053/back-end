

const newCourse = (req, res, next) => {
    //res.json({message: "new course posted"});
};


const allCourses  = async (req, res, next) => {
    //res.json({message: "new tea posted"});
    let courses = await model.find({});
    courses = courses.map((course) => {
        return {
            id: course.id,
            titolo: course.titolo,
            abstract: course.abstract,
            docente: course.docente,
            studentiIscritti: course.studentiIscritti
        }
    });
    res.status(200).json(courses);
};
//const addCourse

//const addSubscriber

//const addSubscriber


module.exports = { newCourse, allCourses /*, otherObject */};

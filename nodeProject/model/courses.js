const mongoose = require('mongoose');

coursemodel = mongoose.model('Courses', new mongoose.Schema({
    id: 'Number',
    title: 'string',
    abstract: 'string',
    teacher: 'string',
}));

async function addCourse (title, abstract) {
    // Aggiunge un corso con titolo e abstract specificati
    // ritorna 0 in caso tutto sia andato a buon fine
    // -1 in caso di errore

    coursemodel.create({
        title: title,
        abstract: abstract,
        id: Math.floor(Math.random()*100000)    // TODO: mettere un auto increment
    }, function (err, user) {
        if (err){
            return -1;
        }
    })
    return 0;
};

async function allCourses () {
    let courses = await coursemodel.find({});
    courses = courses.map((course) => {
        return {
            id: course.id,
            titolo: course.title,
            abstract: course.abstract,
            docente: course.teacher,
            // studentiIscritti: course.studentiIscritti
        }
    });
    return courses;
};

async function coursesById (id) {
    let result = await coursemodel.find({id: id});
    result = result.map((course) => {
        return {
            titolo: course.title,
            abstract: course.abstract,
            docente: course.teacher,
        }
    });
    return result;
}


//const addSubscriber


module.exports = { coursemodel, addCourse, allCourses, coursesById /*, addSubscriber */};
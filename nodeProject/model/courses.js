const mongoose = require('mongoose');

coursemodel = mongoose.model('Courses', new mongoose.Schema({
    title: 'string',
    abstract: 'string',
    teacher: 'string',
}));

async function addCourse (title, abstract, teacher) {
    // Aggiunge un corso con titolo, abstract, ed insegnante specificati
    // ritorna 0 in caso l'operazione sia andata a buon fine
    // -1 in caso di errore

    const course = new coursemodel({
        title: title,
        abstract: abstract,
        teacher: teacher
    });
    course.save((err, data) => {
        if(err){
            return -1
        }
    })
    /*
    coursemodel.create({
        // per creare un nuovo oggetto devo mettere TUTTI i campi
        // oppure _id posso non metterlo e mongodb lo aggiunge da solo?
        title: title,
        abstract: abstract,
        teacher: teacher
    }, function (err, user) {
        if (err){
            return -1;
        }
    })
    */
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
        }
    });
    return courses;
};


module.exports = { coursemodel, addCourse, allCourses };
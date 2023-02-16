const mongoose = require('mongoose');
const courses = require('./courses');

model = mongoose.model('Subscriptions', new mongoose.Schema({
    _id: 'ObjectId',
    student: 'String',
    id: 'ObjectId'
}));


async function getCoursesByStudentName (name) {    
    titles = []
    findres = await model.find({student: name})

    for(const sub of findres){
        title = await courses.coursemodel.findById(sub.id)
        titles.push(title.title)
    }
    
    return titles
}

async function getCoursesByTeacherName (name) {
    findres = await courses.coursemodel.find({teacher: name})
    titles = []

    for(res of findres){
        titles.push(res.title)
    }

    return titles
}

async function getStudentsByCourseName (name) {
    
}

module.exports = {
    getCoursesByStudentName,
    getCoursesByTeacherName,
    getStudentsByCourseName
}
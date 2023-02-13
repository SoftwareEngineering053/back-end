const mongoose = require('mongoose');

model = mongoose.model('Subscriptions', new mongoose.Schema({
    student: 'String',
    id: 'Number'
}));


async function getCoursesByStudentName (name) {
    
}

async function getCoursesByTeacherName (name) {
    
}

async function getStudentsByCourseName (name) {
    
}

module.exports = {
    getCoursesByStudentName,
    getCoursesByTeacherName,
    getStudentsByCourseName
}
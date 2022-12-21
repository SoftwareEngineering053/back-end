const mongoose = require('mongoose');

module.exports = mongoose.model('Courses', new mongoose.Schema({
    id: 'int',
    titolo: 'string',
    abstract: 'string',
    docente: 'string',
    studentiIscritti: [{
        email: 'string',
    }]
}));


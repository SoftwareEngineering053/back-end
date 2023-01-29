const mongoose = require('mongoose');

module.exports = mongoose.model('Courses', new mongoose.Schema({
    id: 'number',
    titolo: 'string',
    abstract: 'string',
    docente: 'string',
    studentiIscritti: [{
        email: 'string',
    }]
}));


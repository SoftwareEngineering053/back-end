const mongoose = require('mongoose');

module.exports = mongoose.model('Courses', new mongoose.Schema({
    id: 'Number',
    titolo: 'string',
    abstract: 'string',
    docente: 'string',
    studentiIscritti: [{
        unitnName: 'string',
    }]
}));


const mongoose = require('mongoose');

module.exports = mongoose.model('Sample', new mongoose.Schema({
    id: 'int',
    numbers: [{
        value: 'int',
    }]
}));
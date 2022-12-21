const mongoose = require('mongoose');

module.exports = mongoose.model('Users', new mongoose.Schema({
    unitnName: 'String',
    name: 'String',
    surname: 'String',
    role: 'String'
}));
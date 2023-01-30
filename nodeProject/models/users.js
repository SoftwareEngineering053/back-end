const mongoose = require('mongoose');

module.exports = mongoose.model('Users', new mongoose.Schema({
    unitnName: 'String',
    firstname: 'String',
    lastname: 'String',
    role: 'String'
}));
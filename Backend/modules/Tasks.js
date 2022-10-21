const mongoose = require('mongoose');

const Tasks = mongoose.model('Tasks', {
    titulo: String, 
    descricao:  String,
    data: Date,
    executada: Boolean
})

module.exports = Tasks


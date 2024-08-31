//mongoose es un ODM (Object Data Model) que nos permite interactuar con la base de datos MongoDB de una manera más sencilla.
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const alumnoSchema = new Schema ({
    nombre: String,
    edad:Number
}, {versionKey:false})
module.exports = mongoose.model('alumnos', alumnoSchema)
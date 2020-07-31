const mongoose = require('mongoose')
// const Anuncio = require('../mongooseConnection')

// Definir el esquema
const Schema = mongoose.Schema

// Creamos el esquema
const AnuncioSchema = new Schema({
  nombre: String,
  // venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
})

// Creamos el modelo
// const Anuncio = db.model('Anuncio', AnuncioSchema)

module.exports = mongoose.model('Anuncio', AnuncioSchema)

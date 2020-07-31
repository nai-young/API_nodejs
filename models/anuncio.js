const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AnuncioSchema = new Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
})

module.exports = mongoose.model('Anuncio', AnuncioSchema)

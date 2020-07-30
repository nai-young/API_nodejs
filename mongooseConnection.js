require('./install_db')
const mongoose = require('mongoose')
// const conn = mongoose.createConnection()
const Schema = mongoose.Schema
// Conexión a Mongoose
const conn = mongoose.connect('mongodb://localhost')

// MongoDB
// const client = require('mongodb').MongoClient
// client.connect('mongodb://localhost:27017/Nodepop')

// Lo almacenamos en conn para verificar la conexión
// const conn = mongoose.connection
conn.on('error', console.error.bind(console, 'MongoDB Connection Error: '))
conn.once('open', function () {
  console.info('Connected to database!')
})
// Creamos el esquema
var AnuncioSchema = new Schema({
  nombre: String,
  venta: Boolean,
  precio: Number,
  foto: String,
  tags: [String]
})

// Creamos el modelo
const Anuncio = mongoose.model('Anuncio', AnuncioSchema)

// Guardar un anuncio
/* const bicicleta = new Anuncio({ nombre: 'Bicicleta' })
bicicleta.save(function (err, anuncioCreado) {
  if (err) return process.exit()
  console.log(`Anuncio de ${anuncioCreado.nombre} guardado`)
}) */

// Filtrar por nombre base de datos
/* Anuncio.find({
  nombre: /cle/i
}).sort('-created')
  .limit(5)
  .exec(function (err, anuncio) {
    if (err) throw err
    // console.log('Anuncio Encontrado: ', anuncio)
  }) */

exports.Anuncio = Anuncio
module.exports = conn

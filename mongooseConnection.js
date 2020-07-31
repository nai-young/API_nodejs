const mongoose = require('mongoose')
const conn = mongoose.connection

// Conexión a MongoDB
const client = require('mongodb').MongoClient
client.connect('mongodb://localhost:27017/Nodepop')

// Conexión a Mongoose
mongoose.connect('mongodb://localhost/Nodepop', function (err) {
  if (err) throw err
  console.log('Conexión a MongoDB con éxito')
})

// Verificamos la conexión
conn.on('connected', function () {
  console.info('Connected to Mongoose!')
})
conn.on('disconnected', () => {
  console.log('Mongoose disconnected.')
})
conn.on('error', console.error.bind(console, 'Mongoose Connection Error: '))

// Filtrar por nombre base de datos
/* Anuncio.find({
  nombre: /cle/i
}).sort('-created')
  .limit(5)
  .exec(function (err, anuncio) {
    if (err) throw err
    // console.log('Anuncio Encontrado: ', anuncio)
  }) */

module.exports = conn

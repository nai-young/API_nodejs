const mongoose = require('mongoose')
const db = mongoose.connection

// Conexión a MongoDB
const client = require('mongodb').MongoClient
client.connect('mongodb://localhost:27017/Nodepop', (err) => {
  if (err) throw err
  console.log('Conexión al cliente MongoDB con éxito')
})

// Conexión a Mongoose
mongoose.connect('mongodb://localhost/Nodepop', function (err) {
  if (err) console.log(`Error al conectar a la base de datos : ${err}`)
  console.info('Mongoose conectado a la base de datos con éxito')
})

// Verificamos la conexión
db.on('connected', function () {
  console.info('Conexión de Mongoose con éxito')
})
db.on('disconnected', () => {
  console.info('Mongoose disconnected.')
})
db.on('error', console.error.bind(console, 'Connection Error: '))

module.exports = db

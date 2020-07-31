/* const mongoClient = require('mongodb').MongoClient
mongoClient.connect('mongodb://localhost:27017/Nodepop', function (err, db) {
  if (err) {
    console.log(err)
    return process.exit() // Para que no se siga ejecutando, sale
  }
  db.db().collection('tabla_prueba').find().toArray(function (err, docs) {
    if (err) {
      console.log(err)
      return process.exit()
    }
    console.log(docs)
    db.close() // Cerramos la conexión
  })
}) */

// Cargamos el JSON de los anuncios
const fs = require('fs')
const anuncios = JSON.parse(fs.readFileSync('anuncios.json', 'utf-8'))
// console.log(anuncios.anuncios[0].nombre) // Nombre del primero

// Cargamos los modelos de anuncios
const Anuncio = require('./models/anuncio')

// Cargamos el módulo de conexión de Mongoose
const conn = require('./mongooseConnection.js')

// Borrar tablas e insertar anuncios
conn.once('open', function () {
  // Borramos las tablas (anuncios) anteriores
  Anuncio.collection.deleteMany({})
    .then(function () {
      console.log('Data deleted.')
    })
    .catch(function (err) {
      console.error(err)
    })

  // Insertamos los anuncios en la base de datos de MongoDB
  Anuncio.collection.insertMany(anuncios.anuncios)
    .then(result => {
      console.log(`Anuncios: ${result.insertedCount}, insertado correctamente.`)
      return result
    })
    .catch(err => console.error(`Error al insertar: ${err}`))
})

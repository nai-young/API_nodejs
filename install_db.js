
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

// Cargamos el módulo de conexión de Mongoose
require('./mongooseConnection')

// Cargamos el esquema

// Cargamos los modelos
const Anuncio = require('./models/anuncio')

var moto = new Anuncio({ nombre: 'moto' })
moto.save(function (err) {
  if (err) return console.log(err)
  console.log(moto.nombre)
})
// const moto = new Anuncio()
// moto.nombre = anuncios.nombre

/* const bicicleta = new Anuncio({ nombre: 'Bicicleta', venta: true, precio: 100 })
bicicleta.save() // Guarda en la base de datos
console.log(bicicleta) */

// Empezamos el proceso
/* conn.on('error', console.error.bind(console, 'MongoDB Conection Error: '))
conn.once('open', function () {
  console.info('Connected to MongoDB.')
}) */

/* Anuncio.collection.insertMany(anuncios, function (err, r) {
  if (err) {
    return console.error(err)
  } else {
    console.log('Multiple documents inserted to Collection')
  }
}) */

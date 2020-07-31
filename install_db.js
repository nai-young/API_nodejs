
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
var assert = require('assert')


// Cargamos el JSON de los anuncios
const fs = require('fs')
const anuncios = JSON.parse(fs.readFileSync('anuncios.json', 'utf-8'))

// Cargamos el módulo de conexión de Mongoose
require('./mongooseConnection')

// Cargamos el esquema

// Cargamos los modelos de anuncios
const Anuncio = require('./models/anuncio')

// Creamos los anuncios
const anunciosArray = []
// Guardamos los anuncios del .json en un array para
// hacer los modelos e insertarlos en la db
for (let i in anuncios) {
  for (let j in anuncios[i]) {
    anunciosArray.push({
      nombre: anuncios[i][j]
    })
  }
}
console.log(anunciosArray)
// Insertamos los anuncios en la base de datos de MongoDB
Anuncio.collection.insertMany(anunciosArray)
  .then(result => {
    console.log(`Articulo: ${result.insertedCount}, insertado correctamente.`)
    return result
  })
  .catch(err => console.error(`Error al insertar: ${err}`))

/* var anuncio = new Anuncio({ nombre: JSON.stringify(anuncios.nombre) })
anuncio.save(function (err) { // le pasamos un callback cuando acabe de guardarlo
  if (err) return console.log(err)
  console.log(`Anuncio de ${anuncio.nombre} creado!`)
  console.log(anuncio.nombre)
}) */

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

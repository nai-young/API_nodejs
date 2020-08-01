// Cargamos el JSON de los anuncios
const fs = require('fs')
const anuncios = JSON.parse(fs.readFileSync('anuncios.json', 'utf-8'))

// Cargamos los modelos de anuncios
const Anuncio = require('./models/anuncio')

// Cargamos el módulo de conexión de Mongoose
const db = require('./mongooseConnection.js')

// Borrar tablas e insertar anuncios
db.once('open', function () {
  // Borramos las tablas (anuncios) anteriores
  Anuncio.collection.deleteMany({})
    .then(() => {
      console.log('Anuncios en la base de datos eliminados.')
    })
    .catch(err => {
      console.error(err)
    })

  // Insertamos los anuncios en la base de datos de MongoDB
  Anuncio.collection.insertMany(anuncios.anuncios)
    .then(result => {
      console.log(`${result.insertedCount} anuncios insertados correctamente.`)
      return result
    })
    .catch(err =>
      console.error(`Error al insertar: ${err}`)
    )
})

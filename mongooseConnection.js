require('./install_db')
const mongoose = require('mongoose')
// const conn = mongoose.createConnection()

// Conexión a Mongoose
mongoose.connect('mongodb://localhost')

// MongoDB
// const client = require('mongodb').MongoClient
// client.connect('mongodb://localhost:27017/Nodepop')

// Verificamos la conexión
mongoose.connection.on('error', console.error.bind(console, 'MongoDB Connection Error: '))
mongoose.connection.once('open', function () {
  console.info('Connected to database!')
})
mongoose.connection.on('disconnected', () => {
  console.log('Database disconnected.')
})

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

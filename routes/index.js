var express = require('express')
var router = express.Router()
const app = express()
const boolParser = require('express-query-boolean')
app.use(boolParser())
require('../public/stylesheets/style.css')

const Anuncio = require('../models/anuncio')

// GET index
router.get('/', function (req, res, next) {
  res.locals.title = 'Nodepop'
  res.render('index')
})

// GET lista de anuncios
router.get('/apiv1/anuncios', async (req, res) => {
  res.locals.title = 'Nodepop'
/*  res.locals.nombre = req.query.nombre
  res.locals.venta = req.query.venta */
  // const allAnuncios = await Anuncio.find({})
  const filteredAnuncios = await parse(Anuncio.find(req.query))
  console.log(filteredAnuncios)

  res.render('index', { anuncios: filteredAnuncios })
  // Filtra la búsqueda por nombre
/*  if (typeof req.query.nombre !== 'undefined') {
    anunciosDB.filter(anuncio => {
      if (anuncio.nombre.toString() === req.query.nombre) {
        filtrados.push(anuncio)
      }
    })
  }

  // Filtra por venta (true o false)
  if (typeof req.query.venta !== 'undefined') {
    anunciosDB.filter(anuncio => {
      if (anuncio.venta.toString() === req.query.venta) {
        filtrados.push(anuncio)
      }
    })
  } */
})

// Crear un anuncio
router.post('/apiv1/anuncios', function (req, res) {
  res.locals.title = 'Nodepop'
  Anuncio.collection.insertOne({
    nombre: req.body.nombre,
    foto: req.body.foto,
    venta: req.body.venta,
    precio: req.body.precio,
    tags: req.body.tags
  })
  Anuncio.find({}, (err, data) => {
    const anuncios = data
    if (err) throw err
    res.render('index', { anuncios: anuncios })
  })
  console.log(`Anuncio de ${req.body.nombre} añadido correctamente.`)
})

module.exports = router

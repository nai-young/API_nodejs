const express = require('express')
const router = express.Router()

const Anuncio = require('../models/anuncio')

router.get('/:id', function (req, res, next) {
  res.locals.title = 'Nodepop'
  Anuncio.find({}, (err, data) => {
    if (err) throw err
    var anuncios = data
    console.log(data)
    res.render('apiv1', { anuncios: anuncios })
  })
})

// Añadir anuncios
router.post('/anuncios', function (req, res) {
  Anuncio.collection.insertOne({
    nombre: req.body.nombre,
    foto: req.body.foto,
    venta: req.body.venta,
    precio: req.body.precio,
    tags: req.body.tags
  })
  console.log(req.body)
  res.send(`Anuncio de: ${req.body.nombre} añadido correctamente.`)
})

module.exports = router

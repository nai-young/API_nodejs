const express = require('express')
const router = express.Router()
const Anuncio = require('../models/anuncio')

// Devuelve todos los anuncios

/* if (req.query.nombre) {
    const filters = {
      nombre: new RegExp('^' + req.query.nombre)
    }
    Anuncio.find({ nombre: filters.nombre }, (err, data) => {
      if (err) throw err
      const anunciosFiltrados = data
      res.render('apiv1', { anuncios: anunciosFiltrados })
    })
  } else if (req.query.venta) {
    Anuncio.find({ venta: req.query.venta }, (err, data) => {
      const anunciosFiltrados = data
      if (err) throw err
      console.log(data)
      res.render('apiv1', { anuncios: anunciosFiltrados })
    })
  } else {
    res.render('apiv1', { anuncios: anuncios })
  } */

/* router.get('/anuncios/:nombre([a-z])', (req, res, next) => {
  console.log('DATOS: ')
  Anuncio.find({ nombre: { $regex: '^' + req.query.nombre } }, (err, data) => {
    console.log('DATOS: ', data)
    if (err) throw err
    const anunciosFiltrados = data
    res.render('apiv1', { anuncios: anunciosFiltrados })
  })
}) */

// Añadir anuncios a la base de datos

module.exports = router

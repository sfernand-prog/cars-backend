const express = require('express');
const router = express.Router();
const Auto = require('../models/Auto');

// Obtener todos los autos
router.get('/', async (req, res) => {
  const autos = await Auto.find();
  res.json(autos);
});

// Obtener un auto por patente
router.get('/:patente', async (req, res) => {
  const auto = await Auto.findOne({ Patente: req.params.patente });
  if (!auto) return res.status(404).json({ error: 'Auto no encontrado' });
  res.json(auto);
});

// Actualizar un auto
router.put('/:patente', async (req, res) => {
  try {
    const auto = await Auto.findOneAndUpdate({ Patente: req.params.patente }, req.body, { new: true });
    res.json(auto);
  } catch (error) {
    res.status(500).json({ error: 'Error actualizando' });
  }
});

module.exports = router;

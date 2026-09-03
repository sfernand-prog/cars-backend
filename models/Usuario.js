const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  rol: { type: String, required: true },
  pass: { type: String, required: true }
}, { collection: 'usuarios' });

module.exports = mongoose.model('Usuario', usuarioSchema);

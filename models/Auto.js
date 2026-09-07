const mongoose = require('mongoose');

const autoSchema = new mongoose.Schema({
  Patente: { type: String, required: true, unique: true },
  AÑO: Number,
  Marca: String,
  Modelo: String,
  Version: String,
  KMS: Number,
  "N de dueños": Number,
  "N de multas": Number,
  "Año Ultimo Permiso": Number,
  "Ubicacion en el corral": String
}, { collection: 'autos' });

module.exports = mongoose.model('Auto', autoSchema);

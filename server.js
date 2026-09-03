const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(express.json());

// Reemplaza <credentials> con tu usuario y contraseña de MongoDB
mongoose.connect('mongodb://<credentials>@153.75.224.130:5432/cars?directConnection=true&authSource=admin')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar:', err));

app.use('/api/auth', authRoutes);

app.listen(3009, () => console.log('Servidor corriendo en el puerto 3009'));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const autoRoutes = require('./routes/autoRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Log global para ver cada petición que llega al servidor
app.use((req, res, next) => {
  console.log(`[SERVER] ${req.method} ${req.url} - Body recibido:`, req.body);
  next();
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar:', err));

app.use('/api/auth', authRoutes);
app.use('/api/autos', autoRoutes);

app.listen(3009, () => console.log('Servidor corriendo en el puerto 3009'));

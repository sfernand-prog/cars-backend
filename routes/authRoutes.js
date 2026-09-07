const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

router.post('/login', (req, res, next) => {
  console.log('[ROUTE] Entrando a la ruta POST /login');
  next();
}, login);

module.exports = router;

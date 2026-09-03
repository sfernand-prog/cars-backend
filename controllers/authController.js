const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { nombre, pass } = req.body;

  try {
    const usuario = await Usuario.findOne({ nombre });

    if (!usuario || usuario.pass !== pass) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      'TU_PALABRA_SECRETA', 
      { expiresIn: '4h' }
    );

    res.json({ mensaje: 'Autenticado', token, rol: usuario.rol });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = { login };

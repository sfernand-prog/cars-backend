const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { nombre, pass } = req.body;
  console.log(`[AUTH] Intento de login para usuario: '${nombre}', password: '${pass}'`);

  try {
    const usuario = await Usuario.findOne({ nombre });
    console.log(`[AUTH] Resultado de la búsqueda en BD:`, usuario);

    if (!usuario || usuario.pass !== pass) {
      console.log(`[AUTH] Falla de credenciales. ¿Existe usuario?: ${!!usuario}. ¿Pass coincide?: ${usuario ? usuario.pass === pass : 'N/A'}`);
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      'TU_PALABRA_SECRETA', 
      { expiresIn: '4h' }
    );
    
    console.log(`[AUTH] Login exitoso para el usuario: ${nombre}`);
    res.json({ mensaje: 'Autenticado', token, rol: usuario.rol });
  } catch (error) {
    console.error(`[AUTH] Error interno:`, error);
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = { login };

const express = require('express');
const router = express.Router();

router.get('/api/saludo', (req, res) => {
    res.json({ mensaje: '¡Bienvenido al juego de Triqui!' });
});

module.exports = router;

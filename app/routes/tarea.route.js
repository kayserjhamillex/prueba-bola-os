const express = require('express');
const router = express.Router();
const tareaCtrl = require('../controllers/tarea.controller');
/* GET lista las tareas */
router.get('/', tareaCtrl.listar);

/* GET tarea especifica */
router.get('/:tareaId', tareaCtrl.obtener);

/* POST nueva actividad pra la tarea */
router.post('/:tareaId/actividades', tareaCtrl.nuevaActividad);

module.exports = router;

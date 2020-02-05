const db = require('../models');

exports.listar = async function(req, res) {
  try {
    const tareas = await db.Tarea.findAll();
    res.render('tareas/listar', {session: req.session, tareas, error: null});
  } catch (error) {
    res.render('tareas/listar', {session: req.session, tareas: null, error: 'error interno'})
  }
}

exports.obtener = async function(req, res) {
  const { tareaId } = req.params;
  try {
    const tarea = await db.Tarea.findOne({
      where: {id: tareaId},
      include: [
        {
          model: db.Actividad,
          attributes: ['id', 'titulo', 'descripcion', 'finalizado'],
        }, 

      ],
    });
    res.render('tareas/ver', {session: req.session, tarea, error: null});
  } catch (error) {
    res.render('tareas/ver', {session: req.session, tarea: null, error: 'error interno'})
  }
}

exports.nuevaActividad = async function(req, res) {
  const {tareaId} = req.params;
  const data = {tareaId, ...req.body};
  try {
    const actividad = await db.Actividad.create(data);

    res.redirect('../'+tareaId);

  } catch (error) {
    res.render('tareas/ver', {session: req.session, tarea: null, error: 'error interno'})
  }
}

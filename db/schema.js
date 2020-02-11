const db = require('../app/models');

async function createSchema() {
  console.log('Iniciando la creacion de tablas');
  console.log('-----------------------------');
  try {
    // Definicion de modelos en orden de cracion
    await db.Usuario.sync({force: true});
    await db.Tarea.sync({force: true});
    await db.Actividad.sync({force: true});
    await db.Sprint.sync({force: true});

  } catch(err) {
    console.log('ERROR: ', err);
  }
  console.log('-----------------------------');
  console.log('Creacion de tablas finalizado');
}
// ejecucion de la funcion
createSchema();

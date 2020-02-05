const db = require('../app/models');
const crypto = require('crypto');

const now = new Date();
const {usuarios, tareas} = require('./data');

async function insertData() {
  console.log('Iniciando la insercion de tablas');
  console.log('-----------------------------');
  // usuarios
  for (const usuario of usuarios) {
    usuario.password = crypto.createHmac('sha256', 'llavedehash')
                               .update(usuario.password)
                               .digest('hex');
    await db.Usuario.create(usuario);
  }
  tareas
  for (const tarea of tareas) {
    await db.Tarea.create(tarea);
  }
  console.log('-----------------------------');
  console.log('Insercion de tablas finalizado');
}

// ejecucion de la funcion
insertData();

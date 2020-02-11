const db = require('../app/models');
const crypto = require('crypto');

const now = new Date();
const {usuarios, tareas} = require('./data');

const sprints = [
  {fechaInicio:'2020-02-14',fechaCierre:'2020-02-14',fechaReunion:'2020-02-14',titulo:'sprint1',descripcion:'desarrollo de api'},
  {fechaInicio:'2020-02-14',fechaCierre:'2020-02-14',fechaReunion:'2020-02-14',titulo:'sprint2',descripcion:'desarrollo de crud en admin'},
  {fechaInicio:'2020-02-14',fechaCierre:'2020-02-14',fechaReunion:'2020-02-14',titulo:'sprint3',descripcion:'desarrollo diseño de pagina'},
  {fechaInicio:'2020-02-14',fechaCierre:'2020-02-14',fechaReunion:'2020-02-14',titulo:'sprint4',descripcion:'desarrollo de funcionalidad'},
  {fechaInicio:'2020-02-14',fechaCierre:'2020-02-14',fechaReunion:'2020-02-14',titulo:'sprint5',descripcion:'desarrollo de app movil'},
];

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
    //cita
    for (const sprit of sprints){
      await db.Sprint.create(sprit);
    }
  console.log('-----------------------------');
  console.log('Insercion de tablas finalizado');
}

// ejecucion de la funcion
insertData();

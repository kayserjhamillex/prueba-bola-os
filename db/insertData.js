const db = require('../app/models');
const crypto = require('crypto');

const now = new Date();
const {usuarios, tareas} = require('./data');

const sprints = [
  {fechaInicio:'2020-01-06',fechaCierre:'2020-01-11',fechaReunion:'2020-01-14',titulo:'sprint1',descripcion:'desarrollo de api',tareaId:1},
  {fechaInicio:'2020-01-14',fechaCierre:'2020-01-16',fechaReunion:'2020-01-18',titulo:'sprint2',descripcion:'desarrollo de crud en admin',tareaId:4},
  {fechaInicio:'2020-01-19',fechaCierre:'2020-01-21',fechaReunion:'2020-01-22',titulo:'sprint3',descripcion:'desarrollo diseño de pagina',tareaId:7},
  {fechaInicio:'2020-02-02',fechaCierre:'2020-02-07',fechaReunion:'2020-02-10',titulo:'sprint4',descripcion:'desarrollo de funcionalidad',tareaId:3},
  {fechaInicio:'2020-02-11',fechaCierre:'2020-02-13',fechaReunion:'2020-02-14',titulo:'sprint5',descripcion:'desarrollo de app movil',tareaId:6},
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

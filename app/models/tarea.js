'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarea = sequelize.define(
    'Tarea',
    {
      titulo: DataTypes.STRING(50),
      descripcion: DataTypes.STRING(200),
      finalizado: { type: DataTypes.BOOLEAN, default: false },
      fechaInicio: { type: DataTypes.DATE },
      fechaFin: { type: DataTypes.DATE },
    },
    {schema: 'public'}
  );
  
  Tarea.associate = function(models) {
    Tarea.belongsTo(models.Usuario, {foreignKey: 'usuarioId'});
    Tarea.hasMany(models.Actividad, {foreignKey: 'tareaId'});
    Tarea.hasMany(models.Sprint, {foreignKey: 'tareaId'});
  };
  return Tarea;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Actividad = sequelize.define('Actividad', {
    // tareaId: { type: DataTypes.INTEGER, required: true },
    titulo: DataTypes.STRING(50),
    descripcion: DataTypes.STRING(200),
    finalizado: { type: DataTypes.BOOLEAN, default: false },
  }, {schema: 'public'});
  Actividad.associate = function(models) {
    Actividad.belongsTo(models.Tarea, {foreignKey: 'tareaId'});
  };
  return Actividad;
};
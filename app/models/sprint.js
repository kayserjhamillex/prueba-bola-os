'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sprint = sequelize.define(
    'Sprint',
    {
      fechaInicio: DataTypes.DATE,
      fechaCierre: DataTypes.DATE,
      fechaReunion: DataTypes.DATE,
      titulo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
    },
    {schema: 'public'}
  );
  
  Sprint.associate = function(models) {
    Sprint.belongsTo(models.Tarea, {foreignKey: 'usuarioId'});
  };
  return Sprint;
};
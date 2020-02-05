'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      nombres: DataTypes.STRING(50),
      apellidos: DataTypes.STRING(50),
      email: { type: DataTypes.STRING(50), unique: true },
      dni: { type: DataTypes.STRING(12), unique: true },
      password: DataTypes.STRING
    },
    {schema: 'public'}
  );

  Usuario.associate = function(models) {
    Usuario.hasMany(models.Tarea, {foreignKey: 'usuarioId'});
  };
  return Usuario;
};
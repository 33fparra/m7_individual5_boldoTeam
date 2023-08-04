import { Sequelize, DataTypes } from 'sequelize';

// Configuración de la conexión a la base de datos //aun no la creo jajajaja
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

// aca esta el modelito del rectangulo
const Rectangulo = sequelize.define('Rectangulo', {
  ladox: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ladoy: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Sincronización del modelo con la base de datos  esto esta raro y
Rectangulo.sync({ force: true })
  .then(() => console.log('Tabla Rectangulo creada')) 
  .catch(error => console.error('Error al crear la tabla Rectangulo:', error))
  .finally(() => sequelize.close());

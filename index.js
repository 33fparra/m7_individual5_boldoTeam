import { Sequelize, DataTypes } from 'sequelize';

// Configuración de la conexión a la base de datos //
const sequelize = new Sequelize('individual5', 'postgres', 'pipe1234', {
  host: 'localhost',
  dialect: 'postgres'
});

// aca esta el modelito del rectangulo
const RectanguloModel = sequelize.define('Rectangulo', {
  ladox: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ladoy: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const TrianguloModel = sequelize.define('Triangulo', {
  ladox: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ladoy: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ladoz: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

const CirculoModel = sequelize.define('Circulo', {
  Radior: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});



//las clases
class Rectangulo {
  constructor(x, y) {
  this.x = x;
  this.y = y
  }
  calcularArea() {
  return this.x * this.y;
  }
  calcularPerimetro() {
  return (this.x + this.y) * 2;
  }
}
  
class Triangulo {
    constructor(x, y) {
    this.x = x;
    this.y = y
  }
  calcularArea() {
  return (this.x * this.y) / 2;
  }
  calcularPerimetro() {
  let z = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  return (this.x + this.y + z);
  }
}
  
class Circulo {
    constructor(r) {
    this.r = r;
    }
    calcularArea() {
    return this.r * this.r * Math.PI;
    }
    calcularPerimetro() {
    return this.r * Math.PI * 2;
    }
}

// RectanguloModel.sync().then(() => {
//   console.log('nueva tabla Rectangulo creada');
//   }).finally(() => {
//   sequelize.close();
//   })
// TrianguloModel.sync().then(() => {
//   console.log('nueva tabla Triangulo creada');
//   }).finally(() => {
//   sequelize.close();
//   })
// CirculoModel.sync().then(() => {
//   console.log('nueva tabla Circulo creada');
//   }).finally(() => {
//   sequelize.close();
//   })


Promise.all([
  RectanguloModel.sync(),
  TrianguloModel.sync(),
  CirculoModel.sync()
]).then(() => {
  console.log('Tabla Rectangulo creada');
  console.log('Tabla Triangulo creada');
  console.log('Tabla Circulo creada');
  sequelize.close();
});
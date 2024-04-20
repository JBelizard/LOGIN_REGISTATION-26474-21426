import { INTEGER, STRING } from 'sequelize';
import { database } from '../config/context/database.js';
const ProductModel = database.define(
  'Product',
  /*isto é o nome da tabela da base de dados*/ {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
      allowNull: true,
    },
  }
);

export { ProductModel };







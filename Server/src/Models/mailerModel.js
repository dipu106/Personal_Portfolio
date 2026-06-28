import {connection} from './dbConfig.js';
import { DataTypes } from 'sequelize';

export const ContactMessage=connection.define("Notice", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },

  message: {
    type: DataTypes.TEXT,
   
  },
}, {
  timestamps: false,
});
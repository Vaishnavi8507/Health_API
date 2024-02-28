'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // Define association with Patient model
      Appointment.belongsTo(models.Patient, {
        foreignKey: 'PatientId',
        onDelete: 'CASCADE', // Add ON DELETE CASCADE here
        onUpdate: 'CASCADE', // Adjust based on your requirements
      });
    }
  }

  Appointment.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    AppointmentId:{
      type: DataTypes.INTEGER,

    },
    PatientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AppointmentDate: DataTypes.DATE,
    Symptoms: DataTypes.STRING,
    AppointmentTime: DataTypes.TIME,
    Remarks: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });

  return Appointment;
};

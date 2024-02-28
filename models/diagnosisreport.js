const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DiagnosisReport extends Model {
    static associate(models) {
      // define association here
      DiagnosisReport.belongsTo(models.Appointment, { foreignKey: 'id' });
    }
  }

  DiagnosisReport.init({
    DiagnosisId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    AppointmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE', // Cascade delete when associated Appointment is deleted
      references: {
        model: 'Appointments', // Name of the referenced table
        key: 'id', // Primary key of the referenced table
      },
    },
    DoctorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DiagnosedFor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DiagnosisDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Reason: {
      type: DataTypes.STRING,
      
    },
    Measures: {
      type: DataTypes.STRING,
      
    },
    // Existing fields remain unchanged
    Diagnosed: DataTypes.STRING,
    ReportUrl: DataTypes.STRING,
    
   
  }, {
    sequelize,
    modelName: 'DiagnosisReport',
  });

  return DiagnosisReport;
};

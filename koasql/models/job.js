'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
    
    Job.belongsTo(models.Company, {
      foreignKey: {
        allowNull: false
      }
    });

    Job.belongsToMany(models.Candidate, {
      through: 'Application'
    });
  };
  return Job;
};
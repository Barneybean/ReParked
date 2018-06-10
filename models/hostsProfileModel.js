module.exports = function(sequelize, DataTypes) {
    var Host = sequelize.define("Host", {
      // Giving the Host model a name of type STRING
      name: DataTypes.STRING
    });
  
    Host.associate = function(models) {
      // Associating Host with Posts
      // When an Host is deleted, also delete any associated Posts
      Host.hasMany(models.Post, {
        onDelete: "cascade"
      });
    };
  
    return Host;
  };
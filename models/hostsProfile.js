module.exports = function(sequelize, DataTypes) {
    var Host = sequelize.define("HostProfile", {
      // Giving the hostProfile model a name of type STRING
      //id will be auto assigned 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [1]
            }
        }
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
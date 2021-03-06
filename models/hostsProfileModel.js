module.exports = function(sequelize, DataTypes) {
  var Host = sequelize.define("hostsprofile", {
    // Giving the Host model a name of type STRING
    hostName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    hostEmail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [5]
      }
    }
  });

  Host.associate = function(models) {
    // Associating Host with Listings
    // When an Host is deleted, also delete any associated Listings
    Host.hasMany(models.listing, {
      onDelete: "cascade"
    });
  };

  return Host;
};

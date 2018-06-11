module.exports = function(sequelize, DataTypes) {
    var Renter = sequelize.define("rentersProfile", {
      // Giving the Renter model a name of type STRING
      RenterName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      RenterEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isEmail: true
        }
      }
    });
  
    Renter.associate = function(models) {
      // Associating Renter with Listings
      // When an Renter is deleted, also delete any associated Listings
      Renter.hasMany(models.Reservation, {
        onDelete: "cascade"
      });

      Renter.hasMany(models.RenterFavorite, {
        onDelete: "cascade"
      });


    };
  
    return Renter;
  };
  
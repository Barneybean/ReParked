module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("RenterFavorite", {
      // Giving the Host model a name of type STRING
      listingsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      renterId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
        len: [1]
        }
      }
    });
  
    Favorite.associate = function(models) {
      // Associating Host with Listings
      // When an Host is deleted, also delete any associated Listings
      Favorite.belongsTo(models.rentersProfile, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Favorite;
  };
  
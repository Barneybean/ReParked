module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    // Giving the Listings model a name of type STRING
      //id will be auto assigned 
    streetNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    streetName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [2]
      }
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1,5]
      }
    },
    latitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    longitude: {
      type: DataTypes.FLOAT(10,6),
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    hourlyRate: {
      type: DataTypes.FLOAT(10,2),
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len: [1]
      }
    }
  });

  Listing.associate = function(models) {
    // We're saying that a Listing should belong to an Host
    // A Listing can't be created without an Host due to the foreign key constraint
    Listing.belongsTo(models.hostsProfile, {    //many to one  models.table name not variable name 
      foreignKey: {  //foreign key is default to id
        allowNull: false
      }
    });

    Listing.hasMany(models.Reservation, {
      onDelete: "cascade"
    });
  };

  return Listing;
};

module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("reservation", {
    // Giving the Reservation model a name of type STRING
    //id will be auto assigned 
    vehicleMake: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    vehicleModel: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    licensePlate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    dateStart: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      len: [2]
      }
    },
    timeStart: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
    len: [2]
    }
    },
    timeEnd: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
      len: [1]
      }
    },
    note: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
      len: [1,45]
      }
    }
  });

  Reservation.associate = function(models) {
    // Associating Reservation with hosts
    // When an Host is deleted, also delete any associated Reservation
    Reservation.belongsTo(models.hostsprofile, {
      foreignKey: {
        allowNull: true
      }
    });

    Reservation.belongsTo(models.rentersprofile, {
      foreignKey: {
        allowNull: true
      }
    });
    //reservation also belongs to listing table
    Reservation.belongsTo(models.listing, {    //many to one  models.table name not variable name 
      foreignKey: {  //foreign key is default to id
        allowNull: true
      }
    });
  };

  //!!!Need to include a second belongsTo with Reservation so that if user deletes profile any of their reservation are also deleted!!!

  return Reservation;
};
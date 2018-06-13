module.exports = function(sequelize, DataTypes) {
  var Reservation = sequelize.define("reservation", {
    // Giving the Reservation model a name of type STRING
    //id will be auto assigned 
    vehicle_make: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    vehicle_model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    license_plate: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
      len: [2]
      }
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    time_start: {
    type: DataTypes.TIME,
    allowNull: false,
    validate: {
    len: [2]
    }
    },
    time_end: {
      type: DataTypes.TIME,
      allowNull: false,
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
    },
    });

  Reservation.associate = function(models) {
    // Associating Reservation with hosts
    // When an Host is deleted, also delete any associated Reservation
    Reservation.belongsTo(models.hostsprofile, {
      foreignKey: {
        allowNull: false
      }
    });

    Reservation.belongsTo(models.rentersprofile, {
      foreignKey: {
        allowNull: false
      }
    });
    //reservation also belongs to listing table
    Reservation.belongsTo(models.listing, {    //many to one  models.table name not variable name 
      foreignKey: {  //foreign key is default to id
        allowNull: false
      }
    });
  };

  //!!!Need to include a second belongsTo with Reservation so that if user deletes profile any of their reservation are also deleted!!!

  return Reservation;
};
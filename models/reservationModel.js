module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
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
      vehicleLicensePlate: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      dateStart: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
        len: [2]
        }
      },
      dateEnd: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      timeStart: {
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
      len: [2]
      }
      },
      timeEnd: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      totalTime: {
        type: DataTypes.INTEGER,
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
      Reservation.belongsTo(models.hostsProfile, {
        foreignKey: {
          allowNull: false
        }
      });

      Reservation.belongsTo(models.rentersProfile, {
        foreignKey: {
          allowNull: false
        }
      });
      //reservation also belongs to listing table
      Reservation.belongsTo(models.Listing, {    //many to one  models.table name not variable name 
        foreignKey: {  //foreign key is default to id
          allowNull: false
        }
      });
    };
  
    //!!!Need to include a second belongsTo with Reservation so that if user deletes profile any of their reservation are also deleted!!!
  
    return Reservation;
  };
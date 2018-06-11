module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Listing.associate = function(models) {
    // We're saying that a Listing should belong to an Host
    // A Listing can't be created without an Host due to the foreign key constraint
    Listing.belongsTo(models.Host, {    //many to one 
      foreignKey: {  //foreign key is default to id
        allowNull: false
      }
    });
  };

  return Listing;
};

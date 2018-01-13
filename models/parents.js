module.exports = function (sequelize, DataTypes) {

  var parents = sequelize.define("parents", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  parents.associate = function (models) {
    parents.hasMany(models.children, {
      onDelete: "cascade"
    });
    parents.hasMany(models.active_rewards, {
      onDelete: "cascade"
    })
    parents.hasMany(models.active_missions, {
      onDelete: "cascade"
    })
  }

  return parents;
};

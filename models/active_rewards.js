module.exports = function (sequelize, DataTypes) {
    const active_rewards = sequelize.define("active_rewards", {
        reward_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "I"
        },
        reward_status_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    });

    active_rewards.associate = function (models) {
        active_rewards.belongsTo(models.parent_rewards, {
            foreignKey: {
                allowNull: false
            }
        });
        active_rewards.belongsTo(models.children, {
            foreignKey: {
                allowNull: false
            }
        });

    };
    return active_rewards
};



let newParent = {
  first_name: loca
  last_name,
  uid
}

API.createParent(newParent)

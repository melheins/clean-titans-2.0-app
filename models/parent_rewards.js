module.exports = function (sequelize, DataTypes) {
    const parent_rewards = sequelize.define("parent_rewards", {
        reward_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reward_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reward_points_required: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        reward_category:
            {
                type: DataTypes.STRING,
                allowNull: false
            }
    });

    parent_rewards.associate = function (models) {
        parent_rewards.hasMany(models.active_rewards, {
            onDelete: "cascade"
        });
        parent_rewards.belongsTo(models.parents, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return parent_rewards
};

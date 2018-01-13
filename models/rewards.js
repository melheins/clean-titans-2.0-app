module.exports = function (sequelize, DataTypes) {
    const rewards = sequelize.define("rewards", {
        reward_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        reward_description: {
            type: DataTypes.TEXT,
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

    rewards.associate = function (models) {
        rewards.hasMany(models.active_rewards, {
            onDelete: "cascade"
        });

    };
    return rewards
};

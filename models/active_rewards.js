module.exports = function (sequelize, DataTypes) {
    const active_rewards = sequelize.define("active_rewards", {
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
            },
        reward_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "I"
        }
    });

    active_rewards.associate = function (models) {
        active_rewards.belongsTo(models.children, {
            foreignKey: {
                allowNull: false
            }
        });
        active_rewards.belongsTo(models.parents, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return active_rewards
};

module.exports = function (sequelize, DataTypes) {

    const children = sequelize.define("children", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        avatar: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        uid: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    children.associate = function (models) {
        children.belongsTo(models.parents, {
            foreignKey: {
                allowNull: false
            }
        });
        children.hasMany(models.active_rewards, {
            onDelete: "cascade"
        });
        children.hasMany(models.active_missions, {
            onDelete: "cascade"
        })
    };

    return children;
};

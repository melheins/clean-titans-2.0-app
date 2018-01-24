module.exports = function (sequelize, DataTypes) {

    const parent_missions = sequelize.define("parent_missions", {
        mission_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mission_point_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mission_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mission_video_url: {
            type: DataTypes.STRING
        }
    });
    parent_missions.associate = function (models) {
        parent_missions.belongsTo(models.parents, {
            foreignKey: {
                allowNull: false
            }
        });
        parent_missions.hasMany(models.active_missions, {
            onDelete: "cascade"
        });
    };
    return parent_missions
};

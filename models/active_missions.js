module.exports = function (sequelize, DataTypes) {
    const active_missions = sequelize.define("active_missions", {
        mission_status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "I"
        },
        mission_status_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        mission_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mission_point_value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mission_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        mission_video_url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });

    active_missions.associate = function (models) {
        active_missions.belongsTo(models.missions, {
            foreignKey: {
                allowNull: false
            }
        });
        active_missions.belongsTo(models.children, {
            foreignKey: {
                allowNull: false
            }
        });
        active_missions.belongsTo(models.parents, {
          foreignKey: {
            allowNull: false
          }
        })

    };
    return active_missions

};

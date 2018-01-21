module.exports = function (sequelize, DataTypes) {

    const avatars = sequelize.define("avatars", {
        avatar_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return avatars
};

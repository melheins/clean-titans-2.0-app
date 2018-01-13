var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AvatarSchema = new Schema({
    // `name` must be unique and of type String
    name: {
        type: String,
        allowNull: false,
        unique: true
    },
    link: {
        type: String,
        allowNull: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Avatars = mongoose.model("Avatars", AvatarSchema);

// Export the Avatars model
module.exports = Avatars;

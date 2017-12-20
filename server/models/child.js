var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ChildSchema = new Schema({
    // `name` must be unique and of type String
    first_name: {
        type: String,
        allowNull: false
    },
    nickname: {
        type: String,
        allowNull: false
    },
    current_points: {
        type: Number,
        default: 0
    },
    // The ref property links these ObjectIds to the Parent model
    avatars_id: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Parent model
        ref: "Avatars"
    },
    parent_id: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Parent model
        ref: "Parent"
    }
});

// This creates our model from the above schema, using mongoose's model method
var Child = mongoose.model("Child", ChildSchema);

// Export the Child model
module.exports = Child;

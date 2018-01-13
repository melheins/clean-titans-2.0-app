var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var ParentSchema = new Schema({
    // `name` must be unique and of type String
    email: {
        type: String,
        unique: true
    },
    first_name: {
        type: String,
        allowNull: false
    },
    last_name: {
        type: String,
        allowNull: false
    }
});

// This creates our model from the above schema, using mongoose's model method
var Parent = mongoose.model("Parent", ParentSchema);

// Export the Parent model
module.exports = Parent;

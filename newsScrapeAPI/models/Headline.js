var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// This is similar to a Sequelize model
var HeadlineSchema = new Schema({
    // `title` is required and of type String
    title: {
        type: String,
        required: true
    },
    // `link` is required and of type String
    link: {
        type: String,
        required: true
    },
    isSaved: {
        type: Boolean,
        required: true,
        default: false
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// This creates our model from the above schema, using mongoose's model method
var Headline = mongoose.model("Headline", HeadlineSchema);

module.exports = Headline;
const { Schema, model } = require("mongoose");

// schema to create User model
const userSchema = new Schema(
  {
    // define username field
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // define email field
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    // define thoughts field as an array
    thoughts: [
        {
            // create _id values
            type: Schema.Types.ObjectId,
            // reference the Thought model
            ref: "Thought",
        }
    ],
    // define friends field as array
    friends: [
        {
            // create _id values
            type: Schema.Types.ObjectId,
            // reference the User model
            ref: "User",
        }
    ],
  },
  {
    // allow virtuals to be created
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// create a virtual property to get friend count associated with each user
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// function to validate email with regex
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

// initialize User model
const User = model('user', userSchema);

module.exports = User;
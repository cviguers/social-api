const { Schema, Types, model } = require("mongoose");

// define schema for reactions
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    // include virtuals and getters when converting to json
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// define schema for thoughts
const thoughtSchema = new Schema(
  {
    // define thoughttext field as string
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 5000,
    },
    // define createdAt field as date
    createdAt: {
      type: Date,
      // default to current time with getter
      default: Date.now,
    },
    // define username field as string
    username: {
      type: String,
      // reference the User model
      ref: "User",
    },
    // array of nested documents referenced through the reactionSchema
    reactions: [reactionSchema],
  },
  {
    // allow virtuals and getters to be created
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

// create a virtual property to get reaction count associated with each thought
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// initialize Thought model
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;

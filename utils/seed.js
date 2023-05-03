const connection = require("../config/connction");
const { Thought, User } = require("../models");
const { getRandomName, getRandomThoughts } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Thought.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const thoughts = getRandomThoughts(8);

  for (let i = 0; i < 8; i++) {
    const fullName = getRandomName();
    const username = fullName;
    const email = `${fullName.split(" ")[1]}@gmail.com`;

    users.push({
      username,
      email,
    });
  }

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.log(users);
  process.exit(0);
});

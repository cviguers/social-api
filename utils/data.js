// current hardcoded usernames
const names = [
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Tanner',
  'Tanvir',
  'Tanzeel',
  'Taonga',
  'Tarik',
  'Tariq-Jay',
  'Tate',
  'Taylan',
  'Taylar',
  'Tayler',
  'Taylor',
  'Taylor-Jay',
  'Taylor-Lee',
  'Tayo',
  'Tayyab',
  'Tayye',
  'Tayyib',
  'Teagan',
  'Zakk',
  'Zamaar',
  'Zander',
  'Zane',
  'Zarran',
  'Zayd',
  'Zayn',
  'Zayne',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  ``,
];

// current hardcoded thoughts
const thoughtText = [
  'i love my dog',
  'i love my cat',
  'i miss my animals when i go on vacation',
  'thankfully pete and juniper have a babysitter if they cant travel with me',
  'the last national park i visited was grand canyon',
  'glacier is my favorite national park i have visited so far',
  'hiking cascades in tetons to see the moose was 10/10',
  'i am excited to go to joshua tree next',
  'i hope i see a condor',
  ``,
];

const reactionBody = [
  'did you upload to the shared album yet',
  'venmo me',
  'wanna move here',
  'jk need to work',
  ':,)',
  ``,
];

// function to randomly pick from an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// gets a random full name by combining two items in the names array
const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// function to generate random thoughts and apply reactions
const getRandomThoughts = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtText),
      reactions: [...getThoughtReactions(2)],
    });
  }
  return results;
};

// create the reactions that will be added to each thought
const getThoughtReactions = (int) => {
  if (int === 1) {
    return getRandomArrItem(reactionBody);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      reactionBody: getRandomArrItem(reactionBody),
      username: getRandomName(),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomThoughts };

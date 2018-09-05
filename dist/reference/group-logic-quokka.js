const groupLength = 4;
const users = [
  { name: 'Jed' },
  { name: 'Beag' },
  { name: 'Tron' },
  { name: 'Janet' },
  { name: 'Afd' },
  { name: 'Yuni' },
  { name: 'Quaor' },
  { name: 'Hannit' },
  { name: 'Frost' },
  { name: 'Cayt' },
  { name: 'Billabong' },
  { name: 'SeriosSam' },
  { name: 'AceDaultless' } 
];
const userGroups = [
  {
    'Jed': { name: 'Jed' },
    'Berg': { name: 'Berg' },
  },
  {
    'Jed': { name: 'Jed' },
    'Beag': { name: 'Beag' },
    'Tron': { name: 'Tron' },
  },
  {
    'Janet': { name: 'Janet' },
    'Afd': { name: 'Afd' },
    'Yuni': { name: 'Yuni' },
    'Quaor': { name: 'Quaor' },
  },
  {
    'Hannit': { name: 'Hannit' },
    'Frost': { name: 'Frost' },
  },
  {
    'Cayt': { name: 'Cayt' },
    'Billabon': { name: 'Billabong' },
    'SeiosSam': { name: 'SeriosSam' },
    'AceDaultless': { name: 'AceDaultless' } 
  },
];


function processGroups(userGroups) {
  userGroups.forEach(userGroup => handleLastGroup(userGroup));
  return userGroups;
} 

function group(users) {

  const newArr = [];
  let groupHolder = {};

  users.forEach((user, index) => {
    if (index % groupLength === 0 && Object.keys(groupHolder).length) {
      newArr.push(groupHolder);
      groupHolder = {};
    }

    groupHolder[user.name] = user;

    if (users.length === (index + 1)) {
      handleLastGroup(groupHolder);
    }

  });

  return newArr;
}


function handleLastGroup(lastGroup) {
  const lastGroupAmount = Object.keys(lastGroup).length;
  if (lastGroupAmount === groupLength) return lastGroup;
  const botsToAdd = groupLength - lastGroupAmount;
  const bots = generateBots(botsToAdd);
  bots.forEach(bot => { lastGroup[bot.name] = bot });
}


function generateBots(numBots) {
  const botsArray = [];
  let counter = numBots;

  while (counter) {
    botsArray.push(
      { name: `Bot${Math.floor(Math.random() * 1000)}` }
    );
    counter--;
  }
  return botsArray;
}
  
const groupedUsers1 = group(users);
const groupedUsers2 = processGroups(userGroups);
console.log(groupedUsers1);
console.log(groupedUsers2);
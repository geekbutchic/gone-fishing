const prompt = require("prompt-sync")({ sigint: true });

let fishDescription1 = [
  "Slippery",
  "Stinky",
  "Scaly",
  "Shiny",
  "Slimy",
  "Bottom Dwelling",
  "Fat",
  "Skinny",
  "Bug Eyed",
  "Iridescent",
];
let fishDescription2 = [
  "Stripped",
  "Pearl",
  "Silver",
  "Red",
  "Orange",
  "Rare",
  "White-Bellied",
  "Bony",
  "Green",
  "Yellow",
];
let fishType = [
  "Salmon",
  "Tuna",
  "Trout",
  "Bass",
  "Cod",
  "Catfish",
  "Snapper",
  "Tilapia",
  "Herring",
  "Grouper",
];
//==========================================================================//

// let name1 =
//   fishDescription1[Math.floor(Math.random() * fishDescription1.length)];
// let name2 =
//   fishDescription2[Math.floor(Math.random() * fishDescription2.length)];
// let fish = fishType[Math.floor(Math.random() * fishType.length)];
// let fishWeight = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
// let fishValue = Math.floor(Math.random() * (1000 - 100) + 100) / 100;


// console.log(`You Caught a 🎣 ${name1} ${name2} ${fish} that weighs ${fishWeight} lbs valued at ${fishValue} dollars`);

// let message = prompt('Would you like to [catch] === c or [release] === r: ')

let caughtFish = []

const randomFishName = (fishDescription1, fishDescription2, fishType) => {
  let name1 =
    fishDescription1[Math.floor(Math.random() * fishDescription1.length)];
  let name2 =
    fishDescription2[Math.floor(Math.random() * fishDescription2.length)];
  let fish = fishType[Math.floor(Math.random() * fishType.length)];
  return name1 + " " + name2 + " " + fish
};

// console.log(randomFishName(fishDescription1, fishDescription2, fishType));

const fishWeight = (fishWeight) => {
    let weight = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    return weight + " lbs"
}

// console.log(fishWeight());

const fishValue = (fishValue) => {
    let value = Math.floor(Math.random() * (1000 - 100) + 100) / 100;
    return "$" + value
}

// console.log(fishValue());

let fishName = randomFishName(fishDescription1, fishDescription2, fishType)
// console.log(fishName);
let weight = fishWeight();
// console.log(weight);
let value = fishValue();
// console.log(value);

const fish = {
    fish: fishName,
    fishWeight: weight,
    fishValue: value,
}

//GENERATES OBJECT FISH
console.log(`Good Morning 🌞 you caught a 🎣 ${fishName}`)
console.log(`Approximate weight: ${weight}`);
console.log(`Valued at ${value}`);

let catchMessage = prompt("Would you like to keep this fish? [yes] or [no] > ")


if (catchMessage === "yes") {
  caughtFish.push(fish)
  console.log(caughtFish);
} else if (catchMessage === "no") {
  console.log(`Not a good fish to keep, let's keep going plenty of time!!!`);
}


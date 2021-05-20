// 1. Declare and assign the variables here:
let shuttleName = 'USS Winds of Uranus';
let shuttleSpeedMph = 17500;
let distToMarsKm = 225000000;
let distToMoonKm = 384000;
let milesPerKm = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(shuttleName);
console.log(shuttleSpeedMph);
console.log(distToMarsKm);
console.log(distToMoonKm);
console.log(milesPerKm);

// Code your solution to exercises 3 and 4 here:
let milesToMars = distToMarsKm*milesPerKm;
let hrsToMars = milesToMars/shuttleSpeedMph;
let daysToMars = hrsToMars/24;

console.log(shuttleName, "will take", daysToMars, "to reach Mars.");

// Code your solution to exercise 5 here:
let milesToMoon = distToMoonKm*milesPerKm;
let hrsToMoon = milesToMoon/shuttleSpeedMph;
let daysToMoon = hrsToMoon/24;

console.log(shuttleName, "will take", daysToMoon, "to reach the Moon.");
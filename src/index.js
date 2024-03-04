// npc-generation-tool.js

// Import the random-identity-generator module
const generateRandomIdentity = require('random-identity-generator');

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate NPC data
function generateNPC(npcCount) {
  const npcs = [];

  for (let i = 0; i < npcCount; i++) {
    const identity = generateRandomIdentity(); // Generate a random identity
    const health = getRandomNumber(1, 100); // Randomly assign health between 1 and 100

    npcs.push({
      id: i + 1,
      name: identity.name,
      gender: identity.gender,
      nationality: identity.nationality,
      age: identity.age,
      health: health
    });
  }

  return npcs;
}

// Export the generateNPC function as a module
module.exports = generateNPC;

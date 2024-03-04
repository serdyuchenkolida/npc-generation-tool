# NPC Generation Tool

This npm package provides a simple JavaScript module to generate Non-Player Character (NPC) data. It utilizes the `random-identity-generator` module to create random identities for NPCs and allows the user to specify the number of NPCs to generate.

## Installation

To use this package in your project, you can install it via npm:

```bash
npm install npc-generation-tool
```

## Usage

```javascript
// Import the generateNPC function from the npc-generation-tool module
const generateNPC = require('npc-generation-tool');

// Generate NPC data with user-defined count
const npcCount = 5; // Adjust NPC count as needed
const generatedNPCs = generateNPC(npcCount);
console.log(generatedNPCs);
```

The generated NPC data will be an array of objects, where each object represents an NPC and includes properties such as `id`, `name`, `gender`, `nationality`, `age`, and `health`.

## Example

```javascript
// Example usage
const generateNPC = require('npc-generation-tool');

// Generate NPC data with user-defined count
const npcCount = 10; // Adjust NPC count as needed
const generatedNPCs = generateNPC(npcCount);
console.log(generatedNPCs);
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allAnimals = exports.aviaries = exports.Deers = exports.Camels = exports.Penguins = exports.Tigers = exports.Bears = exports.Snakes = exports.Parrots = exports.DeerDescription = exports.CamelDescription = exports.PenguinDescription = exports.TigerDescription = exports.BearDescription = exports.SnakeDescription = exports.ParrotDescription = void 0;
exports.ParrotDescription = {
    kindOfAnimal: 'Parrot',
    biomes: ['tropical'],
    isPondRequired: false,
    requiredArea: 2,
    food: ['fruits', 'seeds'],
    isPredator: false
};
exports.SnakeDescription = {
    kindOfAnimal: 'Snake',
    biomes: ['tropical', 'desert'],
    isPondRequired: false,
    requiredArea: 3,
    food: ['meat'],
    isPredator: true
};
exports.BearDescription = {
    kindOfAnimal: 'Bear',
    biomes: ['taiga'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fish', 'meat'],
    isPredator: true
};
exports.TigerDescription = {
    kindOfAnimal: 'Tiger',
    biomes: ['tropical'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fish', 'meat'],
    isPredator: true
};
exports.PenguinDescription = {
    kindOfAnimal: 'Penguin',
    biomes: ['ice'],
    isPondRequired: true,
    requiredArea: 4,
    food: ['fish'],
    isPredator: true
};
exports.CamelDescription = {
    kindOfAnimal: 'Camel',
    biomes: ['desert'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fruits', 'vegetables'],
    isPredator: false
};
exports.DeerDescription = {
    kindOfAnimal: 'Deer',
    biomes: ['taiga'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['vegetables'],
    isPredator: false
};
exports.Parrots = [
    {
        description: exports.ParrotDescription,
        foodRequired: 1,
        age: 2,
        name: 'A'
    },
    {
        description: exports.ParrotDescription,
        foodRequired: 1,
        age: 3,
        name: 'B'
    }
];
exports.Snakes = [
    {
        description: exports.SnakeDescription,
        foodRequired: 2,
        age: 3,
        name: 'A'
    },
    {
        description: exports.SnakeDescription,
        foodRequired: 3,
        age: 5,
        name: 'B'
    }
];
exports.Bears = [
    {
        description: exports.BearDescription,
        foodRequired: 4,
        age: 3,
        name: 'A'
    },
    {
        description: exports.BearDescription,
        foodRequired: 5,
        age: 6,
        name: 'B'
    }
];
exports.Tigers = [
    {
        description: exports.TigerDescription,
        foodRequired: 4,
        age: 3,
        name: 'A'
    },
    {
        description: exports.TigerDescription,
        foodRequired: 5,
        age: 6,
        name: 'B'
    }
];
exports.Penguins = [
    {
        description: exports.PenguinDescription,
        foodRequired: 2,
        age: 3,
        name: 'A'
    },
    {
        description: exports.PenguinDescription,
        foodRequired: 3,
        age: 6,
        name: 'B'
    }
];
exports.Camels = [
    {
        description: exports.CamelDescription,
        foodRequired: 3,
        age: 3,
        name: 'A'
    },
    {
        description: exports.CamelDescription,
        foodRequired: 3,
        age: 5,
        name: 'B'
    }
];
exports.Deers = [
    {
        description: exports.DeerDescription,
        foodRequired: 3,
        age: 3,
        name: 'A'
    },
    {
        description: exports.DeerDescription,
        foodRequired: 3,
        age: 5,
        name: 'B'
    }
];
exports.aviaries = [{
        animals: [],
        biome: "ice",
        area: 20,
        hasPond: true
    },
    {
        animals: [],
        biome: "desert",
        area: 20,
        hasPond: false
    },
    {
        animals: [],
        biome: "taiga",
        area: 20,
        hasPond: false
    },
    {
        animals: [],
        biome: "tropical",
        area: 20,
        hasPond: false
    }];
exports.allAnimals = [
    ...exports.Parrots,
    ...exports.Snakes,
    ...exports.Bears,
    ...exports.Tigers,
    ...exports.Penguins,
    ...exports.Camels,
    ...exports.Deers
];
//# sourceMappingURL=consts.js.map
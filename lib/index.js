"use strict";
const ParrotDescription = {
    kindOfAnimal: 'Parrot',
    biomes: ['tropical'],
    isPondRequired: false,
    requiredArea: 2,
    food: ['fruits', 'seeds'],
    isPredator: false
};
const SnakeDescription = {
    kindOfAnimal: 'Snake',
    biomes: ['tropical', 'desert'],
    isPondRequired: false,
    requiredArea: 3,
    food: ['meat'],
    isPredator: true
};
const BearDescription = {
    kindOfAnimal: 'Bear',
    biomes: ['taiga'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fish', 'meat'],
    isPredator: true
};
const TigerDescription = {
    kindOfAnimal: 'Tiger',
    biomes: ['tropical'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fish', 'meat'],
    isPredator: true
};
const PenguinDescription = {
    kindOfAnimal: 'Penguin',
    biomes: ['ice'],
    isPondRequired: true,
    requiredArea: 4,
    food: ['fish'],
    isPredator: true
};
const CamelDescription = {
    kindOfAnimal: 'Camel',
    biomes: ['desert'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fruits', 'vegetables'],
    isPredator: false
};
const DeerDescription = {
    kindOfAnimal: 'Deer',
    biomes: ['taiga'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['vegetables'],
    isPredator: false
};
const Parrots = [
    {
        description: ParrotDescription,
        foodRequired: 1,
        age: 2,
        name: 'A'
    },
    {
        description: ParrotDescription,
        foodRequired: 1,
        age: 3,
        name: 'B'
    }
];
const Snakes = [
    {
        description: SnakeDescription,
        foodRequired: 2,
        age: 3,
        name: 'A'
    },
    {
        description: SnakeDescription,
        foodRequired: 3,
        age: 5,
        name: 'B'
    }
];
const Bears = [
    {
        description: BearDescription,
        foodRequired: 4,
        age: 3,
        name: 'A'
    },
    {
        description: BearDescription,
        foodRequired: 5,
        age: 6,
        name: 'B'
    }
];
const Tigers = [
    {
        description: TigerDescription,
        foodRequired: 4,
        age: 3,
        name: 'A'
    },
    {
        description: TigerDescription,
        foodRequired: 5,
        age: 6,
        name: 'B'
    }
];
const Penguins = [
    {
        description: PenguinDescription,
        foodRequired: 2,
        age: 3,
        name: 'A'
    },
    {
        description: PenguinDescription,
        foodRequired: 3,
        age: 6,
        name: 'B'
    }
];
const Camels = [
    {
        description: CamelDescription,
        foodRequired: 3,
        age: 3,
        name: 'A'
    },
    {
        description: CamelDescription,
        foodRequired: 3,
        age: 5,
        name: 'B'
    }
];
const Deers = [
    {
        description: DeerDescription,
        foodRequired: 3,
        age: 3,
        name: 'A'
    },
    {
        description: DeerDescription,
        foodRequired: 3,
        age: 5,
        name: 'B'
    }
];
const aviaries = [{
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
const allAnimals = [
    ...Parrots,
    ...Snakes,
    ...Bears,
    ...Tigers,
    ...Penguins,
    ...Camels,
    ...Deers
];
main();
function main() {
    console.log('Кол-во еды для всего зоопарка: ' + getAmountOfFoodNeeded(allAnimals));
    putAnimalsInAviaries(allAnimals);
    console.log(JSON.stringify(aviaries));
    console.log('Незаселённые животные: ' + JSON.stringify(allAnimals));
}
function getAmountOfFoodNeeded(animals) {
    let result = 0;
    for (const animal of animals)
        result = result + animal.foodRequired;
    return result;
}
function putAnimalsInAviaries(animals) {
    for (const aviary of aviaries) {
        for (const animal of animals) {
            if (tryPutInAviary(aviary, animal)) {
                removeItem(animals, animal);
                break;
            }
        }
    }
}
function tryPutInAviary(aviary, animal) {
    // if (animal.description.kindOfAnimal === 'Penguin' && aviary.biome === 'ice') {
    //     let q = 0;
    // }
    if (canBePuttedInAviary(aviary, animal)) {
        aviary.animals.push(animal);
        return true;
    }
    return false;
}
function removeFromAviary(aviary, animal) {
    removeItem(aviary.animals, animal); //сравнение по ссылке
}
function removeItem(arr, item) {
    arr = arr.filter(arrItem => arrItem != item);
}
function canBePuttedInAviary(aviary, animal) {
    let errorMessage = '';
    if (isAppropriateBySize(aviary, animal) === false)
        errorMessage = errorMessage + 'Недостаточно места. ';
    if (isAppropriateByBiome(animal.description.biomes, aviary.biome) === false)
        errorMessage = errorMessage + 'Неподходящий биом. ';
    if (isAppropriateByPond(aviary, animal) === false)
        errorMessage = errorMessage + 'Нет водоёма. ';
    if (isAppropriateByDiet(aviary, animal) === false)
        errorMessage = errorMessage + 'Не подходит по рациону.';
    if (errorMessage !== '') {
        console.log(errorMessage);
        return false;
    }
    return true;
}
function isAppropriateBySize(aviary, animal) {
    return animal.description.requiredArea < (aviary.area - getAllAnimalsArea(aviary));
}
function isAppropriateByBiome(arr, val) {
    return arr.some((arrVal) => val === arrVal);
}
function isAppropriateByPond(aviary, animal) {
    if (aviary.hasPond === false && animal.description.isPondRequired)
        return false;
    return true;
}
function isAppropriateByDiet(aviary, animal) {
    if (animal.description.isPredator
        && DoesAviaryContainOtherKind(aviary, animal) === false)
        return true;
    if (animal.description.isPredator === false
        && DoesAviaryContainPredator(aviary) === false)
        return true;
    return false;
}
function getAllAnimalsArea(aviary) {
    let result = 0;
    for (const animal of aviary.animals) {
        result = result + animal.description.requiredArea;
    }
    return result;
}
function DoesAviaryContainPredator(aviary) {
    for (const animal of aviary.animals) {
        if (animal.description.isPredator)
            return true;
    }
    return false;
}
function DoesAviaryContainOtherKind(aviary, animal) {
    for (const avAnimal of aviary.animals) {
        if (avAnimal.description.kindOfAnimal !== animal.description.kindOfAnimal)
            return true;
    }
    return false;
}
//# sourceMappingURL=index.js.map
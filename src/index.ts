const ParrotDescription: AnimalDescription = {
    kindOfAnimal: 'Parrot',
    biomes: ['tropical'],
    isPondRequired: false,
    requiredArea: 2,
    food: ['fruits', 'seeds'],
    isPredator: false
}

const SnakeDescription: AnimalDescription = {
    kindOfAnimal: 'Snake',
    biomes: ['tropical', 'desert'],
    isPondRequired: false,
    requiredArea: 3,
    food: ['meat'],
    isPredator: true
}

const BearDescription: AnimalDescription = {
    kindOfAnimal: 'Bear',
    biomes: ['taiga'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fish', 'meat'],
    isPredator: true
}

const TigerDescription: AnimalDescription = {
    kindOfAnimal: 'Tiger',
    biomes: ['tropical'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fish', 'meat'],
    isPredator: true
}

const PenguinDescription: AnimalDescription = {
    kindOfAnimal: 'Penguin',
    biomes: ['ice'],
    isPondRequired: true,
    requiredArea: 4,
    food: ['fish'],
    isPredator: true
}

const CamelDescription: AnimalDescription = {
    kindOfAnimal: 'Camel',
    biomes: ['desert'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['fruits', 'vegetables'],
    isPredator: false
}

const DeerDescription: AnimalDescription = {
    kindOfAnimal: 'Deer',
    biomes: ['taiga'],
    isPondRequired: false,
    requiredArea: 5,
    food: ['vegetables'],
    isPredator: false
}

const Parrots: Animal[] = [
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
]

const Snakes: Animal[] = [
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
]

const Bears: Animal[] = [
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
]

const Tigers: Animal[] = [
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
]

const Penguins: Animal[] = [
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
]

const Camels: Animal[] = [
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
]

const Deers: Animal[] = [
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
]

const aviaries: Aviary[] = [{
    animals: [],
    biome: "ice",
    area: 30,
    hasPond: true
},
{
    animals: [],
    biome: "desert",
    area: 30,
    hasPond: false
},
{
    animals: [],
    biome: "taiga",
    area: 30,
    hasPond: false
},
{
    animals: [],
    biome: "tropical",
    area: 30,
    hasPond: false
}]

const allAnimals: Animal[] = [
    ...Parrots,
    ...Snakes,
    ...Bears,
    ...Tigers,
    ...Penguins,
    ...Camels,
    ...Deers]


console.log('Кол-во еды для всего зоопарка: ' + getAmountOfFoodNeeded(allAnimals));

putAnimalsInAviaries(allAnimals);

const objectsToDisplay = aviaries.map(aviary => {
    let container: {biome: string, animals: string[]} = {
        biome: aviary.biome,
        animals: aviary.animals.map(an => an.description.kindOfAnimal)
    };
    return container;})

console.log(JSON.stringify(objectsToDisplay));

console.log('Незаселённые животные: ' + JSON.stringify(allAnimals));


function getAmountOfFoodNeeded(animals: Animal[]): number {
    let result = 0;
    for (const animal of animals)
        result = result + animal.foodRequired;

    return result;
}

function putAnimalsInAviaries(animals: Animal[]) {
    for (const aviary of aviaries) {
        for (const animal of animals) {
            if (tryPutInAviary(aviary, animal)) {
                removeItem(animals, animal)//для понимания, кто остался незаселённым(не работает из-за замыкания, походу)
                break;
            }
        }
    }
}

function tryPutInAviary(aviary: Aviary, animal: Animal): boolean {
    // if (animal.description.kindOfAnimal === 'Penguin' && aviary.biome === 'ice') {
    //     let q = 0;
    // }

    if (canBePuttedInAviary(aviary, animal)) {
        aviary.animals.push(animal);
        return true;
    }
    return false;
}

function removeFromAviary(aviary: Aviary, animal: Animal): void {
    removeItem(aviary.animals, animal) 
}

function removeItem(arr: object[], item: object) {
    arr = arr.filter(arrItem => arrItem != item) //сравнение по ссылке
}

function canBePuttedInAviary(aviary: Aviary, animal: Animal): boolean {

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

function isAppropriateBySize(aviary: Aviary, animal: Animal): boolean {
    return animal.description.requiredArea < (aviary.area - getAllAnimalsArea(aviary));
}

function isAppropriateByBiome(arr: Biome[], val: Biome): boolean {
    return arr.some((arrVal) => val === arrVal);
}

function isAppropriateByPond(aviary: Aviary, animal: Animal): boolean {
    if (aviary.hasPond === false && animal.description.isPondRequired)
        return false;
    return true;
}

function isAppropriateByDiet(aviary: Aviary, animal: Animal): boolean {

    if (animal.description.isPredator
        && DoesAviaryContainOtherKind(aviary, animal) === false)
        return true;

    if (animal.description.isPredator === false
        && DoesAviaryContainPredator(aviary) === false)
        return true;

    return false;
}

function getAllAnimalsArea(aviary: Aviary): number {
    let result: number = 0;
    for (const animal of aviary.animals) {
        result = result + animal.description.requiredArea;
    }
    return result;
}

function DoesAviaryContainPredator(aviary: Aviary): boolean {
    for (const animal of aviary.animals) {
        if (animal.description.isPredator)
            return true;
    }
    return false;
}

function DoesAviaryContainOtherKind(aviary: Aviary, animal: Animal): boolean {
    for (const avAnimal of aviary.animals) {
        if (avAnimal.description.kindOfAnimal !== animal.description.kindOfAnimal)
            return true;
    }
    return false;
}


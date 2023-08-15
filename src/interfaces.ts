interface AnimalDescription {
    kindOfAnimal: AnimalKind;
    biomes: Biome[];
    isPondRequired: boolean;
    requiredArea: number;
    food: Food[];
    isPredator: boolean;
}

interface Animal {
    description: AnimalDescription;
    foodRequired: number;
    age: number;
    name: string;
}

interface Aviary {
    biome: Biome;
    hasPond: boolean;
    area: number;
    animals: Animal[];
}
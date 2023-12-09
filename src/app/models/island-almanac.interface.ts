export interface IslandAlmanac {
    seeds: number[];
    seedToSoil: number[][];
    soilToFertilizer: number[][];
    fertilizerToWater: number[][];
    waterToLight: number[][];
    lightToTemperature: number[][];
    temperatureToHumidity: number[][];
    humidityToLocation: number[][];
}
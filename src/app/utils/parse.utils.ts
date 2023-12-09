import { IslandAlmanac } from '../models/island-almanac.interface';

export function parseStringToAlmanac(input: string): IslandAlmanac {
    const labels = [
      'seeds:',
      'seed-to-soil map:',
      'soil-to-fertilizer map:',
      'fertilizer-to-water map:',
      'water-to-light map:',
      'light-to-temperature map:',
      'temperature-to-humidity map:',
      'humidity-to-location map:'
    ];

    const sections = input.split('\n\n');
    const almanac: Partial<IslandAlmanac> = {};

    sections.forEach(section => {
      const lines = section.trim().split('\n');
      const header = lines.shift()?.trim();
      const dataIndex = labels.indexOf(header || '');
  
      if (dataIndex !== -1) {
        const data = lines.map(line =>
          line.trim().split(/\s+/).map(Number).filter(num => !isNaN(num))
        );

        switch (dataIndex) {
          case 0: // seeds
            almanac.seeds = data.flat();
            break;
          case 1: // seed-to-soil map
            almanac.seedToSoil = data;
            break;
          case 2: // soil-to-fertilizer map
            almanac.soilToFertilizer = data;
            break;
          case 3: // fertilizer-to-water map
            almanac.fertilizerToWater = data;
            break;
          case 4: // water-to-light map
            almanac.waterToLight = data;
            break;
          case 5: // light-to-temperature map
            almanac.lightToTemperature = data;
            break;
          case 6: // temperature-to-humidity map
            almanac.temperatureToHumidity = data;
            break;
          case 7: // humidity-to-location map
            almanac.humidityToLocation = data;
            break;
        }
      }
    });

    return almanac as IslandAlmanac;
}
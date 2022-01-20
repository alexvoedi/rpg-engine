import { Race, RaceID, RaceOptions, RaceValues } from "./Race";
import { races } from "./races";

export class RaceService {
  private races: Race[];

  constructor() {
    this.races = races.map((race) => new Race(race));
  }

  public createRace(values: RaceValues, options?: RaceOptions) {
    this.isNameInUse(values.name);

    const race = new Race(values, options);
    this.races.push(race);
    return race;
  }

  private isNameInUse(name: string) {
    const existingRace = this.getRaceByName(name);

    if (existingRace) {
      throw new Error("Race with name already exists");
    }
  }

  public getRaceById(id: RaceID) {
    const race = this.races.find((race) => race.id === id);

    if (!race) {
      throw new Error("Race not found");
    }

    return race;
  }

  public getRaceByName(name: string) {
    const race = this.races.find((race) => race.name === name);

    if (!race) {
      throw new Error("Race not found");
    }

    return race;
  }

  public updateRace(id: RaceID, values: RaceValues, options?: RaceOptions) {
    this.isNameInUse(values.name);

    const race = this.getRaceById(id);

    Object.assign(race, values);
    Object.assign(race, options);

    return race;
  }

  public removeRace(id: RaceID) {
    const raceIndex = this.races.findIndex((race) => race.id === id);

    if (raceIndex < 0) {
      throw new Error("Race does not exist");
    }

    return this.races.splice(raceIndex, 1);
  }
}

import { Race, RaceID, RaceOptions, RaceValues } from "./Race";
import { races } from "./races";

export class RaceService {
  private races: Map<RaceID, Race>;

  constructor() {
    this.races = new Map(races.map((r) => [r.id, new Race(r.id, { ...r })]));
  }

  public createRace(id: RaceID, values: RaceValues, options?: RaceOptions) {
    const race = new Race(id, values, options);
    this.races.set(id, race);
    return race;
  }

  public getRace(id: RaceID) {
    return this.races.get(id);
  }

  public updateRace(id: RaceID, values: RaceValues, options?: RaceOptions) {
    const race = this.races.get(id);

    Object.assign(race, values);
    Object.assign(race, options);
  }

  public removeRace(id: RaceID) {
    this.races.delete(id);
  }
}

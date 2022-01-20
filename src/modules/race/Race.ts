export interface RaceValues {
  name: string;
}

export interface RaceOptions {}

export type RaceID = number;

export class Race {
  id: RaceID;

  name = "";

  constructor(id: RaceID, values: RaceValues, options?: RaceOptions) {
    this.id = id;

    this.name = values.name;
  }
}

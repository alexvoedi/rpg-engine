export interface RaceValues {
  name: string;
}

export interface RaceOptions {}

export type RaceID = number;

export class Race {
  static _id: RaceID = 0;

  readonly id: RaceID;

  name: string;

  constructor(values: RaceValues, options?: RaceOptions) {
    this.id = Race._id++;

    this.name = values.name;
  }
}

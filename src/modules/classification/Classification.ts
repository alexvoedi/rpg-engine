type Stat = "health" | "strength";

export interface ClassificationValues {
  name: string;
  stats: Record<Stat, number>;
}

export interface ClassificationOptions {}

export type ClassificationID = number;

export class Classification {
  static _id: ClassificationID = 0;

  readonly id: ClassificationID;

  name: string;
  stats: Record<Stat, number>;

  constructor(values: ClassificationValues, options?: ClassificationOptions) {
    this.id = Classification._id++;

    this.name = values.name;
    this.stats = values.stats;
  }
}

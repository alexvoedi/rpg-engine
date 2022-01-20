export interface ClassificationValues {
  name: string;
}

export interface ClassificationOptions {}

export type ClassificationID = number;

export class Classification {
  static _id: ClassificationID = 0;

  readonly id: ClassificationID;

  name: string;

  constructor(values: ClassificationValues, options?: ClassificationOptions) {
    this.id = Classification._id++;

    this.name = values.name;
  }
}

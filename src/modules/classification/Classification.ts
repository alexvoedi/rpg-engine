export interface ClassificationValues {
  name: string;
}

export interface ClassificationOptions {}

export type ClassificationID = number;

export class Classification {
  id: ClassificationID;

  name: string;

  constructor(
    id: ClassificationID,
    values: ClassificationValues,
    options?: ClassificationOptions
  ) {
    this.id = id;

    this.name = values.name;
  }
}

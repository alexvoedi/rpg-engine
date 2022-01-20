import {
  Classification,
  ClassificationID,
  ClassificationValues,
  ClassificationOptions,
} from "./Classification";
import { classifications } from "./classifications";

export class ClassificationService {
  private classifications: Map<ClassificationID, Classification>;

  constructor() {
    this.classifications = new Map(
      classifications.map((classification) => [
        classification.id,
        new Classification(classification.id, { ...classification }),
      ])
    );
  }

  public createClassification(
    id: ClassificationID,
    values: ClassificationValues,
    options?: ClassificationOptions
  ) {
    const classification = new Classification(id, values, options);
    this.classifications.set(id, classification);
    return classification;
  }

  public getClassification(id: ClassificationID) {
    return this.classifications.get(id);
  }

  public updateClassification(
    id: ClassificationID,
    values: ClassificationValues,
    options?: ClassificationOptions
  ) {
    const classification = this.classifications.get(id);

    Object.assign(classification, values);
    Object.assign(classification, options);
  }

  public removeClassification(id: ClassificationID) {
    this.classifications.delete(id);
  }
}

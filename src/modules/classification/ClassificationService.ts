import {
  Classification,
  ClassificationID,
  ClassificationValues,
  ClassificationOptions,
} from "./Classification";
import { classifications } from "./classifications";

export class ClassificationService {
  private classifications: Classification[];

  constructor() {
    this.classifications = classifications.map(
      (classification) => new Classification(classification)
    );
  }

  public createClassification(
    values: ClassificationValues,
    options?: ClassificationOptions
  ) {
    this.isNameInUse(values.name);

    const classification = new Classification(values, options);
    this.classifications.push(classification);
    return classification;
  }

  private isNameInUse(name: string) {
    const existingClassification = this.getClassificationByName(name);

    if (existingClassification) {
      throw new Error("Race with name already exists");
    }
  }

  public getClassificationById(id: ClassificationID) {
    const classification = this.classifications.find(
      (classification) => classification.id === id
    );

    if (!classification) {
      throw new Error("Classification not found");
    }

    return classification;
  }

  public getClassificationByName(name: string) {
    const classification = this.classifications.find(
      (classification) => classification.name === name
    );

    if (!classification) {
      throw new Error("Classification not found");
    }

    return classification;
  }

  public updateClassification(
    id: ClassificationID,
    values: ClassificationValues,
    options?: ClassificationOptions
  ) {
    this.isNameInUse(values.name);

    const classification = this.getClassificationById(id);

    Object.assign(classification, values);
    Object.assign(classification, options);

    return classification;
  }

  public removeClassification(id: ClassificationID) {
    const classificationIndex = this.classifications.findIndex(
      (classification) => classification.id === id
    );

    if (classificationIndex < 0) {
      throw new Error("Classification does not exist");
    }

    return this.classifications.splice(classificationIndex, 1);
  }
}

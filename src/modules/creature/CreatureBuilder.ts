import { RPG } from "../..";
import { Creature, CreatureOptions, CreatureValues } from "./Creature";

export type CreatureBuilderValues = Omit<
  CreatureValues,
  "race" | "classification"
> & {
  raceName: string;
  classificationName: string;
};

export type CreatureBuilderOptions = CreatureOptions;

export class CreatureBuilder {
  constructor(private readonly rpg: RPG) {}

  build(values: CreatureBuilderValues, options?: CreatureBuilderOptions) {
    const race = this.rpg.raceService.getRaceByName(values.raceName);

    const classification =
      this.rpg.classificationService.getClassificationByName(
        values.classificationName
      );

    return new Creature(
      {
        ...values,
        race,
        classification,
      },
      options
    );
  }
}

import { RPG } from "../..";
import { Creature, CreatureOptions, CreatureValues } from "./Creature";

export type CreatureBuilderValues = Omit<
  CreatureValues,
  "race" | "classification"
> & {
  raceName: string;
  classificationName: string;
};

export type CreatureBuilderOptions = Omit<CreatureOptions, "abilities"> & {
  abilityNames: string[];
};

export class CreatureBuilder {
  constructor(private readonly rpg: RPG) {}

  build(values: CreatureBuilderValues, options?: CreatureBuilderOptions) {
    const race = this.rpg.raceService.getRaceByName(values.raceName);

    const classification =
      this.rpg.classificationService.getClassificationByName(
        values.classificationName
      );

    const abilities = options?.abilityNames.map((abilityName) =>
      this.rpg.abilityService.getAbilityByName(abilityName)
    );

    return new Creature(
      {
        ...values,
        race,
        classification,
      },
      {
        ...options,
        abilities,
      }
    );
  }
}

import { Ability, AbilityID } from "../ability/Ability";
import { Classification } from "../classification/Classification";
import { Race } from "../race/Race";

export interface CreatureValues {
  name: string;
  level: number;
  hitPoints: number;
  race: Race;
  classification: Classification;
}

export interface CreatureOptions {
  abilities?: Ability[];
}

export type CreatureID = number;

export class Creature {
  static _id: CreatureID = 0;

  readonly id: CreatureID;

  name: string;
  level: number;
  hitPoints: number;
  race: Race;
  classification: Classification;

  abilities: Ability[];

  constructor(values: CreatureValues, options?: CreatureOptions) {
    this.id = Creature._id++;

    this.name = values.name;
    this.level = values.level;
    this.hitPoints = values.hitPoints;
    this.race = values.race;
    this.classification = values.classification;

    this.abilities = options?.abilities ?? [];
  }

  attack(abilityName: string, target: Creature) {
    const ability = this.getAbilityByName(abilityName);

    if (!ability) {
      throw new Error("Creature does not have this ability");
    }

    target.damage(ability.damage);
  }

  damage(value: number) {
    this.hitPoints -= value;
    console.log(this);
  }

  getAbilityByName(abilityName: string) {
    return this.abilities.find((ability) => ability.name === abilityName);
  }
}

import { Ability } from "../ability/Ability";
import { Classification } from "../classification/Classification";
import { Combat } from "../combat/Combat";
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

  abilities: Ability[];
  combat?: Combat;
  target?: Creature;

  name: string;
  level: number;
  hitPoints: number;
  race: Race;
  classification: Classification;

  constructor(values: CreatureValues, options?: CreatureOptions) {
    this.id = Creature._id++;

    this.name = values.name;
    this.level = values.level;
    this.hitPoints = values.hitPoints;
    this.race = values.race;
    this.classification = values.classification;

    this.abilities = options?.abilities ?? [];
  }

  attack(abilityName: string, destination?: any) {
    if (!this.combat) {
      this.combat = new Combat(this);
    }

    const ability = this.getAbilityByName(abilityName);

    this.combat.attack(this, ability);
  }

  damage(value: number) {
    this.hitPoints -= value;
  }

  getAbilityByName(abilityName: string) {
    const ability = this.abilities.find(
      (ability) => ability.name === abilityName
    );

    if (!ability) {
      throw new Error("Creature does not have this ability");
    }

    return ability;
  }
}

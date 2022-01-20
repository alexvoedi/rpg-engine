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
  abilities: Map<AbilityID, Ability>;
}

export type CreatureID = number;

export class Creature {
  id: CreatureID;

  name: string;
  level: number;
  hitPoints: number;
  race: Race;
  classification: Classification;
  abilities: Map<AbilityID, Ability>;

  constructor(
    id: CreatureID,
    values: CreatureValues,
    options?: CreatureOptions
  ) {
    this.id = id;

    this.name = values.name;
    this.level = values.level;
    this.hitPoints = values.hitPoints;
    this.race = values.race;
    this.classification = values.classification;

    this.abilities = options?.abilities ?? new Map();
  }

  addAbility(ability: Ability) {
    this.abilities.set(ability.id, ability);
  }
}

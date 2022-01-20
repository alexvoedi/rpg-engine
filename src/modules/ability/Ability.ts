import { AbilityType } from "../../DamageType";
import { Effect } from "../effect/Effect";

export interface AbilityValues {
  name: string;
  range: number;
  type: AbilityType;
}

export interface AbilityOptions {
  effects?: Effect[];
}

export type AbilityID = number;

export class Ability {
  id: AbilityID;

  name = "";
  range = 0;
  type = AbilityType.Physical;
  effects: Effect[];

  constructor(id: AbilityID, values: AbilityValues, options?: AbilityOptions) {
    this.id = id;

    this.name = values.name;
    this.range = values.range;
    this.type = values.type;

    this.effects = options?.effects || [];
  }
}

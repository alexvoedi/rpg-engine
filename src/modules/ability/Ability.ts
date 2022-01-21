import { AbilityType } from "../../DamageType";
import { Effect } from "../effect/Effect";

export interface AbilityValues {
  name: string;
  range: number;
  type: AbilityType;
}

export interface AbilityOptions {
  effects?: Effect[];
  damage?: number;
}

export type AbilityID = number;

export class Ability {
  static _id: AbilityID = 0;

  readonly id: AbilityID;

  name: string;
  range: number;
  type: AbilityType;

  damage: number;
  effects: Effect[];

  constructor(values: AbilityValues, options?: AbilityOptions) {
    this.id = Ability._id++;

    this.name = values.name;
    this.range = values.range;
    this.type = values.type;

    this.damage = options?.damage || 0;
    this.effects = options?.effects || [];
  }
}

import { AbilityTargets } from "../../enums/AbilityTargets";
import { AbilityType } from "../../enums/AbilityType";
import { Effect } from "../effect/Effect";

export interface AbilityValues {
  name: string;
  range: number;
  type: AbilityType;
  targets: AbilityTargets;
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
  targets: AbilityTargets;

  damage: number;
  effects: Effect[];

  constructor(values: AbilityValues, options?: AbilityOptions) {
    this.id = Ability._id++;

    this.name = values.name;
    this.range = values.range;
    this.type = values.type;
    this.targets = values.targets;

    this.damage = options?.damage || 0;
    this.effects = options?.effects || [];
  }
}

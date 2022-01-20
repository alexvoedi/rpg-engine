export interface EffectValues {
  name: string;
}

export interface EffectOptions {}

export type EffectID = number;

export class Effect {
  static _id: EffectID = 0;

  readonly id: EffectID;

  name: string;

  constructor(values: EffectValues, options?: EffectOptions) {
    this.id = Effect._id++;

    this.name = values.name;
  }
}

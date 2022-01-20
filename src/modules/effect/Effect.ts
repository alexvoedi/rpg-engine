export interface EffectValues {
  name: string;
}

export interface EffectOptions {}

export type EffectID = number;

export class Effect {
  id: EffectID;

  name: string;

  constructor(id: EffectID, values: EffectValues, options?: EffectOptions) {
    this.id = id;

    this.name = values.name;
  }
}

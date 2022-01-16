export interface ICreature {
  level: number;
  hitPoints: number;
}

export type CreatureID = number;

export class Creature {
  id: CreatureID;

  level = 1;
  hitPoints = 10;

  constructor(id: CreatureID, options: ICreature) {
    this.id = id;

    Object.assign(this, options);
  }
}

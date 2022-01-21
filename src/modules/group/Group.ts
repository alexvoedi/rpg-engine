import { Creature } from "../creature/Creature";

export class Group {
  creatures: Creature[];

  constructor(creatures: Creature[]) {
    this.creatures = creatures;
  }
}

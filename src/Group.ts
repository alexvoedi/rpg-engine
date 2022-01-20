import { Creature } from "./modules/creature/Creature";

export class Group {
  creatures: Creature[];

  constructor(creatures: Creature[]) {
    this.creatures = creatures;
  }
}

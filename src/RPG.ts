import { Creature } from "./Creature";

export class RPG {
  creatures: Set<Creature>;

  constructor() {
    this.creatures = new Set();
  }
}

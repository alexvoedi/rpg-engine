import { RPG } from "../..";
import { Creature } from "../creature/Creature";
import { Combat } from "./Combat";

export class CombatService {
  private combats: Combat[];

  constructor(private readonly rpg: RPG) {
    this.combats = [];
  }

  public createCombat(creatures: Creature[][]) {
    const combat = new Combat(creatures);
    this.combats.push(combat);
    return combat;
  }
}

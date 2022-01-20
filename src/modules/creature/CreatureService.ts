import {
  Creature,
  CreatureID,
  CreatureOptions,
  CreatureValues,
} from "./Creature";

export class CreatureService {
  private creatures: Map<CreatureID, Creature>;

  constructor() {
    this.creatures = new Map();
  }

  public createCreature(
    id: CreatureID,
    values: CreatureValues,
    options?: CreatureOptions
  ) {
    const creature = new Creature(id, values, options);
    this.creatures.set(id, creature);
    return creature;
  }

  public getCreature(id: CreatureID) {
    this.creatures.get(id);
  }

  public updateCreature(
    id: CreatureID,
    values: CreatureValues,
    options?: CreatureOptions
  ) {
    const creature = this.creatures.get(id);

    Object.assign(creature, values);
    Object.assign(creature, options);
  }

  public removeCreature(id: CreatureID) {
    this.creatures.delete(id);
  }
}

import { Creature, CreatureID } from "../creature/Creature";

export class Combat {
  readonly creatures: Creature[][];

  constructor(creatures: Creature[][]) {
    this.creatures = creatures;
  }

  attack(sourceID: CreatureID, abilityName: string, targetID: CreatureID) {
    const source = this.findCreatureById(sourceID);
    const target = this.findCreatureById(targetID);

    if (source.groupIndex === target.groupIndex) {
      throw new Error("Can not attack creatures from same group");
    }

    source.creature.attack(abilityName, target.creature);
  }

  private findCreatureById(id: CreatureID) {
    for (let i = 0; i < this.creatures.length; i++) {
      for (let j = 0; j < this.creatures[i].length; j++) {
        const creature = this.creatures[i][j];

        if (creature.id === id) {
          return { creature, groupIndex: i };
        }
      }
    }

    throw new Error("Creature does not exist");
  }
}

import { RPG } from "../..";
import {
  Creature,
  CreatureID,
  CreatureOptions,
  CreatureValues,
} from "./Creature";
import {
  CreatureBuilder,
  CreatureBuilderOptions,
  CreatureBuilderValues,
} from "./CreatureBuilder";

export class CreatureService {
  private creatures: Creature[];
  private creatureBuilder: CreatureBuilder;

  constructor(private readonly rpg: RPG) {
    this.creatures = [];
    this.creatureBuilder = new CreatureBuilder(rpg);
  }

  public createCreature(
    values: CreatureBuilderValues,
    options?: CreatureBuilderOptions
  ) {
    const creature = this.creatureBuilder.build(values, options);
    this.creatures.push(creature);
    return creature;
  }

  public getCreatureById(id: CreatureID) {
    const creature = this.creatures.find((creature) => creature.id === id);

    if (!creature) {
      throw new Error("Creature not found");
    }

    return creature;
  }

  public updateCreature(
    id: CreatureID,
    values: CreatureValues,
    options?: CreatureOptions
  ) {
    const creature = this.creatures.find((creature) => creature.id === id);

    if (!creature) {
      throw new Error("Creature not found");
    }

    Object.assign(creature, values);
    Object.assign(creature, options);

    return creature;
  }

  public removeCreature(id: CreatureID) {
    const creatureIndex = this.creatures.findIndex(
      (creature) => creature.id === id
    );

    if (creatureIndex < 0) {
      throw new Error("Creature does not exist");
    }

    return this.creatures.splice(creatureIndex, 1);
  }
}

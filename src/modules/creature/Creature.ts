import { Vec2 } from "../..";
import { attributeFunction, healthFunction } from "../../functions/stats";
import { Ability } from "../ability/Ability";
import { Classification } from "../classification/Classification";
import { Combat } from "../combat/Combat";
import { Race } from "../race/Race";

export interface CreatureValues {
  name: string;
  level: number;
  race: Race;
  classification: Classification;
  position: Vec2;
}

export interface CreatureOptions {
  abilities?: Ability[];
}

export type CreatureID = number;

export class Creature {
  static _id: CreatureID = 0;

  readonly id: CreatureID;

  abilities: Ability[];
  combat?: Combat;
  target?: Creature;

  name: string;
  level: number;
  race: Race;
  classification: Classification;
  position: Vec2;

  currentHealth: number;

  constructor(values: CreatureValues, options?: CreatureOptions) {
    this.id = Creature._id++;

    this.name = values.name;
    this.level = values.level;
    this.race = values.race;
    this.classification = values.classification;
    this.position = values.position;

    this.abilities = options?.abilities ?? [];

    this.currentHealth = this.maxHealth;
  }

  attack(abilityName: string, destination?: any) {
    if (!this.combat) {
      this.combat = new Combat(this);
    }

    const ability = this.getAbilityByName(abilityName);

    this.combat.attack(this, ability);
  }

  get maxHealth() {
    return healthFunction({
      level: this.level,
      base: this.classification.stats.health,
    });
  }

  get strength() {
    return attributeFunction({
      level: this.level,
      base: this.classification.stats.strength,
    });
  }

  damage(value: number) {
    this.currentHealth = Math.max(0, this.currentHealth - value);
  }

  isAlive() {
    return this.currentHealth > 0;
  }

  getAbilityByName(abilityName: string) {
    const ability = this.abilities.find(
      (ability) => ability.name === abilityName
    );

    if (!ability) {
      throw new Error("Creature does not have this ability");
    }

    return ability;
  }

  update(delta: number) {}
}

import { AbilityTargets } from "../../enums/AbilityTargets";
import { Ability } from "../ability/Ability";
import { Creature } from "../creature/Creature";

export class Combat {
  readonly attacker: Creature;
  readonly targets: Creature[];

  constructor(attacker: Creature) {
    this.attacker = attacker;
    this.targets = [];
  }

  attack(attacker: Creature, ability: Ability) {
    let damagedCreatures: Creature[] = [];

    if (ability.targets === AbilityTargets.One) {
      damagedCreatures = this.attackOne(attacker, ability);
    } else if (ability.targets === AbilityTargets.Multiple) {
      //
    } else {
      //
    }

    this.reactToAttack(damagedCreatures, attacker);
  }

  attackOne(attacker: Creature, ability: Ability) {
    const { target } = attacker;

    if (!target) {
      throw new Error("No target");
    }

    const damage = ability.damage;

    target.damage(damage);

    return [target];
  }

  reactToAttack(damagedCreatures: Creature[], attacker: Creature) {
    damagedCreatures.forEach((creature) => {
      creature.combat = this;
      creature.target = attacker;
    });
  }
}

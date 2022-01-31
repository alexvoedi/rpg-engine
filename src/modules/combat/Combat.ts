import { Vec2 } from "../..";
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

    if (!this.isTargetInRange(attacker, target, ability)) {
      throw new Error("Target out of distance");
    }

    const damage = ability.damage;

    target.damage(damage);

    return [target];
  }

  private isTargetInRange(
    attacker: Creature,
    target: Creature,
    ability: Ability
  ) {
    return Vec2.dist(attacker.position, target.position) <= ability.range;
  }

  reactToAttack(damagedCreatures: Creature[], attacker: Creature) {
    damagedCreatures.forEach((creature) => {
      creature.combat = this;
      creature.target = attacker;
    });
  }
}

import { abilities } from "./abilities";
import { Ability } from "./Ability";

export class AbilityService {
  private abilities: Ability[];

  constructor() {
    this.abilities = abilities.map(
      ({ values, options }) => new Ability(values, options)
    );
  }

  public getAbilityByName(name: string) {
    const ability = this.abilities.find((ability) => ability.name === name);

    if (!ability) {
      throw new Error("Ability not found");
    }

    return ability;
  }
}

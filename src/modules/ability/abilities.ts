import { AbilityTargets } from "../../enums/AbilityTargets";
import { AbilityType } from "../../enums/AbilityType";

export const abilities = [
  {
    values: {
      name: "sword_strike",
      range: 0,
      type: AbilityType.Physical,
      targets: AbilityTargets.One,
    },
    options: {
      damage: 3,
    },
  },
  {
    values: {
      name: "firebolt",
      range: 30,
      type: AbilityType.Fire,
      targets: AbilityTargets.One,
    },
    options: {
      damage: 4,
    },
  },
];

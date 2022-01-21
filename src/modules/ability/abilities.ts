import { AbilityType } from "../../DamageType";

export const abilities = [
  {
    values: {
      name: "sword_strike",
      range: 0,
      type: AbilityType.Physical,
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
    },
    options: {
      damage: 4,
    },
  },
];

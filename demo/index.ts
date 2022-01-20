import { RPG } from "../src";

const rpg = new RPG();

const creature = rpg.creatureService.createCreature({
  name: "Avachan",
  classificationName: "warrior",
  hitPoints: 10,
  level: 1,
  raceName: "human",
});

console.log(creature);

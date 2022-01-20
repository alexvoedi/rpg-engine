import { ClassificationService } from "./modules/classification/ClassificationService";
import { CreatureService } from "./modules/creature/CreatureService";
import { RaceService } from "./modules/race/RaceService";

export class RPG {
  readonly raceService: RaceService;
  readonly creatureService: CreatureService;
  readonly classificationService: ClassificationService;

  constructor() {
    this.raceService = new RaceService();
    this.creatureService = new CreatureService();
    this.classificationService = new ClassificationService();
  }
}

import { ClassificationService } from "./modules/classification/ClassificationService";
import { CreatureService } from "./modules/creature/CreatureService";
import { RaceService } from "./modules/race/RaceService";

export class RPG {
  readonly raceService: RaceService;
  readonly classificationService: ClassificationService;
  readonly creatureService: CreatureService;

  constructor() {
    this.raceService = new RaceService();
    this.classificationService = new ClassificationService();
    this.creatureService = new CreatureService(this);
  }
}

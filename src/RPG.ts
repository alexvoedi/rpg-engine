import { AbilityService } from "./modules/ability/AbilityService";
import { ClassificationService } from "./modules/classification/ClassificationService";
import { CombatService } from "./modules/combat/CombatService";
import { CreatureService } from "./modules/creature/CreatureService";
import { RaceService } from "./modules/race/RaceService";

export class RPG {
  readonly raceService: RaceService;
  readonly classificationService: ClassificationService;
  readonly abilityService: AbilityService;
  readonly creatureService: CreatureService;
  readonly combatService: CombatService;

  constructor() {
    this.raceService = new RaceService();
    this.classificationService = new ClassificationService();
    this.abilityService = new AbilityService();

    this.creatureService = new CreatureService(this);
    this.combatService = new CombatService(this);
  }
}

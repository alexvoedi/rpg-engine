import { AbilityService } from "./modules/ability/AbilityService";
import { ClassificationService } from "./modules/classification/ClassificationService";
import { CreatureService } from "./modules/creature/CreatureService";
import { RaceService } from "./modules/race/RaceService";

export class RPG {
  readonly raceService: RaceService;
  readonly classificationService: ClassificationService;
  readonly abilityService: AbilityService;
  readonly creatureService: CreatureService;

  private loopID?: ReturnType<typeof setTimeout>;
  private running?: boolean;

  constructor() {
    this.raceService = new RaceService();
    this.classificationService = new ClassificationService();
    this.abilityService = new AbilityService();

    this.creatureService = new CreatureService(this);

    this.start();
  }

  start() {
    this.running = true;

    const FRAMES_PER_SECOND = 20;

    let lastUpdate = Date.now();

    this.loopID = setInterval(() => {
      if (!this.running) return;

      const now = Date.now();

      const delta = (now - lastUpdate) / 1000;

      this.loop(delta);

      lastUpdate = now;
    }, 1000 / FRAMES_PER_SECOND);
  }

  pause() {
    this.running = false;
  }

  stop() {
    if (this.loopID) {
      this.running = false;
      clearInterval(this.loopID);
    }
  }

  private loop(delta: number) {
    this.creatureService.update(delta)

  }
}

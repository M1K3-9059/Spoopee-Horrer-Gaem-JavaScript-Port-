/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FlashlightVentSoundManager extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "costume1",
        "./FlashlightVentSoundManager/costumes/costume1.svg",
        { x: 0, y: 0 }
      ),
    ];

    this.sounds = [
      new Sound("pop", "./FlashlightVentSoundManager/sounds/pop.wav"),
      new Sound("HiHat", "./FlashlightVentSoundManager/sounds/HiHat.wav"),
      new Sound(
        "580780__strikewhistler__flashlight-clicking-sound",
        "./FlashlightVentSoundManager/sounds/580780__strikewhistler__flashlight-clicking-sound.wav"
      ),
      new Sound(
        "383657__deleted_user_7146007__fluorescent-light-hum",
        "./FlashlightVentSoundManager/sounds/383657__deleted_user_7146007__fluorescent-light-hum.wav"
      ),
      new Sound(
        "383657__deleted_user_7146007__fluorescent-light-hum2",
        "./FlashlightVentSoundManager/sounds/383657__deleted_user_7146007__fluorescent-light-hum2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
    ];

    this.audioEffects.volume = 10;
  }

  *whenKeySpacePressed() {
    if (
      this.toString(this.stage.vars.officeresetting) === "false" &&
      !(this.toNumber(this.stage.vars.lightpower) === 0)
    ) {
      if (this.toString(this.stage.vars.behind) === "true") {
        yield* this.playSoundUntilDone(
          "580780__strikewhistler__flashlight-clicking-sound"
        );
        while (!!this.keyPressed("space")) {
          yield;
        }
        yield* this.playSoundUntilDone(
          "580780__strikewhistler__flashlight-clicking-sound"
        );
      } else {
        yield* this.playSoundUntilDone(
          "383657__deleted_user_7146007__fluorescent-light-hum2"
        );
        while (!!this.keyPressed("space")) {
          yield;
        }
        yield* this.playSoundUntilDone(
          "383657__deleted_user_7146007__fluorescent-light-hum2"
        );
      }
    }
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

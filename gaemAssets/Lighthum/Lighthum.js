/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lighthum extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Lighthum/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Lighthum/sounds/pop.wav"),
      new Sound("HiHat", "./Lighthum/sounds/HiHat.wav"),
      new Sound(
        "580780__strikewhistler__flashlight-clicking-sound",
        "./Lighthum/sounds/580780__strikewhistler__flashlight-clicking-sound.wav"
      ),
      new Sound(
        "383657__deleted_user_7146007__fluorescent-light-hum",
        "./Lighthum/sounds/383657__deleted_user_7146007__fluorescent-light-hum.wav"
      ),
      new Sound(
        "383657__deleted_user_7146007__fluorescent-light-hum2",
        "./Lighthum/sounds/383657__deleted_user_7146007__fluorescent-light-hum2.wav"
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

    this.audioEffects.volume = 0;
  }

  *whenKeySpacePressed() {
    if (
      this.toString(this.stage.vars.officeresetting) === "false" &&
      !(this.toNumber(this.stage.vars.lightpower) === 0)
    ) {
      if (this.toString(this.stage.vars.behind) === "true") {
        while (!!this.keyPressed("space")) {
          yield;
        }
      } else {
        yield* this.wait(0.08);
        this.audioEffects.volume = 50;
        yield* this.startSound(
          "383657__deleted_user_7146007__fluorescent-light-hum"
        );
        while (!!this.keyPressed("space")) {
          yield;
        }
        this.audioEffects.clear();
        this.audioEffects.volume = 0;
      }
    }
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

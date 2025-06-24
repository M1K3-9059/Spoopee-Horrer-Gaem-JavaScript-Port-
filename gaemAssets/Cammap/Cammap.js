/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cammap extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cammap/costumes/costume1.svg", {
        x: 231.18469,
        y: 277.87073803303304,
      }),
      new Costume("costume2", "./Cammap/costumes/costume2.svg", {
        x: 238.64854,
        y: 160.7852,
      }),
    ];

    this.sounds = [new Sound("pop", "./Cammap/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CamCrash" },
        this.whenIReceiveCamcrash
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CamCrash" },
        this.whenIReceiveCamcrash2
      ),
    ];
  }

  *whenIReceiveCamon() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCamoff() {
    this.visible = false;
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCamcrash() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCamcrash2() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

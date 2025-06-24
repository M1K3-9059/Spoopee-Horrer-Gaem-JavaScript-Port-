/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cam2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cam2", "./Cam2/costumes/cam2.svg", {
        x: 231.18469,
        y: -72.85933499999999,
      }),
      new Costume("cam2blocked", "./Cam2/costumes/cam2blocked.svg", {
        x: 231.18469,
        y: -72.85934500000002,
      }),
    ];

    this.sounds = [new Sound("pop", "./Cam2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camon" },
        this.whenIReceiveCamon2
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.camval = 2;
    this.broadcast("camon");
  }

  *whenIReceiveCamoff() {
    this.visible = false;
  }

  *whenIReceiveCamon() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.costume = "cam2";
  }

  *whenIReceiveCamon2() {
    this.visible = true;
    if (
      this.compare(
        this.letterOf(this.costume.name, 3),
        this.stage.vars.roomblocked
      ) === 0
    ) {
      this.costume = "cam2blocked";
    } else {
      this.costume = "cam2";
    }
  }
}

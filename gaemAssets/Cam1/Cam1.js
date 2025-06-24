/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cam1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cam1", "./Cam1/costumes/cam1.svg", {
        x: 211.71426,
        y: 175.644775,
      }),
      new Costume("cam1blocked", "./Cam1/costumes/cam1blocked.svg", {
        x: 211.71426,
        y: 175.644775,
      }),
    ];

    this.sounds = [new Sound("pop", "./Cam1/sounds/pop.wav")];

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
        { name: "CamCrash" },
        this.whenIReceiveCamcrash
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camon" },
        this.whenIReceiveCamon2
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.camval = 1;
    this.broadcast("camon");
  }

  *whenIReceiveCamoff() {
    this.visible = false;
  }

  *whenIReceiveCamon() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.costume = "cam1";
    this.visible = false;
  }

  *whenIReceiveCamcrash() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCamon2() {
    this.visible = true;
    if (
      this.compare(
        this.letterOf(this.costume.name, 3),
        this.stage.vars.roomblocked
      ) === 0
    ) {
      this.costume = "cam1blocked";
    } else {
      this.costume = "cam1";
    }
  }
}

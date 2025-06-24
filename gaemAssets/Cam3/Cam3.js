/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cam3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cam3", "./Cam3/costumes/cam3.svg", {
        x: -32.17847999999998,
        y: 184.55810499999998,
      }),
      new Costume("cam3blocked", "./Cam3/costumes/cam3blocked.svg", {
        x: -32.17847999999998,
        y: 184.55810499999998,
      }),
    ];

    this.sounds = [new Sound("pop", "./Cam3/sounds/pop.wav")];

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
    ];
  }

  *whenthisspriteclicked() {
    this.stage.vars.camval = 3;
    this.broadcast("camon");
  }

  *whenIReceiveCamoff() {
    this.visible = false;
  }

  *whenIReceiveCamon() {
    this.visible = true;
    if (
      this.compare(
        this.letterOf(this.costume.name, 3),
        this.stage.vars.roomblocked
      ) === 0
    ) {
      this.costume = "cam3blocked";
    } else {
      this.costume = "cam3";
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.costume = "cam3";
  }

  *whenIReceiveCamcrash() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

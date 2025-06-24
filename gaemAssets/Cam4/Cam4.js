/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cam4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cam4", "./Cam4/costumes/cam4.svg", {
        x: -94.68880999999999,
        y: 85.348635,
      }),
      new Costume("cam4blocked", "./Cam4/costumes/cam4blocked.svg", {
        x: -94.68880999999999,
        y: 85.34862499999998,
      }),
    ];

    this.sounds = [new Sound("pop", "./Cam4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CamCrash" },
        this.whenIReceiveCamcrash
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camon" },
        this.whenIReceiveCamon2
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

  *whenthisspriteclicked() {
    this.stage.vars.camval = 4;
    this.broadcast("camon");
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveCamcrash() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked3() {
    this.visible = false;
    this.costume = "cam4";
  }

  *whenIReceiveCamon2() {
    this.visible = true;
    if (
      this.compare(
        this.letterOf(this.costume.name, 3),
        this.stage.vars.roomblocked
      ) === 0
    ) {
      this.costume = "cam4blocked";
    } else {
      this.costume = "cam4";
    }
  }
}

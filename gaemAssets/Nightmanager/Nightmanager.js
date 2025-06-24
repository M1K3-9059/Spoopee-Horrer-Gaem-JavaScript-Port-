/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nightmanager extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Nightmanager/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [new Sound("pop", "./Nightmanager/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "startgame" },
        this.whenIReceiveStartgame
      ),
    ];
  }

  *whenIReceiveStartgame() {
    this.restartTimer();
    if (this.toNumber(this.stage.vars.Night) === 1) {
      while (!(this.timer === 240 || this.compare(this.timer, 240) > 0)) {
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.Night) === 2) {
      while (!(this.timer === 360)) {
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.Night) === 3) {
      while (!(this.timer === 480)) {
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.Night) === 4) {
      while (!(this.timer === 500)) {
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.Night) === 5) {
      while (!(this.timer === 500)) {
        yield;
      }
    }
    if (this.toNumber(this.stage.vars.Night) === 6) {
      while (!(this.timer === 500)) {
        yield;
      }
    }
    this.broadcast("NightFinished");
  }
}

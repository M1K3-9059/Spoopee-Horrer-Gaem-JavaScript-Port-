/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lightpower extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Lightpower/costumes/costume1.svg", {
        x: 84.60992431640625,
        y: 11.596875000000011,
      }),
      new Costume("costume2", "./Lightpower/costumes/costume2.svg", {
        x: 84.60992431640625,
        y: 11.596865000000008,
      }),
      new Costume("costume3", "./Lightpower/costumes/costume3.svg", {
        x: 84.60992431640625,
        y: 11.596855000000005,
      }),
      new Costume("costume4", "./Lightpower/costumes/costume4.svg", {
        x: 84.60992431640625,
        y: 11.596845000000002,
      }),
      new Costume("costume5", "./Lightpower/costumes/costume5.svg", {
        x: 81.85992431640625,
        y: 11.596834999999999,
      }),
    ];

    this.sounds = [new Sound("pop", "./Lightpower/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOnline" },
        this.whenIReceiveOfficeonline
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YouDied" },
        this.whenIReceiveYoudied
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOffline" },
        this.whenIReceiveOfficeoffline
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveOfficeonline() {
    this.stage.vars.lightpower = 100;
    this.visible = true;
    this.costume = "costume1";
    while (true) {
      for (let i = 0; i < 10; i++) {
        while (!(this.toString(this.stage.vars.lighton) === "true")) {
          yield;
        }
        this.stage.vars.lightpower--;
        if (this.toNumber(this.stage.vars.lightpower) === 75) {
          this.costume = "costume2";
        }
        if (this.toNumber(this.stage.vars.lightpower) === 50) {
          this.costume = "costume3";
        }
        if (this.toNumber(this.stage.vars.lightpower) === 25) {
          this.costume = "costume4";
        }
        if (this.toNumber(this.stage.vars.lightpower) === 5) {
          this.costume = "costume5";
        }
        yield* this.wait(0.05);
        yield;
      }
      yield;
    }
  }

  *whenIReceiveYoudied() {
    this.visible = false;
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveOfficeoffline() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

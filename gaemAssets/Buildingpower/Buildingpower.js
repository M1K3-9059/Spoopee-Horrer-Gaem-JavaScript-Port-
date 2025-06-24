/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Buildingpower extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Buildingpower/costumes/costume1.svg", {
        x: 84.60992431640625,
        y: 11.596865000000008,
      }),
      new Costume("costume2", "./Buildingpower/costumes/costume2.svg", {
        x: 84.60992431640625,
        y: 11.596855000000005,
      }),
      new Costume("costume3", "./Buildingpower/costumes/costume3.svg", {
        x: 84.60992431640625,
        y: 11.596834999999999,
      }),
      new Costume("costume4", "./Buildingpower/costumes/costume4.svg", {
        x: 84.60992431640625,
        y: 11.596825000000024,
      }),
      new Costume("costume5", "./Buildingpower/costumes/costume5.svg", {
        x: 81.85992431640625,
        y: 11.596825000000024,
      }),
    ];

    this.sounds = [new Sound("pop", "./Buildingpower/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOffline" },
        this.whenIReceiveOfficeoffline
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YouDied" },
        this.whenIReceiveYoudied
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOnline" },
        this.whenIReceiveOfficeonline
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
    ];
  }

  *whenIReceiveOfficeoffline() {
    while (true) {
      for (let i = 0; i < 10; i++) {
        this.costume = "costume4";
        yield* this.wait(1);
        this.costume = "costume3";
        yield* this.wait(1);
        this.costume = "costume2";
        yield* this.wait(1);
        this.costume = "costume1";
        yield* this.wait(1);
        this.costume = "costume5";
        yield;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.buildingpower = 100;
    this.visible = false;
  }

  *whenIReceiveYoudied() {
    this.visible = false;
  }

  *whenIReceiveOfficeonline() {
    this.visible = true;
    this.costume = "costume1";
    /* TODO: Implement stop other scripts in sprite */ null;
    while (true) {
      if (
        this.toNumber(this.stage.vars.buildingpower) === 0 ||
        this.compare(this.stage.vars.buildingpower, 0) < 0
      ) {
        yield* this.broadcastAndWait("PowerOff");
      } else {
        if (this.toString(this.stage.vars.officeresetting) === "false") {
          this.stage.vars.buildingpower -= 0.005;
          if (this.toString(this.stage.vars.doorclosed) === "true") {
            this.stage.vars.buildingpower -= 0.05;
          }
          if (this.toString(this.stage.vars.camon) === "true") {
            this.stage.vars.buildingpower -= 0.02;
          }
          if (this.compare(this.stage.vars.buildingpower, 75) < 0) {
            this.costume = "costume2";
          }
          if (this.compare(this.stage.vars.buildingpower, 50) < 0) {
            this.costume = "costume3";
          }
          if (this.compare(this.stage.vars.buildingpower, 25) < 0) {
            this.costume = "costume4";
          }
          if (this.compare(this.stage.vars.buildingpower, 5) < 0) {
            this.costume = "costume5";
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dooranim extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Dooranim/costumes/costume1.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume2", "./Dooranim/costumes/costume2.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume3", "./Dooranim/costumes/costume3.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume4", "./Dooranim/costumes/costume4.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume5", "./Dooranim/costumes/costume5.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume6", "./Dooranim/costumes/costume6.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume7", "./Dooranim/costumes/costume7.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume8", "./Dooranim/costumes/costume8.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume9", "./Dooranim/costumes/costume9.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("costume10", "./Dooranim/costumes/costume10.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume11", "./Dooranim/costumes/costume11.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume12", "./Dooranim/costumes/costume12.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume13", "./Dooranim/costumes/costume13.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume14", "./Dooranim/costumes/costume14.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume15", "./Dooranim/costumes/costume15.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume16", "./Dooranim/costumes/costume16.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
      new Costume("costume17", "./Dooranim/costumes/costume17.svg", {
        x: 103.99999999999991,
        y: 110.49999999999999,
      }),
    ];

    this.sounds = [new Sound("pop", "./Dooranim/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "DoorAnim" },
        this.whenIReceiveDooranim
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveDooranim() {
    this.visible = true;
    if (this.toString(this.stage.vars.doorclosed) === "true") {
      this.costume = "costume9";
    } else {
      this.costume = "costume1";
    }
    for (let i = 0; i < 8; i++) {
      this.goto(this.sprites["Office"].x, this.sprites["Office"].y);
      this.costumeNumber++;
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

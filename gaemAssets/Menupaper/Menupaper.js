/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Menupaper extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Menupaper/costumes/costume1.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("Page1", "./Menupaper/costumes/Page1.svg", {
        x: 200.49879363199994,
        y: 275.9853952239999,
      }),
      new Costume("Page2", "./Menupaper/costumes/Page2.svg", {
        x: 200.49880089599998,
        y: 275.98539170799984,
      }),
      new Costume("Page3", "./Menupaper/costumes/Page3.svg", {
        x: 200.49879064399997,
        y: 275.98538924799993,
      }),
      new Costume("Page4", "./Menupaper/costumes/Page4.svg", {
        x: 200.49879064399997,
        y: 275.98538924799993,
      }),
      new Costume("Page5", "./Menupaper/costumes/Page5.svg", {
        x: 200.49878999999999,
        y: 275.98538999999994,
      }),
    ];

    this.sounds = [new Sound("pop", "./Menupaper/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Openinstructions" },
        this.whenIReceiveOpeninstructions
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveOpeninstructions() {
    this.costume = "Page1";
    this.visible = true;
  }

  *whenKeyRightArrowPressed() {
    this.costumeNumber++;
    if (this.costumeNumber === 6) {
      yield* this.wait(3);
      this.visible = false;
      this.broadcast("spokyjumpscar");
      yield* this.wait(0.2);
      this.broadcast("OfficeOnline");
      this.broadcast("nightscreen");
      return;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

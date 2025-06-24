/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class DigitalGlitch01 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Digital Glitch 01",
        "./DigitalGlitch01/costumes/Digital Glitch 01.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 02",
        "./DigitalGlitch01/costumes/Digital Glitch 02.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 03",
        "./DigitalGlitch01/costumes/Digital Glitch 03.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 04",
        "./DigitalGlitch01/costumes/Digital Glitch 04.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 05",
        "./DigitalGlitch01/costumes/Digital Glitch 05.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 06",
        "./DigitalGlitch01/costumes/Digital Glitch 06.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 07",
        "./DigitalGlitch01/costumes/Digital Glitch 07.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 08",
        "./DigitalGlitch01/costumes/Digital Glitch 08.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 09",
        "./DigitalGlitch01/costumes/Digital Glitch 09.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 10",
        "./DigitalGlitch01/costumes/Digital Glitch 10.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 11",
        "./DigitalGlitch01/costumes/Digital Glitch 11.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 12",
        "./DigitalGlitch01/costumes/Digital Glitch 12.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 13",
        "./DigitalGlitch01/costumes/Digital Glitch 13.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 14",
        "./DigitalGlitch01/costumes/Digital Glitch 14.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 15",
        "./DigitalGlitch01/costumes/Digital Glitch 15.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 16",
        "./DigitalGlitch01/costumes/Digital Glitch 16.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 17",
        "./DigitalGlitch01/costumes/Digital Glitch 17.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 18",
        "./DigitalGlitch01/costumes/Digital Glitch 18.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 19",
        "./DigitalGlitch01/costumes/Digital Glitch 19.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 20",
        "./DigitalGlitch01/costumes/Digital Glitch 20.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 21",
        "./DigitalGlitch01/costumes/Digital Glitch 21.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 22",
        "./DigitalGlitch01/costumes/Digital Glitch 22.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 23",
        "./DigitalGlitch01/costumes/Digital Glitch 23.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 24",
        "./DigitalGlitch01/costumes/Digital Glitch 24.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 25",
        "./DigitalGlitch01/costumes/Digital Glitch 25.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 26",
        "./DigitalGlitch01/costumes/Digital Glitch 26.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 27",
        "./DigitalGlitch01/costumes/Digital Glitch 27.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 28",
        "./DigitalGlitch01/costumes/Digital Glitch 28.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 29",
        "./DigitalGlitch01/costumes/Digital Glitch 29.png",
        { x: 480, y: 270 }
      ),
      new Costume(
        "Digital Glitch 30",
        "./DigitalGlitch01/costumes/Digital Glitch 30.png",
        { x: 480, y: 270 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveCamon() {
    while (true) {
      this.visible = true;
      this.costume = "Digital Glitch " + this.toString(this.random(1, 30));
      for (let i = 0; i < 10; i++) {
        this.costumeNumber++;
        yield;
      }
      this.visible = false;
      yield* this.wait(this.random(1, 10));
      yield;
    }
  }

  *whenIReceiveCamoff() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

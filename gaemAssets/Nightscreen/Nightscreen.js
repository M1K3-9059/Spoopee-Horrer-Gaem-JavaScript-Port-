/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nightscreen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Nightscreen/costumes/costume1.svg", {
        x: 272,
        y: 180.55882352941177,
      }),
      new Costume("costume2", "./Nightscreen/costumes/costume2.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume3", "./Nightscreen/costumes/costume3.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume4", "./Nightscreen/costumes/costume4.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume5", "./Nightscreen/costumes/costume5.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume6", "./Nightscreen/costumes/costume6.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume7", "./Nightscreen/costumes/costume7.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume8", "./Nightscreen/costumes/costume8.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
      new Costume("costume9", "./Nightscreen/costumes/costume9.svg", {
        x: 272,
        y: 180.55883352941177,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./Nightscreen/sounds/pop.wav"),
      new Sound("Boom Cloud", "./Nightscreen/sounds/Boom Cloud.wav"),
      new Sound("Kick Back", "./Nightscreen/sounds/Kick Back.wav"),
      new Sound("Cymbal Crash", "./Nightscreen/sounds/Cymbal Crash.wav"),
      new Sound("Drum", "./Nightscreen/sounds/Drum.wav"),
      new Sound("Drum2", "./Nightscreen/sounds/Drum2.wav"),
      new Sound("Drum3", "./Nightscreen/sounds/Drum3.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "nightscreen" },
        this.whenIReceiveNightscreen
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NightFinished" },
        this.whenIReceiveNightfinished
      ),
    ];

    this.audioEffects.volume = 25;
  }

  *whenIReceiveNightscreen() {
    yield* this.wait(0.3);
    this.effects.ghost = 0;
    this.costume = "costume" + this.toString(this.stage.vars.Night);
    this.visible = true;
    this.audioEffects.clear();
    yield* this.startSound("Boom Cloud");
    yield* this.wait(2);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveNightfinished() {
    this.visible = true;
    this.costume = "costume8";
    for (let i = 0; i < 10; i++) {
      this.effects.ghost -= 10;
      yield;
    }
    yield* this.playSoundUntilDone("Kick Back");
    yield* this.playSoundUntilDone("Cymbal Crash");
    yield* this.wait(3);
    this.costume = "costume9";
    while (true) {
      for (let i = 0; i < 2; i++) {
        yield* this.playSoundUntilDone("Drum2");
        yield;
      }
      yield* this.playSoundUntilDone("Drum3");
      yield;
    }
  }
}

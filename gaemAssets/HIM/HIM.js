/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HIM extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HIM/costumes/costume1.svg", {
        x: 66.5,
        y: 82.23396492004395,
      }),
      new Costume("costume2", "./HIM/costumes/costume2.svg", {
        x: 66.5,
        y: 82.23396492004395,
      }),
    ];

    this.sounds = [
      new Sound("pop", "./HIM/sounds/pop.wav"),
      new Sound("Classical Piano", "./HIM/sounds/Classical Piano.wav"),
      new Sound("Boom Cloud", "./HIM/sounds/Boom Cloud.wav"),
      new Sound("Alert", "./HIM/sounds/Alert.wav"),
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOffline" },
        this.whenIReceiveOfficeoffline
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OH SHIT THE LIGHTS" },
        this.whenIReceiveOhShitTheLights
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
    ];
  }

  *whenIReceiveOfficeoffline() {
    if (this.random(1, 20) === 6) {
      this.moveAhead();
      this.effects.ghost = 100;
      this.visible = true;
      this.goto(this.random(-240, 240), this.random(-180, 180));
      while (true) {
        this.createClone();
        yield* this.appear();
        yield* this.blink();
        yield;
      }
    }
  }

  *whenIReceiveOhShitTheLights() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *appear() {
    yield* this.wait(this.random(1, 5));
    for (let i = 0; i < 100; i++) {
      this.effects.ghost -= 1;
      yield;
    }
  }

  *startAsClone() {
    this.effects.ghost = 100;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.size = this.random(45, 95);
    this.direction += this.random(-20, 20);
    yield* this.appear();
    while (true) {
      yield* this.blink();
      yield* this.wait(10);
      yield;
    }
  }

  *blink() {
    this.costume = "costume2";
    yield* this.wait(0.25);
    this.costume = "costume1";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

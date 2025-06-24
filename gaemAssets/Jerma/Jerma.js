/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Jerma extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Stare", "./Jerma/costumes/Stare.svg", {
        x: 42.30381626196228,
        y: 39.571513803492536,
      }),
      new Costume("Stare2", "./Jerma/costumes/Stare2.svg", {
        x: 36.119834898937086,
        y: 59.72516007203349,
      }),
      new Costume("StareJumpscare", "./Jerma/costumes/StareJumpscare.svg", {
        x: 41.846503267420275,
        y: -18.83449906717533,
      }),
      new Costume("StareJumpscare2", "./Jerma/costumes/StareJumpscare2.svg", {
        x: 46.39645981545732,
        y: 13.015096597195281,
      }),
      new Costume("StareJumpscare3", "./Jerma/costumes/StareJumpscare3.svg", {
        x: 32.58019465359288,
        y: 39.40997786618857,
      }),
      new Costume("StareJumpscare4", "./Jerma/costumes/StareJumpscare4.svg", {
        x: 30.196351269340056,
        y: 39.053378968326456,
      }),
      new Costume("StareJumpscare5", "./Jerma/costumes/StareJumpscare5.svg", {
        x: 27.54221366718741,
        y: 35.640924778338615,
      }),
      new Costume("StareJumpscare6", "./Jerma/costumes/StareJumpscare6.svg", {
        x: 27.921381478633037,
        y: 32.85760166037787,
      }),
      new Costume("StareJumpscare7", "./Jerma/costumes/StareJumpscare7.svg", {
        x: 32.850488282909026,
        y: 42.31433598665376,
      }),
      new Costume("StareJumpscare9", "./Jerma/costumes/StareJumpscare9.svg", {
        x: 48.6146386042891,
        y: 75.58176421923599,
      }),
      new Costume("StareJumpscare12", "./Jerma/costumes/StareJumpscare12.svg", {
        x: 121.18971892699263,
        y: 169.17453891935438,
      }),
      new Costume("jermasus", "./Jerma/costumes/jermasus.svg", {
        x: 62.15133174665101,
        y: 56.682014552945674,
      }),
      new Costume("scaryjerma", "./Jerma/costumes/scaryjerma.png", {
        x: 46,
        y: 116,
      }),
      new Costume("pequeño", "./Jerma/costumes/pequeño.svg", {
        x: 22,
        y: 19.5,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(
        Trigger.BROADCAST,
        { name: "jumscarJerma" },
        this.whenIReceiveJumscarjerma
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.moveBehind(15);
    this.visible = false;
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
    this.size = 350;
    this.direction = 90;
  }

  *whenIReceiveCamon() {
    if (this.compare(this.stage.vars.camval, this.stage.vars.jermaspot) === 0) {
      this.visible = true;
      if (this.toString(this.stage.vars.spooky) === "true") {
        this.costume = "Stare";
      } else {
        this.costume = "scaryjerma";
      }
      this.stage.vars.jermaspot = 0;
      yield* this.wait(2);
      for (let i = 0; i < 5; i++) {
        this.visible = false;
        yield* this.wait(this.random(0.01, 0.07));
        this.visible = true;
        yield;
      }
      this.visible = false;
      this.stage.vars.jermacancelled = "true";
      this.broadcast("jermacancelled");
    }
  }

  *whenIReceiveJumscarjerma() {
    this.visible = false;
    this.goto(0, 0);
    this.stage.vars.jermaspot = 0;
    yield* this.wait(this.random(15, 25));
    if (this.toString(this.stage.vars.camon) === "true") {
      this.broadcast("camoff");
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    this.broadcast("Jumscaroptimizer");
    if (this.toString(this.stage.vars.spooky) === "true") {
      this.costume = "pequeño";
      this.size = 400;
      this.costume = "StareJumpscare";
      this.moveAhead();
      this.visible = true;
      for (let i = 0; i < 8; i++) {
        this.costumeNumber++;
        yield* this.wait(0.04);
        yield;
      }
      this.visible = false;
    } else {
      this.goto(0, -150);
      yield* this.startSound("mogusjumpscare");
      this.costume = "jermasus";
      this.moveAhead();
      this.visible = true;
      yield* this.glide(0.2, 0, 0);
      yield* this.glide(0.07, 0, -8);
      yield* this.glide(0.1, 0, 0);
      for (let i = 0; i < 20; i++) {
        this.size += 20;
        this.direction += 1;
        yield;
      }
      this.broadcast("YouDied");
      this.visible = false;
    }
    yield* this.wait(2);
    if (this.random(1, 3) === 1) {
      yield* this.playSoundUntilDone("stopostingaboutamongusclip1");
    } else {
      if (this.random(1, 3) === 2) {
        yield* this.playSoundUntilDone("stopostingaboutamongusclip2");
      } else {
        if (this.random(1, 3) === 3) {
          yield* this.playSoundUntilDone("stopostingaboutamongusclip3");
        }
      }
    }
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveCamoff() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}

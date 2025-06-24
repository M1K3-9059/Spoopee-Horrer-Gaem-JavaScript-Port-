/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fnafcam extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("fnafcam", "./Fnafcam/costumes/fnafcam.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam2", "./Fnafcam/costumes/fnafcam2.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam3", "./Fnafcam/costumes/fnafcam3.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam4", "./Fnafcam/costumes/fnafcam4.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam5", "./Fnafcam/costumes/fnafcam5.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam6", "./Fnafcam/costumes/fnafcam6.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam7", "./Fnafcam/costumes/fnafcam7.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam8", "./Fnafcam/costumes/fnafcam8.png", {
        x: 480,
        y: 360,
      }),
      new Costume("fnafcam9", "./Fnafcam/costumes/fnafcam9.png", {
        x: 480,
        y: 360,
      }),
      new Costume("costume1", "./Fnafcam/costumes/costume1.svg", {
        x: 224.01137694236468,
        y: 180.81671013415823,
      }),
      new Costume("Cam1Beta", "./Fnafcam/costumes/Cam1Beta.svg", {
        x: 240.43782000000002,
        y: 171.58875999999998,
      }),
      new Costume("Cam0", "./Fnafcam/costumes/Cam0.svg", {
        x: 248.65971,
        y: 172.02087,
      }),
      new Costume("Cam1", "./Fnafcam/costumes/Cam1.svg", {
        x: 481.6350810160001,
        y: 315.79388521556245,
      }),
      new Costume("Cam1alt", "./Fnafcam/costumes/Cam1alt.svg", {
        x: 312.5,
        y: 174.20352499999998,
      }),
      new Costume("Cam2", "./Fnafcam/costumes/Cam2.svg", {
        x: 312.5,
        y: 199.910425,
      }),
      new Costume("Cam3", "./Fnafcam/costumes/Cam3.svg", {
        x: 300.9512286582001,
        y: 357.87248999999997,
      }),
      new Costume("Cam4", "./Fnafcam/costumes/Cam4.svg", {
        x: 326.83571675062683,
        y: 321.09847,
      }),
      new Costume("Cam4Anim1", "./Fnafcam/costumes/Cam4Anim1.svg", {
        x: 298.909395,
        y: 321.09847,
      }),
      new Costume("Cam4Anim2", "./Fnafcam/costumes/Cam4Anim2.svg", {
        x: 298.909385,
        y: 321.09847,
      }),
      new Costume("Cam4Anim3", "./Fnafcam/costumes/Cam4Anim3.svg", {
        x: 298.90938500000004,
        y: 321.09847,
      }),
      new Costume("Cam4Anim4", "./Fnafcam/costumes/Cam4Anim4.svg", {
        x: 298.909355,
        y: 321.09847,
      }),
      new Costume("Cam4Anim5", "./Fnafcam/costumes/Cam4Anim5.svg", {
        x: 298.90938500000004,
        y: 321.09847,
      }),
      new Costume("PlaceholderCam", "./Fnafcam/costumes/PlaceholderCam.svg", {
        x: 217.7177177177175,
        y: 165.58875929769513,
      }),
      new Costume("ElevatorShaft", "./Fnafcam/costumes/ElevatorShaft.svg", {
        x: 314.7621435583311,
        y: 340.8940166732171,
      }),
      new Costume("ElevatorShaft2", "./Fnafcam/costumes/ElevatorShaft2.svg", {
        x: 314.761925,
        y: 340.89312,
      }),
      new Costume("windowsxp", "./Fnafcam/costumes/windowsxp.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp2", "./Fnafcam/costumes/windowsxp2.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp3", "./Fnafcam/costumes/windowsxp3.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp4", "./Fnafcam/costumes/windowsxp4.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp5", "./Fnafcam/costumes/windowsxp5.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp6", "./Fnafcam/costumes/windowsxp6.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp7", "./Fnafcam/costumes/windowsxp7.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp8", "./Fnafcam/costumes/windowsxp8.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp9", "./Fnafcam/costumes/windowsxp9.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp10", "./Fnafcam/costumes/windowsxp10.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp11", "./Fnafcam/costumes/windowsxp11.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp12", "./Fnafcam/costumes/windowsxp12.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp13", "./Fnafcam/costumes/windowsxp13.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp14", "./Fnafcam/costumes/windowsxp14.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp15", "./Fnafcam/costumes/windowsxp15.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp16", "./Fnafcam/costumes/windowsxp16.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp17", "./Fnafcam/costumes/windowsxp17.png", {
        x: 150,
        y: 150,
      }),
      new Costume("windowsxp18", "./Fnafcam/costumes/windowsxp18.png", {
        x: 150,
        y: 150,
      }),
      new Costume("bluescreen", "./Fnafcam/costumes/bluescreen.svg", {
        x: 212.21404053232564,
        y: 148.48598329833334,
      }),
      new Costume("hazardstripes", "./Fnafcam/costumes/hazardstripes.svg", {
        x: 240,
        y: 60,
      }),
      new Costume("concrete", "./Fnafcam/costumes/concrete.svg", {
        x: 137.5,
        y: 91.5,
      }),
      new Costume("scratches", "./Fnafcam/costumes/scratches.svg", {
        x: 240,
        y: 180,
      }),
      new Costume("metaltexture", "./Fnafcam/costumes/metaltexture.svg", {
        x: 200,
        y: 133,
      }),
      new Costume("Caution", "./Fnafcam/costumes/Caution.png", {
        x: 240,
        y: 168,
      }),
      new Costume("costume2", "./Fnafcam/costumes/costume2.svg", {
        x: 0,
        y: 0,
      }),
      new Costume("7segment", "./Fnafcam/costumes/7segment.svg", {
        x: 236.06838943552205,
        y: 171.13031848783635,
      }),
      new Costume("diamond-plate", "./Fnafcam/costumes/diamond-plate.svg", {
        x: 125,
        y: 105,
      }),
    ];

    this.sounds = [
      new Sound(
        "windows-xp-startup-sound",
        "./Fnafcam/sounds/windows-xp-startup-sound.wav"
      ),
      new Sound("Machine", "./Fnafcam/sounds/Machine.wav"),
      new Sound("Hihat Beatbox", "./Fnafcam/sounds/Hihat Beatbox.wav"),
      new Sound("Hihat Beatbox2", "./Fnafcam/sounds/Hihat Beatbox2.wav"),
      new Sound("Crunch", "./Fnafcam/sounds/Crunch.wav"),
      new Sound(
        "Windows Error - Sound Effect ",
        "./Fnafcam/sounds/Windows Error - Sound Effect .wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Cam" }, this.whenIReceiveCam),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CamCrash" },
        this.whenIReceiveCamcrash
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "computereset" },
        this.whenIReceiveComputereset
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "CamCrash" },
        this.whenIReceiveCamcrash2
      ),
    ];
  }

  *whenIReceiveCam() {
    if (
      this.toString(this.stage.vars.officeresetting) === "false" &&
      this.toNumber(this.stage.vars.waitforaction) === 0
    ) {
      yield* this.startSound("Hihat Beatbox");
      yield* this.startSound("Machine");
      this.costume = "fnafcam";
      this.visible = true;
      for (let i = 0; i < 7; i++) {
        this.costumeNumber++;
        yield;
      }
      if (this.toString(this.stage.vars.camcrash) === "true") {
        this.costume = "bluescreen";
        yield* this.startSound("Windows Error - Sound Effect ");
        this.stage.vars.camval = 0;
        this.stage.vars.camon = "true";
      } else {
        for (let i = 0; i < this.random(1, 2); i++) {
          this.costume = "windowsxp";
          for (let i = 0; i < 17; i++) {
            this.costumeNumber++;
            yield* this.wait(0.1);
            yield;
          }
          yield;
        }
        if (this.toString(this.stage.vars.camcrash) === "false") {
          this.broadcast("camon");
        } else {
          this.costume = "bluescreen";
        }
      }
    }
  }

  *whenIReceiveCamoff() {
    yield* this.startSound("Hihat Beatbox");
    this.stage.vars.randomvardontdeleteorelsethecamerawillnotworkright = 8;
    for (let i = 0; i < 7; i++) {
      this.costume =
        "fnafcam" +
        this.toString(
          this.stage.vars.randomvardontdeleteorelsethecamerawillnotworkright
        );
      this.stage.vars.randomvardontdeleteorelsethecamerawillnotworkright--;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.camval = 1;
    this.visible = false;
  }

  *whenIReceiveCamon() {
    yield* this.startSound("Crunch");
    this.costume = "Cam" + this.toString(this.stage.vars.camval);
  }

  *whenIReceiveCamcrash() {
    this.stage.vars.camcrash = "true";
  }

  *whenIReceiveComputereset() {
    yield* this.startSound("windows-xp-startup-sound");
    this.stage.vars.camcrash = "false";
  }

  *whenIReceiveCamcrash2() {
    if (this.toString(this.stage.vars.camon) === "true") {
      this.costume = "bluescreen";
      yield* this.startSound("Windows Error - Sound Effect ");
    } else {
      this.broadcast("Cam");
    }
  }
}

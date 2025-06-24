/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Amongus extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("AMONGUS", "./Amongus/costumes/AMONGUS.png", {
        x: 335,
        y: 360,
      }),
      new Costume("AMONGUScam1", "./Amongus/costumes/AMONGUScam1.png", {
        x: 335,
        y: 360,
      }),
      new Costume("AMONGUScam2", "./Amongus/costumes/AMONGUScam2.png", {
        x: 335,
        y: 360,
      }),
      new Costume("AMONGUScam3", "./Amongus/costumes/AMONGUScam3.png", {
        x: 335,
        y: 360,
      }),
      new Costume("AMONGUScam4", "./Amongus/costumes/AMONGUScam4.png", {
        x: 335,
        y: 360,
      }),
      new Costume("hmm", "./Amongus/costumes/hmm.png", { x: 480, y: 360 }),
      new Costume(
        "AmongusAnimationWip",
        "./Amongus/costumes/AmongusAnimationWip.svg",
        { x: 611.6963493945584, y: -127.07977026797874 }
      ),
      new Costume(
        "AmongusAnimationWip11",
        "./Amongus/costumes/AmongusAnimationWip11.svg",
        { x: 561.6962725, y: -12.579766755992864 }
      ),
      new Costume(
        "AmongusAnimationWip2",
        "./Amongus/costumes/AmongusAnimationWip2.svg",
        { x: 545.1798257840132, y: 142.57488648801424 }
      ),
      new Costume(
        "AmongusAnimationWip3",
        "./Amongus/costumes/AmongusAnimationWip3.svg",
        { x: 503.13775874035673, y: 150.08240033279446 }
      ),
      new Costume(
        "AmongusAnimationWip4",
        "./Amongus/costumes/AmongusAnimationWip4.svg",
        { x: 417.55219005896595, y: 127.19760628663883 }
      ),
      new Costume(
        "AmongusAnimationWip5",
        "./Amongus/costumes/AmongusAnimationWip5.svg",
        { x: 360.4951349565192, y: 205.27568562920374 }
      ),
      new Costume(
        "AmongusAnimationWip6",
        "./Amongus/costumes/AmongusAnimationWip6.svg",
        { x: 274.9095303632969, y: 232.3027199579105 }
      ),
      new Costume(
        "AmongusAnimationWip7",
        "./Amongus/costumes/AmongusAnimationWip7.svg",
        { x: 190.5403126252448, y: 177.7728490888251 }
      ),
      new Costume(
        "AmongusAnimationWip8",
        "./Amongus/costumes/AmongusAnimationWip8.svg",
        { x: 233.97409750000003, y: 181.25136500000002 }
      ),
      new Costume(
        "AmongusAnimationWip9",
        "./Amongus/costumes/AmongusAnimationWip9.svg",
        { x: 299.5223518406739, y: 237.26748819782995 }
      ),
      new Costume(
        "AmongusAnimationWip10",
        "./Amongus/costumes/AmongusAnimationWip10.svg",
        { x: 400.96468867665385, y: 321.17351924877113 }
      ),
      new Costume("costume1", "./Amongus/costumes/costume1.svg", {
        x: 83.28257446713212,
        y: 120.9375209636625,
      }),
      new Costume("Cyclops", "./Amongus/costumes/Cyclops.svg", {
        x: 60.23871,
        y: 73.17861664541246,
      }),
      new Costume("Cyclopscam1", "./Amongus/costumes/Cyclopscam1.svg", {
        x: 368.960585,
        y: 191.12415667498968,
      }),
      new Costume("Cyclopscam4", "./Amongus/costumes/Cyclopscam4.svg", {
        x: 567.035245,
        y: 342.19675510895064,
      }),
      new Costume("Cyclopscam4anim", "./Amongus/costumes/Cyclopscam4anim.svg", {
        x: 567.035245,
        y: 339.4323644491741,
      }),
      new Costume(
        "Cyclopscam4anim2",
        "./Amongus/costumes/Cyclopscam4anim2.svg",
        { x: 567.035245, y: 339.43236477602613 }
      ),
      new Costume(
        "Cyclopscam4anim3",
        "./Amongus/costumes/Cyclopscam4anim3.svg",
        { x: 567.035245, y: 331.13922214299265 }
      ),
      new Costume(
        "CyclopsJumscarNew",
        "./Amongus/costumes/CyclopsJumscarNew.svg",
        { x: 398.3652258776978, y: -36.240659661979464 }
      ),
      new Costume(
        "CyclopsJumscarNew2",
        "./Amongus/costumes/CyclopsJumscarNew2.svg",
        { x: 398.36521587769784, y: 220.5161064816104 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew.svg",
        { x: 398.36520500000006, y: 345.139681182337 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew2",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew2.svg",
        { x: 398.36520500000006, y: 352.8805039507344 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew3",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew3.svg",
        { x: 398.365205, y: 332.66210353743736 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew4",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew4.svg",
        { x: 398.365195, y: 323.5470621447415 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew5",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew5.svg",
        { x: 398.365185, y: 421.4347142621978 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew6",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew6.svg",
        { x: 398.36516500000005, y: 652.2390574971317 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew7",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew7.svg",
        { x: 398.36516500000005, y: 652.2390674834442 }
      ),
      new Costume(
        "CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew8",
        "./Amongus/costumes/CyclopsJumscarNew3Cyclopscam4anim4Cyclopsanimnew8.svg",
        { x: 398.36516500000005, y: 652.2390674834442 }
      ),
      new Costume("Cyclopscam2", "./Amongus/costumes/Cyclopscam2.svg", {
        x: 368.960585,
        y: 299.8279123310851,
      }),
      new Costume("Cyclopscam3", "./Amongus/costumes/Cyclopscam3.svg", {
        x: 368.960585,
        y: 274.63949119924325,
      }),
      new Costume(
        "CyclopsJumpscare",
        "./Amongus/costumes/CyclopsJumpscare.svg",
        { x: 210.988605, y: 5.217584194613664 }
      ),
      new Costume(
        "CyclopsJumpscare2",
        "./Amongus/costumes/CyclopsJumpscare2.svg",
        { x: 188.51909220614735, y: 75.46457270612817 }
      ),
      new Costume(
        "CyclopsJumpscare3",
        "./Amongus/costumes/CyclopsJumpscare3.svg",
        { x: 309.49803285025166, y: 107.40411246927876 }
      ),
      new Costume(
        "CyclopsJumpscare4",
        "./Amongus/costumes/CyclopsJumpscare4.svg",
        { x: 393.8125303743857, y: 91.77543916671458 }
      ),
      new Costume(
        "CyclopsJumpscare5",
        "./Amongus/costumes/CyclopsJumpscare5.svg",
        { x: 363.502798856205, y: 52.883026667167925 }
      ),
      new Costume(
        "CyclopsJumpscare6",
        "./Amongus/costumes/CyclopsJumpscare6.svg",
        { x: 358.4511769365082, y: 36.71783323231875 }
      ),
      new Costume(
        "CyclopsJumpscare7",
        "./Amongus/costumes/CyclopsJumpscare7.svg",
        { x: 358.4511769365082, y: 39.212845664975816 }
      ),
      new Costume(
        "CyclopsJumpscare8",
        "./Amongus/costumes/CyclopsJumpscare8.svg",
        { x: 358.4511769365082, y: 87.14205928721898 }
      ),
      new Costume(
        "CyclopsJumpscare13",
        "./Amongus/costumes/CyclopsJumpscare13.svg",
        { x: 451.2089403677377, y: 184.8701604126834 }
      ),
      new Costume(
        "CyclopsJumpscare9",
        "./Amongus/costumes/CyclopsJumpscare9.svg",
        { x: 451.20893376336744, y: 503.256029651987 }
      ),
    ];

    this.sounds = [
      new Sound("mogusjumpscare", "./Amongus/sounds/mogusjumpscare.wav"),
      new Sound(
        "among-us-dead-body-reported-sound-effect_BsczDVE",
        "./Amongus/sounds/among-us-dead-body-reported-sound-effect_BsczDVE.wav"
      ),
      new Sound(
        "stopostingaboutamongusclip1",
        "./Amongus/sounds/stopostingaboutamongusclip1.wav"
      ),
      new Sound(
        "stopostingaboutamongusclip2",
        "./Amongus/sounds/stopostingaboutamongusclip2.wav"
      ),
      new Sound(
        "stopostingaboutamongusclip3",
        "./Amongus/sounds/stopostingaboutamongusclip3.wav"
      ),
      new Sound("recording1", "./Amongus/sounds/recording1.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "camon" }, this.whenIReceiveCamon),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "jumscar amogus" },
        this.whenIReceiveJumscarAmogus
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscar amongus nowait" },
        this.whenIReceiveJumscarAmongusNowait
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.moveBehind(21);
    this.costume = "AMONGUS";
    this.size = 50;
    this.direction = 90;
    this.goto(-10, 0);
    this.stage.vars.amogusSpot = 2;
    this.visible = false;
  }

  *whenIReceiveCamon() {
    while (!(this.toString(this.stage.vars.camon) === "false")) {
      if (
        this.compare(this.stage.vars.camval, this.stage.vars.amogusSpot) === 0
      ) {
        this.visible = true;
        if (this.toString(this.stage.vars.spooky) === "true") {
          this.costume =
            "Cyclops" + ("cam" + this.toString(this.stage.vars.camval));
          if (this.toNumber(this.stage.vars.camval) === 4) {
            while (
              !!(
                this.compare(
                  this.stage.vars.camval,
                  this.stage.vars.amogusSpot
                ) === 0
              )
            ) {
              this.costume = "Cyclopscam4";
              yield* this.wait(this.random(1, 4));
              this.costume = "Cyclopscam4anim";
              yield* this.wait(this.random(1, 5));
              this.costume = "Cyclopscam4anim2";
              yield* this.wait(this.random(1, 2));
              this.costume = "Cyclopscam4anim3";
              yield* this.wait(this.random(1, 7));
              yield;
            }
          }
        } else {
          this.costume =
            "AMONGUS" + ("cam" + this.toString(this.stage.vars.camval));
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveCamoff() {
    this.visible = false;
  }

  *whenIReceiveJumscarAmogus() {
    yield* this.startSound("among-us-dead-body-reported-sound-effect_BsczDVE");
    this.goto(0, 0);
    this.stage.vars.amogusSpot = 0;
    yield* this.wait(this.random(15, 25));
    if (this.toString(this.stage.vars.camon) === "true") {
      this.broadcast("camoff");
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    this.broadcast("Jumscaroptimizer");
    this.moveAhead();
    this.size = 100;
    if (this.toString(this.stage.vars.spooky) === "true") {
      yield* this.startSound("recording1");
      this.costume = "CyclopsJumscarNew";
    } else {
      yield* this.startSound("mogusjumpscare");
      this.costume = "AmongusAnimationWip";
    }
    this.visible = true;
    for (let i = 0; i < 9; i++) {
      this.costumeNumber++;
      yield* this.wait(0.05);
      yield;
    }
    this.broadcast("YouDied");
    this.visible = false;
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

  *whenIReceiveJumscarAmongusNowait() {
    if (this.toString(this.stage.vars.camon) === "true") {
      this.broadcast("camoff");
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    this.broadcast("Jumscaroptimizer");
    this.moveAhead();
    this.size = 100;
    if (this.toString(this.stage.vars.spooky) === "true") {
      yield* this.startSound("recording1");
      this.costume = "CyclopsJumscarNew";
    } else {
      yield* this.startSound("mogusjumpscare");
      this.costume = "AmongusAnimationWip";
    }
    this.visible = true;
    for (let i = 0; i < 9; i++) {
      this.costumeNumber++;
      yield* this.wait(0.05);
      yield;
    }
    this.broadcast("YouDied");
    this.visible = false;
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
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Office extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("HallDarkOld", "./Office/costumes/HallDarkOld.svg", {
        x: 283.5,
        y: 129.6847831658739,
      }),
      new Costume("HallDark", "./Office/costumes/HallDark.svg", {
        x: 362.51165916,
        y: 220.93612520909988,
      }),
      new Costume("HallVERYDarkalt", "./Office/costumes/HallVERYDarkalt.svg", {
        x: 283.5,
        y: 248.08213999999998,
      }),
      new Costume("HallVERYDark", "./Office/costumes/HallVERYDark.svg", {
        x: 362.51165958,
        y: 268.6376955555557,
      }),
      new Costume("Hall_light", "./Office/costumes/Hall_light.svg", {
        x: 362.51165895,
        y: 220.93612011759984,
      }),
      new Costume("Hall_lightSAUL", "./Office/costumes/Hall_lightSAUL.svg", {
        x: 362.51165979,
        y: 220.93612078709998,
      }),
      new Costume(
        "Hall_lightStalker",
        "./Office/costumes/Hall_lightStalker.svg",
        { x: 362.51165979, y: 220.93612078709998 }
      ),
      new Costume("HallDarkClosed", "./Office/costumes/HallDarkClosed.svg", {
        x: 362.5116594922,
        y: 220.93612157419994,
      }),
      new Costume(
        "Hall_lightClosed",
        "./Office/costumes/Hall_lightClosed.svg",
        { x: 283.5, y: 177.393645 }
      ),
      new Costume(
        "HallDarkClosedOLD",
        "./Office/costumes/HallDarkClosedOLD.svg",
        { x: 283.5, y: 129.68478694312307 }
      ),
      new Costume("Hall_lightOLD", "./Office/costumes/Hall_lightOLD.svg", {
        x: 290.1143246198947,
        y: 136,
      }),
      new Costume("HallDarkDebug", "./Office/costumes/HallDarkDebug.svg", {
        x: 283.5,
        y: 129.68478694312307,
      }),
      new Costume(
        "HallDarkDebugClosed",
        "./Office/costumes/HallDarkDebugClosed.svg",
        { x: 283.5, y: 129.68478755449846 }
      ),
      new Costume("HallVERYDarkOLD", "./Office/costumes/HallVERYDarkOLD.svg", {
        x: 358.10196,
        y: 136,
      }),
      new Costume(
        "HallVERYDarkDebug",
        "./Office/costumes/HallVERYDarkDebug.svg",
        { x: 358.10196, y: 116.5 }
      ),
      new Costume(
        "Hall_lightSAULOLD",
        "./Office/costumes/Hall_lightSAULOLD.svg",
        { x: 290.11431500000003, y: 136 }
      ),
      new Costume(
        "Hall_lightClosedOLD",
        "./Office/costumes/Hall_lightClosedOLD.svg",
        { x: 290.11431500000003, y: 136 }
      ),
      new Costume(
        "Hall_lightDebugClosed",
        "./Office/costumes/Hall_lightDebugClosed.svg",
        { x: 290.1143246198947, y: 129.68478877724922 }
      ),
      new Costume("VentDarkOLD", "./Office/costumes/VentDarkOLD.svg", {
        x: 336.636345,
        y: 184,
      }),
      new Costume("VentDark", "./Office/costumes/VentDark.svg", {
        x: 336.63633500000003,
        y: 184,
      }),
      new Costume("VentDarkClosed", "./Office/costumes/VentDarkClosed.svg", {
        x: 336.63633500000003,
        y: 184,
      }),
      new Costume(
        "VentDarkClosedOLD",
        "./Office/costumes/VentDarkClosedOLD.svg",
        { x: 336.636345, y: 184 }
      ),
      new Costume("VentDarkDebug", "./Office/costumes/VentDarkDebug.svg", {
        x: 336.636345,
        y: 184,
      }),
      new Costume(
        "VentVERYDarkDebug",
        "./Office/costumes/VentVERYDarkDebug.svg",
        { x: 336.63633500000003, y: 184 }
      ),
      new Costume("Hall_lightDebug", "./Office/costumes/Hall_lightDebug.svg", {
        x: 290.1143246198947,
        y: 129.6847893886246,
      }),
      new Costume("VentVERYDarkOld", "./Office/costumes/VentVERYDarkOld.svg", {
        x: 336.63633500000003,
        y: 184,
      }),
      new Costume("VentVERYDark", "./Office/costumes/VentVERYDark.svg", {
        x: 336.63633500000003,
        y: 354.5092452484998,
      }),
      new Costume("Vent_lightOLD", "./Office/costumes/Vent_lightOLD.svg", {
        x: 336.636305,
        y: 185.69680418212656,
      }),
      new Costume("Vent_light", "./Office/costumes/Vent_light.svg", {
        x: 339.96962,
        y: 185.696805,
      }),
      new Costume(
        "Vent_lightAMONGUS",
        "./Office/costumes/Vent_lightAMONGUS.svg",
        { x: 336.63628500000004, y: 185.69680418212656 }
      ),
      new Costume(
        "Vent_lightCyclops",
        "./Office/costumes/Vent_lightCyclops.svg",
        { x: 336.636265, y: 185.696775 }
      ),
      new Costume(
        "Vent_lightAMONGUSOLD",
        "./Office/costumes/Vent_lightAMONGUSOLD.svg",
        { x: 336.636305, y: 185.69680418212656 }
      ),
      new Costume("Vent_lightDebug", "./Office/costumes/Vent_lightDebug.svg", {
        x: 336.636295,
        y: 185.69680418212656,
      }),
      new Costume("DeskDark", "./Office/costumes/DeskDark.svg", {
        x: 229.13212977664483,
        y: 140.6111098941799,
      }),
      new Costume("DeskHit", "./Office/costumes/DeskHit.svg", {
        x: 229.13213,
        y: 140.61111,
      }),
      new Costume("DeskVERYDark", "./Office/costumes/DeskVERYDark.svg", {
        x: 229.13213,
        y: 140.61111,
      }),
      new Costume("fist", "./Office/costumes/fist.png", { x: 240, y: 135.5 }),
      new Costume("saulgoodman", "./Office/costumes/saulgoodman.svg", {
        x: 20,
        y: 128.5,
      }),
      new Costume("single-gate", "./Office/costumes/single-gate.svg", {
        x: 78,
        y: 97,
      }),
      new Costume(
        "corrugatedmetalsheet",
        "./Office/costumes/corrugatedmetalsheet.svg",
        { x: 139.25, y: 90 }
      ),
      new Costume("pipe", "./Office/costumes/pipe.svg", { x: 215.5, y: 58 }),
      new Costume("pipebent", "./Office/costumes/pipebent.svg", {
        x: 112.5,
        y: 112,
      }),
      new Costume("dustoverlay", "./Office/costumes/dustoverlay.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [
      new Sound("Space Ambience", "./Office/sounds/Space Ambience.wav"),
      new Sound("Drum Set1", "./Office/sounds/Drum Set1.wav"),
      new Sound("Teleport3", "./Office/sounds/Teleport3.wav"),
      new Sound("Spooky String", "./Office/sounds/Spooky String.wav"),
      new Sound("smack-1", "./Office/sounds/smack-1.wav"),
      new Sound(
        "zapsplat_industrial_angle_grinder_on_run_bursts_off_in_air_12468",
        "./Office/sounds/zapsplat_industrial_angle_grinder_on_run_bursts_off_in_air_12468.wav"
      ),
      new Sound(
        "zapsplat_nature_thunder_crack_designed_003_31230",
        "./Office/sounds/zapsplat_nature_thunder_crack_designed_003_31230.wav"
      ),
      new Sound(
        "zapsplat_sound_design_electricity_zap_spark_28906",
        "./Office/sounds/zapsplat_sound_design_electricity_zap_spark_28906.mp3"
      ),
      new Sound(
        "DSGNTonl_Tinnitus (ID 1388)_BSB",
        "./Office/sounds/DSGNTonl_Tinnitus (ID 1388)_BSB.wav"
      ),
      new Sound("Footsteps", "./Office/sounds/Footsteps.wav"),
      new Sound("Crank", "./Office/sounds/Crank.wav"),
      new Sound("Door Closing", "./Office/sounds/Door Closing.wav"),
      new Sound("vineboomAMONGUS", "./Office/sounds/vineboomAMONGUS.mp3"),
      new Sound(
        "saul-goodman-better-call-saul",
        "./Office/sounds/saul-goodman-better-call-saul.wav"
      ),
      new Sound("Saul(vineboom", "./Office/sounds/Saul(vineboom.wav"),
      new Sound("saulinthedistance", "./Office/sounds/saulinthedistance.mp3"),
      new Sound("shutoff", "./Office/sounds/shutoff.wav"),
      new Sound("doorclose", "./Office/sounds/doorclose.wav"),
      new Sound("dooropen", "./Office/sounds/dooropen.wav"),
      new Sound("Clang", "./Office/sounds/Clang.wav"),
      new Sound(
        "Among Us Vent Sound Effect",
        "./Office/sounds/Among Us Vent Sound Effect.wav"
      ),
      new Sound("Bonk", "./Office/sounds/Bonk.wav"),
      new Sound("Car Passing", "./Office/sounds/Car Passing.wav"),
      new Sound("Space Noise", "./Office/sounds/Space Noise.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "w" }, this.whenKeyWPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "z" }, this.whenKeyZPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOnline" },
        this.whenIReceiveOfficeonline
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOnline" },
        this.whenIReceiveOfficeonline2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Debug" }, this.whenIReceiveDebug),
      new Trigger(Trigger.BROADCAST, { name: "Cam" }, this.whenIReceiveCam),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camoff" },
        this.whenIReceiveCamoff
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "f" }, this.whenKeyFPressed),
      new Trigger(
        Trigger.BROADCAST,
        { name: "YouDied" },
        this.whenIReceiveYoudied
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startgame" },
        this.whenIReceiveStartgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOnline" },
        this.whenIReceiveOfficeonline3
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "s" }, this.whenKeySPressed),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "PowerOff" },
        this.whenIReceivePoweroff
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "amongusspotchanged" },
        this.whenIReceiveAmongusspotchanged
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ventpressure" },
        this.whenIReceiveVentpressure
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NightFinished" },
        this.whenIReceiveNightfinished
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "d" }, this.whenKeyDPressed),
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.camon = "false";
    this.stage.vars.gamestarted = "false";
    this.stage.vars.behind = "false";
    this.stage.vars.lightpower = 100;
    this.stage.vars.buildingpower = 100;
    this.stage.vars.officeresetting = "false";
    this.stage.vars.doorclosed = "false";
    this.stage.vars.ventclosed = "false";
    this.stage.vars.underdesk = "false";
    this.stage.vars.pressure = 0;
    this.stage.vars.debugmode = "false";
    this.stage.vars.waitforaction = 1;
    this.stage.watchers.behind.visible = false;
    this.stage.watchers.buildingpower.visible = false;
    this.stage.watchers.camon.visible = false;
    this.stage.watchers.camval.visible = false;
    this.stage.watchers.debugmode.visible = false;
    this.stage.watchers.lighton.visible = false;
    this.stage.watchers.lightpower.visible = false;
    this.stage.watchers.officeresetting.visible = false;
    this.stage.watchers.randomvardontdeleteorelsethecamerawillnotworkright.visible = false;
    this.stage.watchers.underdesk.visible = false;
    this.costume = "HallDark";
    this.visible = false;
  }

  *mousemove() {
    this.goto(this.mouse.x * -1, this.mouse.y * -1);
    if (this.compare(this.x, 47) > 0) {
      this.x = 47;
    }
    if (this.compare(this.x, -47) < 0) {
      this.x = -47;
    }
    if (this.compare(this.y, 18) > 0) {
      this.y = 18;
    }
    if (this.compare(this.y, -18) < 0) {
      this.y = -18;
    }
  }

  *lightflicker(lightplace, darkplace) {
    if (
      !(
        this.toNumber(this.stage.vars.lightpower) === 0 ||
        this.compare(this.stage.vars.lightpower, 0) < 0
      ) &&
      this.toString(this.stage.vars.underdesk) === "false"
    ) {
      this.stage.vars.lighton = "true";
      this.costume = lightplace;
      if (this.toString(this.stage.vars.debugmode) === "true") {
        this.costume = this.toString(lightplace) + "Debug";
      }
      if (this.toString(this.stage.vars.behind) === "true") {
        if (this.toNumber(this.stage.vars.amogusSpot) === 5) {
          if (this.toString(this.stage.vars.spooky) === "true") {
            this.costume = this.toString(lightplace) + "Cyclops";
            yield* this.startSound("vineboomAMONGUS");
          } else {
            this.costume = this.toString(lightplace) + "AMONGUS";
            yield* this.startSound("vineboomAMONGUS");
          }
        }
      }
      if (this.toString(this.stage.vars.behind) === "false") {
        if (this.toNumber(this.stage.vars.saulspot) === 5) {
          if (this.toString(this.stage.vars.spooky) === "true") {
            this.costume = this.toString(lightplace) + "Stalker";
            yield* this.startSound("Saul(vineboom");
          } else {
            this.costume = this.toString(lightplace) + "SAUL";
            yield* this.startSound("Saul(vineboom");
          }
        }
      }
      yield* this.wait(0.2);
      while (!!this.keyPressed("space")) {
        yield* this.mousemove();
        if (this.toNumber(this.stage.vars.lighton) === 0) {
          while (!!this.keyPressed("space")) {
            yield;
          }
        }
        if (this.random(1, 10) === 2) {
          if (!(this.toString(this.stage.vars.debugmode) === "true")) {
            for (let i = 0; i < this.random(1, 5); i++) {
              this.costume = darkplace;
              yield* this.wait(0.01);
              this.costume = lightplace;
              if (this.toNumber(this.stage.vars.amogusSpot) === 5) {
                if (this.toString(this.stage.vars.spooky) === "true") {
                  this.costume = this.toString(lightplace) + "Cyclops";
                } else {
                  this.costume = this.toString(lightplace) + "AMONGUS";
                }
              }
              if (this.toNumber(this.stage.vars.saulspot) === 5) {
                if (this.toString(this.stage.vars.spooky) === "true") {
                  this.costume = this.toString(lightplace) + "Stalker";
                  yield* this.startSound("Saul(vineboom");
                } else {
                  this.costume = this.toString(lightplace) + "SAUL";
                  yield* this.startSound("Saul(vineboom");
                }
              }
              yield;
            }
          }
          if (this.toString(this.stage.vars.debugmode) === "true") {
            for (let i = 0; i < this.random(1, 5); i++) {
              this.costume = this.toString(darkplace) + "Debug";
              yield* this.wait(0.01);
              this.costume = this.toString(lightplace) + "Debug";
              yield;
            }
          }
        }
        yield;
      }
      if (!(this.toString(this.stage.vars.debugmode) === "true")) {
        if (this.toString(this.stage.vars.lighton) === "true") {
          this.costume = darkplace;
          this.stage.vars.lighton = "false";
        }
      }
      if (this.toString(this.stage.vars.debugmode) === "true") {
        if (this.toString(this.stage.vars.lighton) === "true") {
          this.costume = this.toString(darkplace) + "Debug";
          this.stage.vars.lighton = "false";
        }
      }
    }
  }

  *whenKeyAPressed() {
    if (
      this.toNumber(this.stage.vars.waitforaction) === 0 &&
      this.toString(this.stage.vars.underdesk) === "false"
    ) {
      this.stage.vars.lighton = 0;
      for (let i = 0; i < 4; i++) {
        this.effects.ghost += 25;
        yield;
      }
      if (this.toString(this.stage.vars.behind) === "true") {
        this.stage.vars.behind = "false";
        yield* this.closedcheck("HallDark");
      } else {
        if (this.toString(this.stage.vars.behind) === "false") {
          this.stage.vars.behind = "true";
          yield* this.closedcheck("VentDark");
        }
      }
      yield* this.wait(0.2);
      this.effects.ghost = 0;
      this.stage.vars.lighton = "false";
      yield* this.wait(1);
    }
  }

  *whenKeyWPressed() {
    if (this.toNumber(this.stage.vars.waitforaction) === 0) {
      if (
        this.toString(this.stage.vars.behind) === "false" &&
        this.toString(this.stage.vars.camon) === "false" &&
        this.toString(this.stage.vars.underdesk) === "false"
      ) {
        if (this.toString(this.stage.vars.officeresetting) === "false") {
          this.broadcast("Cam");
          this.stage.vars.camon = "true";
        }
      } else {
        if (this.toString(this.stage.vars.camon) === "true") {
          this.broadcast("camoff");
          this.stage.vars.camon = "false";
        }
      }
      yield* this.wait(0.5);
    }
  }

  *ambience() {
    yield* this.wait(0.3);
    this.stopAllSounds();
    while (true) {
      if (this.toString(this.stage.vars.officeresetting) === "false") {
        yield* this.playSoundUntilDone("Space Noise");
      }
      yield;
    }
  }

  *whenKeyZPressed() {
    if (this.toNumber(this.stage.vars.waitforaction) === 0) {
      yield* this.powerdown();
    }
  }

  *whenIReceiveOfficeonline() {
    while (true) {
      for (let i = 0; i < 10; i++) {
        if (
          this.toString(this.stage.vars.camon) === "false" &&
          this.toString(this.stage.vars.menuon) === "false"
        ) {
          yield* this.mousemove();
          if (this.toString(this.stage.vars.underdesk) === "false") {
            if (this.keyPressed("space")) {
              if (this.toString(this.stage.vars.behind) === "false") {
                if (this.toString(this.stage.vars.doorclosed) === "false") {
                  yield* this.lightflicker("Hall_light", "HallDark");
                }
              } else {
                if (this.toString(this.stage.vars.behind) === "true") {
                  if (this.toString(this.stage.vars.ventclosed) === "false") {
                    yield* this.lightflicker("Vent_light", "VentDark");
                  }
                }
              }
            }
          }
        }
        yield;
      }
      yield;
    }
  }

  *shutofflight(roomdark, roomdarker) {
    this.costume = roomdarker;
    yield* this.wait(0.17);
    yield* this.startSound("shutoff");
    for (let i = 0; i < this.random(2, 5); i++) {
      this.costume = roomdark;
      yield* this.wait(this.random(0.05, 0.3));
      this.costume = roomdarker;
      yield;
    }
    yield* this.startSound("DSGNTonl_Tinnitus (ID 1388)_BSB");
    this.broadcast("PowerDownBlinkAnim");
    if (this.toNumber(this.stage.vars.buildingpower) === 0) {
      yield* this.wait(this.random(50, 75));
    }
    if (!(this.toNumber(this.stage.vars.buildingpower) === 0)) {
      yield* this.wait(this.random(30, 45));
    }
    this.stage.vars.officeresetting = "false";
    yield* this.startSound("zapsplat_nature_thunder_crack_designed_003_31230");
    yield* this.startSound("zapsplat_sound_design_electricity_zap_spark_28906");
    this.costume = roomdark;
    this.broadcast("OH SHIT THE LIGHTS");
    yield* this.wait(0.2);
    for (let i = 0; i < this.random(2, 5); i++) {
      this.costume = roomdarker;
      yield* this.wait(this.random(0.05, 0.3));
      this.costume = roomdark;
      yield;
    }
    this.stage.vars.waitforaction = 0;
    this.stage.vars.buildingpower = 100;
    this.stage.vars.lightpower = 100;
    yield* this.broadcastAndWait("OfficeOnline");
  }

  *whenIReceiveOfficeonline2() {
    this.visible = true;
    yield* this.ambience();
  }

  *whenIReceiveDebug() {
    this.stage.watchers.behind.visible = true;
    this.stage.watchers.buildingpower.visible = true;
    this.stage.watchers.camon.visible = true;
    this.stage.watchers.camval.visible = true;
    this.stage.watchers.debugmode.visible = true;
    this.stage.watchers.lighton.visible = true;
    this.stage.watchers.lightpower.visible = true;
    this.stage.watchers.officeresetting.visible = true;
    this.stage.watchers.randomvardontdeleteorelsethecamerawillnotworkright.visible = true;
    this.costume = "HallDarkDebug";
  }

  *whenIReceiveCam() {
    yield* this.wait(0.2);
    this.visible = false;
  }

  *whenIReceiveCamoff() {
    this.visible = true;
  }

  *whenKeyFPressed() {
    if (
      !(this.toNumber(this.stage.vars.buildingpower) === 0) &&
      this.toNumber(this.stage.vars.waitforaction) === 0
    ) {
      this.stage.vars.waitforaction = 1;
      if (
        this.toString(this.stage.vars.behind) === "false" &&
        this.toString(this.stage.vars.underdesk) === "false"
      ) {
        if (this.toString(this.stage.vars.doorclosed) === "false") {
          yield* this.startSound("doorclose");
          this.stage.vars.doorclosed = "true";
          yield* this.closedcheck("HallDark");
        } else {
          yield* this.startSound("dooropen");
          this.stage.vars.doorclosed = "false";
          yield* this.closedcheck("HallDark");
        }
        this.broadcast("DoorAnim");
      } else {
        if (this.toString(this.stage.vars.underdesk) === "false") {
          if (this.toString(this.stage.vars.ventclosed) === "false") {
            this.stage.vars.ventclosed = "true";
            yield* this.closedcheck("VentDark");
            this.broadcast("ventpressure");
          } else {
            this.stage.vars.ventclosed = "false";
            yield* this.closedcheck("VentDark");
          }
        } else {
          yield* this.closedcheck("DeskDark");
        }
      }
      yield* this.wait(0.5);
      this.stage.vars.waitforaction = 0;
    }
  }

  *closedcheck(ventHall) {
    if (
      (this.toString(this.stage.vars.doorclosed) === "true" ||
        this.toString(this.stage.vars.ventclosed) === "true") &&
      this.toString(this.stage.vars.underdesk) === "false"
    ) {
      if (
        this.stringIncludes(this.toString(ventHall), "Vent") ||
        this.stringIncludes(this.toString(ventHall), "Hall")
      ) {
        this.costume = this.toString(ventHall) + "Closed";
        if (this.stringIncludes(this.toString(ventHall), "Vent")) {
          if (this.toString(this.stage.vars.ventclosed) === "false") {
            this.costume = ventHall;
          }
        }
        if (this.stringIncludes(this.toString(ventHall), "Hall")) {
          if (this.toString(this.stage.vars.doorclosed) === "false") {
            this.costume = ventHall;
          }
        }
        if (this.stringIncludes(this.toString(ventHall), "Desk")) {
          this.costume = ventHall;
        }
      }
    } else {
      this.costume = ventHall;
    }
  }

  *whenIReceiveYoudied() {
    this.visible = false;
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStartgame() {
    this.stage.vars.gamestarted = "true";
    if (this.toNumber(this.stage.vars.Night) === 1) {
      this.broadcast("Openinstructions");
    } else {
      this.broadcast("nightscreen");
      this.broadcast("OfficeOnline");
    }
  }

  *whenIReceiveOfficeonline3() {
    this.stage.vars.waitforaction = 0;
  }

  *whenKeySPressed() {
    if (
      this.toString(this.stage.vars.behind) === "false" &&
      this.toNumber(this.stage.vars.waitforaction) === 0
    ) {
      this.stage.vars.lighton = 0;
      for (let i = 0; i < 4; i++) {
        this.effects.ghost += 25;
        yield;
      }
      if (this.toString(this.stage.vars.underdesk) === "true") {
        this.stage.vars.underdesk = "false";
        yield* this.closedcheck("HallDark");
      } else {
        if (this.toString(this.stage.vars.underdesk) === "false") {
          this.stage.vars.underdesk = "true";
          yield* this.closedcheck("DeskDark");
        }
      }
      yield* this.wait(0.2);
      this.effects.ghost = 0;
      this.stage.vars.lighton = "false";
      yield* this.wait(1);
    }
  }

  *whenKeySpacePressed() {
    if (this.toString(this.stage.vars.underdesk) === "true") {
      this.stage.vars.waitforaction = 1;
      yield* this.startSound("Clang");
      this.costume = "Desk" + "Hit";
      this.x += 10;
      yield* this.wait(0.3);
      this.stage.vars.waitforaction = 0;
      this.costume = "DeskDark";
      if (this.random(1, 4) === 4) {
        this.broadcast("computereset");
      }
    }
  }

  *whenIReceivePoweroff() {
    if (this.toNumber(this.stage.vars.waitforaction) === 0) {
      yield* this.powerdown();
    }
  }

  *powerdown() {
    this.stage.vars.waitforaction = 1;
    this.broadcast("camoff");
    this.broadcast("OfficeOffline");
    this.visible = true;
    this.stage.vars.officeresetting = "true";
    this.stage.vars.doorclosed = "false";
    this.stage.vars.ventclosed = "false";
    this.stopAllSounds();
    /* TODO: Implement stop other scripts in sprite */ null;
    if (this.toString(this.stage.vars.underdesk) === "false") {
      if (this.toString(this.stage.vars.behind) === "false") {
        this.broadcast("DoorAnim");
        yield* this.shutofflight("HallDark", "HallVERYDark");
      }
      if (this.toString(this.stage.vars.behind) === "true") {
        yield* this.shutofflight("VentDark", "VentVERYDark");
      }
    } else {
      yield* this.shutofflight("DeskDark", "DeskVERYDark");
    }
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveAmongusspotchanged() {
    if (this.toNumber(this.stage.vars.amogusSpot) === 5) {
      if (!(this.toString(this.stage.vars.spooky) === "true")) {
        yield* this.startSound("Among Us Vent Sound Effect");
      }
    }
  }

  *whenIReceiveVentpressure() {
    yield* this.wait(5);
    if (this.toString(this.stage.vars.ventclosed) === "true") {
      while (!(this.toString(this.stage.vars.ventclosed) === "false")) {
        this.stage.vars.pressure += 0.8;
        if (
          this.toNumber(this.stage.vars.pressure) === 100 ||
          this.compare(this.stage.vars.pressure, 100) > 0
        ) {
          yield* this.startSound("Bonk");
          this.broadcast("YouDied");
          return;
        }
        yield;
      }
      this.stage.vars.pressure = 0;
    }
  }

  *whenIReceiveNightfinished() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenKeyDPressed() {
    if (this.toNumber(this.stage.vars.waitforaction) === 0) {
      if (
        this.toString(this.stage.vars.behind) === "false" &&
        this.toString(this.stage.vars.camon) === "false" &&
        this.toString(this.stage.vars.underdesk) === "false"
      ) {
        if (this.toString(this.stage.vars.officeresetting) === "false") {
          this.broadcast("maintenancepanel");
          this.stage.vars.waitforaction = 1;
          yield* this.wait(0.5);
          while (!this.keyPressed("d")) {
            yield;
          }
          this.broadcast("maintenancepaneloff");
          this.stage.vars.waitforaction = 0;
        }
      } else {
        null;
      }
      yield* this.wait(0.5);
    }
  }
}

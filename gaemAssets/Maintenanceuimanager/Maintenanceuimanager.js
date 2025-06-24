/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maintenanceuimanager extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Doors", "./Maintenanceuimanager/costumes/Doors.svg", {
        x: 60.601613385707566,
        y: 15.981249999999989,
      }),
      new Costume(
        "DoorsDone",
        "./Maintenanceuimanager/costumes/DoorsDone.svg",
        { x: 60.601613385707566, y: 15.981249999999989 }
      ),
      new Costume("Alarms", "./Maintenanceuimanager/costumes/Alarms.svg", {
        x: 60.601595,
        y: 15.75,
      }),
      new Costume(
        "AlarmsDone",
        "./Maintenanceuimanager/costumes/AlarmsDone.svg",
        { x: 60.601605000000006, y: 15.75 }
      ),
      new Costume(
        "AlarmsPlay",
        "./Maintenanceuimanager/costumes/AlarmsPlay.svg",
        { x: 60.601605000000006, y: 15.75 }
      ),
      new Costume(
        "AlarmsRed",
        "./Maintenanceuimanager/costumes/AlarmsRed.svg",
        { x: 60.601605000000006, y: 15.75 }
      ),
      new Costume("John", "./Maintenanceuimanager/costumes/John.svg", {
        x: 60.60161500000001,
        y: 15.75,
      }),
      new Costume("mom", "./Maintenanceuimanager/costumes/mom.svg", {
        x: 60.60161500000001,
        y: 15.75,
      }),
      new Costume("AC", "./Maintenanceuimanager/costumes/AC.svg", {
        x: 60.60161500000001,
        y: 15.75,
      }),
      new Costume("Wait", "./Maintenanceuimanager/costumes/Wait.svg", {
        x: 60.601605000000006,
        y: 15.75,
      }),
      new Costume("WIP", "./Maintenanceuimanager/costumes/WIP.svg", {
        x: 60.601595,
        y: 15.75,
      }),
      new Costume("Trolled", "./Maintenanceuimanager/costumes/Trolled.svg", {
        x: 60.601585,
        y: 15.75,
      }),
      new Costume("Passcode", "./Maintenanceuimanager/costumes/Passcode.svg", {
        x: 55.74994659423828,
        y: 15.75,
      }),
      new Costume("Back", "./Maintenanceuimanager/costumes/Back.svg", {
        x: 60.60161500000001,
        y: 15.75,
      }),
      new Costume("Numpad", "./Maintenanceuimanager/costumes/Numpad.svg", {
        x: 36.25042028132884,
        y: 35.79715392983326,
      }),
      new Costume("Numpad2", "./Maintenanceuimanager/costumes/Numpad2.svg", {
        x: 36.25041999999999,
        y: 35.79716500000001,
      }),
    ];

    this.sounds = [
      new Sound(
        "Clock Ticking",
        "./Maintenanceuimanager/sounds/Clock Ticking.wav"
      ),
      new Sound("Coin", "./Maintenanceuimanager/sounds/Coin.wav"),
      new Sound("Coin2", "./Maintenanceuimanager/sounds/Coin2.wav"),
      new Sound(
        "danger-alarm-sound-effect-meme",
        "./Maintenanceuimanager/sounds/danger-alarm-sound-effect-meme.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepanelon" },
        this.whenIReceiveMaintenancepanelon
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "menuchange" },
        this.whenIReceiveMenuchange
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepaneloff" },
        this.whenIReceiveMaintenancepaneloff
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "menuchange" },
        this.whenIReceiveMenuchange2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepaneloff" },
        this.whenIReceiveMaintenancepaneloff2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "OfficeOffline" },
        this.whenIReceiveOfficeoffline
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "trolltime" },
        this.whenIReceiveTrolltime
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "trolltime" },
        this.whenIReceiveTrolltime2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "alarmdone" },
        this.whenIReceiveAlarmdone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "doorsdone" },
        this.whenIReceiveDoorsdone
      ),
    ];

    this.vars.clones = 0;
    this.vars.doors = 0;
    this.vars.alarms = 0;
    this.vars.john = 0;
    this.vars.mom = 0;
    this.vars.ac = 0;
    this.vars.trolled = "false";
    this.vars.numpadbuttonpushed = 0;

    this.watchers.numpadbuttonpushed = new Watcher({
      label: "Maintenanceuimanager: numpadbuttonpushed",
      style: "normal",
      visible: true,
      value: () => this.vars.numpadbuttonpushed,
      x: 240,
      y: -134,
    });
  }

  *startAsClone() {
    yield* this.checkbuttons();
    this.effects.clear();
    this.visible = true;
    this.effects.color = 0;
    yield* this.wait(0.05);
    while (!(this.toString(this.stage.vars.menuchanged) === "true")) {
      while (!(this.toString(this.touching("mouse")) === "true")) {
        yield;
      }
      while (!(this.toString(this.mouse.down) === "true")) {
        if (this.toString(this.touching("mouse")) === "true") {
          if (!(this.costume.name === "Passcode")) {
            this.effects.color = 50;
            yield* this.startSound("Clock Ticking");
            while (
              !(
                !(this.toString(this.touching("mouse")) === "true") ||
                this.toString(this.mouse.down) === "true"
              )
            ) {
              yield;
            }
          }
        } else {
          this.effects.color = 0;
          while (!(this.toString(this.touching("mouse")) === "true")) {
            yield;
          }
        }
        yield;
      }
      this.effects.clear();
      yield* this.buttonmenufunction(this.costume.name, "Doors", "DoorMenu");
      yield* this.buttonmenufunction(this.costume.name, "Back", "MainMenu");
      yield* this.buttonspecialfunction(this.costume.name, "Alarms");
      yield* this.buttonspecialfunction(this.costume.name, "Numpad");
      yield;
    }
    this.deleteThisClone();
  }

  *mainmenu() {
    this.stage.vars.menuchanged = "false";
    yield* this.buttonAt("Doors", -150, 50);
    yield* this.buttonAt("Alarms", -150, 25);
    yield* this.buttonAt("John", -150, 0);
    yield* this.buttonAt("mom", -150, -25);
    yield* this.buttonAt("AC", -150, -50);
    yield* this.wait(1);
    this.goto(0, 0);
    this.stage.vars.menu = "MainMenu";
  }

  *whenIReceiveMaintenancepanelon() {
    this.stage.vars.menuon = "true";
    this.broadcast("menuchange");
  }

  *doormenu() {
    this.stage.vars.menuchanged = "false";
    yield* this.buttonAt("Passcode", -150, 50);
    yield* this.buttonAt("Numpad", -150, 0);
    yield* this.buttonAt("Back", -150, -100);
    yield* this.wait(1);
    this.goto(0, 0);
    this.stage.vars.menu = "DoorMenu";
  }

  *whenIReceiveMenuchange() {
    this.stage.vars.menuchanged = "true";
    if (this.toString(this.stage.vars.menu) === "MainMenu") {
      yield* this.mainmenu();
    }
    if (this.toString(this.stage.vars.menu) === "DoorMenu") {
      yield* this.doormenu();
    }
  }

  *whenIReceiveMaintenancepaneloff() {
    this.visible = false;
    this.stage.vars.menuon = "false";
  }

  *whenGreenFlagClicked() {
    this.vars.clones = 0;
    this.visible = false;
    this.vars.numpadbuttonpushed = 0;
    this.vars.doors = 0;
    this.vars.alarms = 0;
    this.vars.john = 0;
    this.vars.mom = 0;
    this.vars.ac = 0;
  }

  *buttonAt(val, x, y) {
    if (this.toString(this.stage.vars.menuon) === "true") {
      this.goto(this.toNumber(x), this.toNumber(y));
      this.costume = val;
      this.createClone();
      this.vars.clones++;
      yield* this.wait(0.2);
    }
  }

  *whenIReceiveMenuchange2() {
    this.deleteThisClone();
  }

  *whenIReceiveMaintenancepaneloff2() {
    this.deleteThisClone();
  }

  *buttonmenufunction(buttoncostume, buttonname, menufullname) {
    if (this.compare(buttoncostume, buttonname) === 0) {
      this.stage.vars.menu = menufullname;
      this.broadcast("menuchange");
      this.deleteThisClone();
    }
  }

  *buttonspecialfunction(buttoncostume, buttonname) {
    if (this.compare(buttoncostume, buttonname) === 0) {
      if (this.toString(buttonname) === "Alarms") {
        this.costume = "Wait";
        yield* this.wait(this.random(5, 10));
        this.costume = "AlarmsPlay";
        yield* this.wait(this.random(1, 3));
        yield* this.playSoundUntilDone("danger-alarm-sound-effect-meme");
        this.costume = "AlarmsDone";
        this.broadcast("alarmdone");
      }
      if (this.toString(buttonname) === "Numpad") {
        this.vars.numpadbuttonpushed++;
        if (this.toNumber(this.vars.numpadbuttonpushed) === 4) {
          this.costume = "Numpad2";
          this.broadcast("doorsdone");
        } else {
          null;
        }
      }
    }
  }

  *taskfinishedcheck(buttoncostume, buttonname) {
    if (this.compare(buttoncostume, buttonname) === 0) {
      if (this.toString(buttonname) === "Doors") {
        if (this.toNumber(this.vars.doors) === 1) {
          yield* this.switchToFinished(buttoncostume);
        }
      }
      if (this.toString(buttonname) === "Alarms") {
        if (this.toNumber(this.vars.alarms) === 1) {
          yield* this.switchToFinished(buttoncostume);
        }
      }
      if (this.toString(buttonname) === "John") {
        if (this.toNumber(this.vars.john) === 1) {
          yield* this.switchToFinished(buttoncostume);
        }
      }
    }
  }

  *checkbuttons() {
    yield* this.taskfinishedcheck(this.costume.name, "Doors");
    yield* this.taskfinishedcheck(this.costume.name, "Alarms");
    yield* this.taskfinishedcheck(this.costume.name, "John");
  }

  *switchToFinished(buttoncostume) {
    this.costume = this.toString(buttoncostume) + "Done";
    while (!(this.toString(this.stage.vars.menuchanged) === "true")) {
      yield;
    }
  }

  *whenIReceiveOfficeoffline() {
    this.broadcast("maintenancepaneloff");
  }

  *whenIReceiveTrolltime() {
    this.vars.trolled = "true";
    yield* this.wait(8);
    this.vars.trolled = "false";
  }

  *whenIReceiveTrolltime2() {
    while (!(this.toString(this.stage.vars.camcrash) === "false")) {
      yield;
    }
    this.vars.trolled = "false";
  }

  *whenIReceiveAlarmdone() {
    this.vars.alarms = 1;
  }

  *whenIReceiveDoorsdone() {
    this.vars.doors = 1;
  }
}

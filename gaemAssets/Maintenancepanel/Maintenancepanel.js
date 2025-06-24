/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Maintenancepanel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "maintenancepanel",
        "./Maintenancepanel/costumes/maintenancepanel.png",
        { x: 320, y: 258 }
      ),
      new Costume(
        "maintenancepanel2",
        "./Maintenancepanel/costumes/maintenancepanel2.png",
        { x: 315, y: -214 }
      ),
      new Costume(
        "maintenancepanel3",
        "./Maintenancepanel/costumes/maintenancepanel3.png",
        { x: 315, y: -145 }
      ),
      new Costume(
        "maintenancepanel4",
        "./Maintenancepanel/costumes/maintenancepanel4.png",
        { x: 315, y: -50 }
      ),
      new Costume(
        "maintenancepanel5",
        "./Maintenancepanel/costumes/maintenancepanel5.png",
        { x: 316, y: 52 }
      ),
      new Costume(
        "maintenancepanel6",
        "./Maintenancepanel/costumes/maintenancepanel6.png",
        { x: 317, y: 143 }
      ),
      new Costume(
        "maintenancepanel7",
        "./Maintenancepanel/costumes/maintenancepanel7.png",
        { x: 318, y: 208 }
      ),
      new Costume(
        "maintenancepanel8",
        "./Maintenancepanel/costumes/maintenancepanel8.png",
        { x: 319, y: 244 }
      ),
      new Costume(
        "maintenancepanel9",
        "./Maintenancepanel/costumes/maintenancepanel9.png",
        { x: 319, y: 256 }
      ),
      new Costume(
        "maintenancepanel10",
        "./Maintenancepanel/costumes/maintenancepanel10.png",
        { x: 319, y: 257 }
      ),
      new Costume(
        "maintenancepanel11",
        "./Maintenancepanel/costumes/maintenancepanel11.png",
        { x: 319, y: 257 }
      ),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepanel" },
        this.whenIReceiveMaintenancepanel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepaneloff" },
        this.whenIReceiveMaintenancepaneloff
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
    ];
  }

  *whenIReceiveMaintenancepanel() {
    this.visible = true;
    this.costume = "maintenancepanel";
    for (let i = 0; i < 10; i++) {
      this.costumeNumber++;
      yield;
    }
    this.broadcast("maintenancepanelon");
  }

  *whenIReceiveMaintenancepaneloff() {
    this.costume = "maintenancepanel11";
    this.stage.vars.randomvardontdeleteorelsethemaitenancepanelwillnotworkright = 11;
    for (let i = 0; i < 9; i++) {
      this.stage.vars
        .randomvardontdeleteorelsethemaitenancepanelwillnotworkright--;
      this.costume =
        "maintenancepanel" +
        this.toString(
          this.stage.vars
            .randomvardontdeleteorelsethemaitenancepanelwillnotworkright
        );
      yield;
    }
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "maintenancepanel11";
    this.stage.vars.randomvardontdeleteorelsethemaitenancepanelwillnotworkright = 11;
    for (let i = 0; i < 9; i++) {
      this.stage.vars
        .randomvardontdeleteorelsethemaitenancepanelwillnotworkright--;
      this.costume =
        "maintenancepanel" +
        this.toString(
          this.stage.vars
            .randomvardontdeleteorelsethemaitenancepanelwillnotworkright
        );
      yield;
    }
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Linuxlogo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("linuxlogo", "./Linuxlogo/costumes/linuxlogo.svg", {
        x: 110.5,
        y: 116,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepanelon" },
        this.whenIReceiveMaintenancepanelon
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "maintenancepaneloff" },
        this.whenIReceiveMaintenancepaneloff
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveMaintenancepanelon() {
    this.visible = true;
  }

  *whenIReceiveMaintenancepaneloff() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}

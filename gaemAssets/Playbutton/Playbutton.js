/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Playbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Playbutton/costumes/costume1.svg", {
        x: 28.25,
        y: 15.981250762939425,
      }),
    ];

    this.sounds = [new Sound("pop", "./Playbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "startgame" },
        this.whenIReceiveStartgame
      ),
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("startgame");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveStartgame() {
    this.visible = false;
  }
}

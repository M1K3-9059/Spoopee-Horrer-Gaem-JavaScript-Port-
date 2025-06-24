/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Newgamebutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Newgamebutton/costumes/costume1.svg", {
        x: 24.54764993935146,
        y: 15.981250762939425,
      }),
    ];

    this.sounds = [new Sound("pop", "./Newgamebutton/sounds/pop.wav")];

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
    this.stage.vars.Night = 1;
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

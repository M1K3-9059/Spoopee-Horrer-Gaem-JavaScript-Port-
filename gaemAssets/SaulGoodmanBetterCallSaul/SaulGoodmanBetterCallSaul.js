/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class SaulGoodmanBetterCallSaul extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "saul-goodman-better-call-saul",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul2",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul2.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul3",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul3.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul4",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul4.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul5",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul5.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul7",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul7.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul8",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul8.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul9",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul9.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul10",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul10.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul11",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul11.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul12",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul12.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul14",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul14.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul13",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul13.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul16",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul16.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul17",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul17.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul18",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul18.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul15",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul15.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul19",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul19.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul20",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul20.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul21",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul21.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul22",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul22.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul23",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul23.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul6",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul6.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul24",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul24.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul25",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul25.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul26",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul26.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul27",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul27.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul28",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul28.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul29",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul29.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul30",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul30.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul31",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul31.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul32",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul32.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul33",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul33.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul34",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul34.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul35",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul35.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul36",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul36.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul37",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul37.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul38",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul38.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul40",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul40.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul39",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul39.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul41",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul41.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul42",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul42.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul43",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul43.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul44",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul44.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul45",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul45.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul46",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul46.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul47",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul47.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul48",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul48.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul49",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul49.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul50",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul50.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul51",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul51.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul52",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul52.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul53",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul53.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul54",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul54.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul55",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul55.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul56",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul56.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul57",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul57.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul58",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul58.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul59",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul59.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul60",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul60.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul61",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul61.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul62",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul62.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul63",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul63.png",
        { x: 249, y: 158 }
      ),
      new Costume(
        "saul-goodman-better-call-saul64",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul64.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul65",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul65.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul66",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul66.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul67",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul67.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul68",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul68.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul69",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul69.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul70",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul70.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul71",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul71.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul72",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul72.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul73",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul73.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul74",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul74.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul75",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul75.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul76",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul76.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul77",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul77.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul78",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul78.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul79",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul79.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul80",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul80.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul81",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul81.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul82",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul82.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul83",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul83.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul84",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul84.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul85",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul85.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul86",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul86.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul87",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul87.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul88",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul88.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul89",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul89.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul90",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul90.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul91",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul91.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul92",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul92.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul93",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul93.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul94",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul94.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul95",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul95.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul96",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul96.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul97",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul97.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul98",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul98.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul99",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul99.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul100",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul100.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul101",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul101.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul102",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul102.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul103",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul103.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul104",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul104.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul105",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul105.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul106",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul106.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul107",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul107.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul108",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul108.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul109",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul109.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "saul-goodman-better-call-saul110",
        "./SaulGoodmanBetterCallSaul/costumes/saul-goodman-better-call-saul110.png",
        { x: 249, y: 158.5 }
      ),
      new Costume(
        "Stalker1",
        "./SaulGoodmanBetterCallSaul/costumes/Stalker1.svg",
        { x: 94.52243926777862, y: 176.39414194041314 }
      ),
      new Costume(
        "Stalker3",
        "./SaulGoodmanBetterCallSaul/costumes/Stalker3.svg",
        { x: 195.17842597597598, y: 186.33179020407692 }
      ),
      new Costume(
        "Stalker4",
        "./SaulGoodmanBetterCallSaul/costumes/Stalker4.svg",
        { x: -10.917669999999987, y: 178.728435 }
      ),
      new Costume(
        "Stalker4alt",
        "./SaulGoodmanBetterCallSaul/costumes/Stalker4alt.svg",
        { x: 398.75844297312784, y: 327.12397613461866 }
      ),
    ];

    this.sounds = [
      new Sound(
        "saul-goodman-better-call-saul",
        "./SaulGoodmanBetterCallSaul/sounds/saul-goodman-better-call-saul.wav"
      ),
      new Sound(
        "saullowquality",
        "./SaulGoodmanBetterCallSaul/sounds/saullowquality.mp3"
      ),
      new Sound(
        "Saul(vineboom",
        "./SaulGoodmanBetterCallSaul/sounds/Saul(vineboom.wav"
      ),
      new Sound(
        "SaulJumpscare",
        "./SaulGoodmanBetterCallSaul/sounds/SaulJumpscare.wav"
      ),
      new Sound(
        "saulinthedistance",
        "./SaulGoodmanBetterCallSaul/sounds/saulinthedistance.mp3"
      ),
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
        { name: "jumscar S'all" },
        this.whenIReceiveJumscarSall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Jumscaroptimizer" },
        this.whenIReceiveJumscaroptimizer
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "saulspotchanged" },
        this.whenIReceiveSaulspotchanged
      ),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.moveBehind(21);
    this.size = 50;
    this.direction = 90;
    this.stage.vars.saulspot = 3;
    this.visible = false;
  }

  *whenIReceiveCamon() {
    if (this.compare(this.stage.vars.saulspot, this.stage.vars.camval) === 0) {
      this.visible = true;
      if (this.toString(this.stage.vars.spooky) === "true") {
        this.costume = "Stalker" + this.toString(this.stage.vars.camval);
        if (this.toNumber(this.stage.vars.camval) === 4) {
          if (this.random(1, 5) === 1) {
            this.costume = "Stalker4alt";
          }
        }
      } else {
        this.costume = "saul-goodman-better-call-saul";
        yield* this.startSound("saullowquality");
        this.audioEffects.volume = 100;
        while (
          !!(
            this.compare(this.stage.vars.saulspot, this.stage.vars.camval) === 0
          )
        ) {
          this.costumeNumber++;
          if (this.costumeNumber === 110) {
            this.costume = "saul-goodman-better-call-saul";
          }
          yield;
        }
        this.audioEffects.volume = 0;
        this.visible = false;
      }
    } else {
      this.visible = false;
      this.audioEffects.volume = 0;
      /* TODO: Implement stop other scripts in sprite */ null;
    }
  }

  *whenIReceiveCamoff() {
    this.visible = false;
    if (!(this.toNumber(this.stage.vars.saulspot) === 5)) {
      this.audioEffects.volume = 0;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveJumscarSall() {
    this.goto(0, 0);
    this.stage.vars.saulspot = 0;
    yield* this.wait(this.random(15, 25));
    if (this.toString(this.stage.vars.camon) === "true") {
      this.broadcast("camoff");
      /* TODO: Implement stop other scripts in sprite */ null;
    }
    this.audioEffects.volume = 100;
    yield* this.startSound("SaulJumpscare");
    this.costume = "saul-goodman-better-call-saul41";
    this.moveAhead();
    this.visible = true;
    for (let i = 0; i < 20; i++) {
      this.size += 20;
      this.direction += 1;
      this.moveAhead(1);
      yield;
    }
    this.broadcast("YouDied");
    this.visible = false;
    yield* this.wait(2);
    /* TODO: Implement stop all */ null;
  }

  *whenIReceiveJumscaroptimizer() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSaulspotchanged() {
    if (this.toNumber(this.stage.vars.saulspot) === 5) {
      this.audioEffects.volume = 0;
      yield* this.startSound("saulinthedistance");
      for (let i = 0; i < 10; i++) {
        this.audioEffects.volume += 10;
        yield;
      }
      while (!!(this.toNumber(this.stage.vars.saulspot) === 5)) {
        this.audioEffects.volume = 100;
        yield;
      }
      for (let i = 0; i < 10; i++) {
        this.audioEffects.volume -= 10;
        yield;
      }
    }
  }
}

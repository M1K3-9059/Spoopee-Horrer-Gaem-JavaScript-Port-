import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import FlashlightVentSoundManager from "./FlashlightVentSoundManager/FlashlightVentSoundManager.js";
import Office from "./Office/Office.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Lightpower from "./Lightpower/Lightpower.js";
import Buildingpower from "./Buildingpower/Buildingpower.js";
import Ventnoise from "./Ventnoise/Ventnoise.js";
import Fnafcam from "./Fnafcam/Fnafcam.js";
import HIM from "./HIM/HIM.js";
import Cammap from "./Cammap/Cammap.js";
import Static from "./Static/Static.js";
import Cam2 from "./Cam2/Cam2.js";
import Scanline from "./Scanline/Scanline.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Cam1 from "./Cam1/Cam1.js";
import Cam4 from "./Cam4/Cam4.js";
import Cam3 from "./Cam3/Cam3.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Menupaper from "./Menupaper/Menupaper.js";
import Spokyfastber from "./Spokyfastber/Spokyfastber.js";
import Amongus from "./Amongus/Amongus.js";
import AiHandler from "./AiHandler/AiHandler.js";
import SaulGoodmanBetterCallSaul from "./SaulGoodmanBetterCallSaul/SaulGoodmanBetterCallSaul.js";
import Youdied from "./Youdied/Youdied.js";
import Titlescreen from "./Titlescreen/Titlescreen.js";
import Playbutton from "./Playbutton/Playbutton.js";
import Dooranim from "./Dooranim/Dooranim.js";
import Settings from "./Settings/Settings.js";
import Trollface from "./Trollface/Trollface.js";
import Jerma from "./Jerma/Jerma.js";
import Nightscreen from "./Nightscreen/Nightscreen.js";
import Newgamebutton from "./Newgamebutton/Newgamebutton.js";
import Nightmanager from "./Nightmanager/Nightmanager.js";
import Time from "./Time/Time.js";
import Spookymodebutton from "./Spookymodebutton/Spookymodebutton.js";
import Maintenancepanel from "./Maintenancepanel/Maintenancepanel.js";
import Maintenanceuimanager from "./Maintenanceuimanager/Maintenanceuimanager.js";
import Linuxlogo from "./Linuxlogo/Linuxlogo.js";
import Lighthum from "./Lighthum/Lighthum.js";
import DigitalGlitch01 from "./DigitalGlitch01/DigitalGlitch01.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  FlashlightVentSoundManager: new FlashlightVentSoundManager({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Office: new Office({
    x: 47,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 125,
    visible: false,
    layerOrder: 1,
  }),
  Sprite2: new Sprite2({
    x: 1,
    y: -139,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Lightpower: new Lightpower({
    x: 186,
    y: 169,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 20,
  }),
  Buildingpower: new Buildingpower({
    x: -193.18473693122903,
    y: 172.11672455311452,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 50,
    visible: false,
    layerOrder: 16,
  }),
  Ventnoise: new Ventnoise({
    x: 22.781943319149043,
    y: 2.117883080419636,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4,
  }),
  Fnafcam: new Fnafcam({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 15,
    size: 125,
    visible: false,
    layerOrder: 6,
  }),
  HIM: new HIM({
    x: -122,
    y: 172,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 36,
  }),
  Cammap: new Cammap({
    x: 179,
    y: -103,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 25,
    visible: false,
    layerOrder: 22,
  }),
  Static: new Static({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 190,
    visible: false,
    layerOrder: 21,
  }),
  Cam2: new Cam2({
    x: 178,
    y: -105,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 32,
  }),
  Scanline: new Scanline({
    x: -1.000016912110567,
    y: -1.0000075446804004,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 15,
  }),
  Sprite1: new Sprite1({
    x: -237,
    y: -179,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7,
  }),
  Cam1: new Cam1({
    x: 162,
    y: -98,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 20,
    visible: false,
    layerOrder: 38,
  }),
  Cam4: new Cam4({
    x: 180,
    y: -103,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 23,
  }),
  Cam3: new Cam3({
    x: 144,
    y: -109,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 39,
  }),
  Sprite3: new Sprite3({
    x: -206,
    y: -137,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 25,
    visible: false,
    layerOrder: 35,
  }),
  Menupaper: new Menupaper({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 65,
    visible: false,
    layerOrder: 26,
  }),
  Spokyfastber: new Spokyfastber({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 16,
    size: 170.61611374407585,
    visible: false,
    layerOrder: 8,
  }),
  Amongus: new Amongus({
    x: -10,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 19,
  }),
  AiHandler: new AiHandler({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10,
  }),
  SaulGoodmanBetterCallSaul: new SaulGoodmanBetterCallSaul({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 55,
    size: 50,
    visible: false,
    layerOrder: 18,
  }),
  Youdied: new Youdied({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 33,
  }),
  Titlescreen: new Titlescreen({
    x: -24,
    y: 2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 11,
  }),
  Playbutton: new Playbutton({
    x: -210,
    y: -2,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14,
  }),
  Dooranim: new Dooranim({
    x: 47,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 9,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  Settings: new Settings({
    x: -211.44470845605906,
    y: -31.63906857623877,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 25,
  }),
  Trollface: new Trollface({
    x: 43,
    y: -18,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17,
  }),
  Jerma: new Jerma({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 13,
    size: 350,
    visible: false,
    layerOrder: 24,
  }),
  Nightscreen: new Nightscreen({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 37,
  }),
  Newgamebutton: new Newgamebutton({
    x: -210,
    y: 29,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 12,
  }),
  Nightmanager: new Nightmanager({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 27,
  }),
  Time: new Time({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 100,
    visible: false,
    layerOrder: 28,
  }),
  Spookymodebutton: new Spookymodebutton({
    x: -210,
    y: -59,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 13,
  }),
  Maintenancepanel: new Maintenancepanel({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 140,
    visible: false,
    layerOrder: 29,
  }),
  Maintenanceuimanager: new Maintenanceuimanager({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 100,
    visible: false,
    layerOrder: 30,
  }),
  Linuxlogo: new Linuxlogo({
    x: -179,
    y: -136,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 15,
    visible: false,
    layerOrder: 31,
  }),
  Lighthum: new Lighthum({
    x: -18.828325815048252,
    y: -50.66907297859361,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3,
  }),
  DigitalGlitch01: new DigitalGlitch01({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 150,
    visible: false,
    layerOrder: 34,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;

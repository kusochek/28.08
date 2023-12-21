import { x, y } from "./components/constants.js";
import Calculator from "./components/module.js";

const calcultar = new Calculator(x, y);
console.log(calcultar.sum());

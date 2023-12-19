import { x, y } from "./components/constants.js";
import Calculator from "./components/module.js";
import axios from "axios";

const calcultar = new Calculator(x, y);
console.log(calcultar.sum());

axios.get('https://65720c1ed61ba6fcc0144a23.mockapi.io/users').then(({ data }) => {
  console.log(data);
});

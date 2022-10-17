import _ from "lodash";
import { add, sub } from "./math";
function component() {
  const root = document.createElement("div");
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  const addElement = document.createElement("div");
  addElement.innerHTML = _.join([
    "Addtition of two numbers, 2+3 = ",
    add(2, 3),
  ]);
  const subElement = document.createElement("div");
  subElement.innerHTML = _.join([
    "Subtraction of two numbers, 2-3 = ",
    sub(2, 3),
  ]);
  root.appendChild(element);
  root.appendChild(addElement);
  root.appendChild(subElement);
  return root;
}

document.body.appendChild(component());

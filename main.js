import "./reset.css";
import "./style.css";

document.querySelector("#item-input5").addEventListener("input", (event) => {
  document.querySelector("#card-number").textContent =
    event.currentTarget.value;
});

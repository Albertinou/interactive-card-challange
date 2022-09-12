import "./reset.css";
import "./style.css";

document.querySelector("#name-imput").addEventListener("input", (event) => {
  document.querySelector("#card-number").textContent =
    event.currentTarget.value;
});

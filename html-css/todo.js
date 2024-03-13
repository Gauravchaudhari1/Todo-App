let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (input.value == "") {
    alert("Enter The Text");
  } else {
    let newElent = document.createElement("ul");
    newElent.innerHTML = `${input.value} <i class="fa-solid fa-trash-can"></i>`;
    text.appendChild(newElent);
    input.value = "";
    newElent.querySelector("i").addEventListener("click", remove);

    function remove() {
      newElent.remove();
    }
  }
}

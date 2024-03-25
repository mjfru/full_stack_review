const form = document.querySelector("#listForm");
const input = document.querySelector("#itemName");
const list = document.querySelector("#items");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(input.value);
  const itemName = input.value;
  const newLI = document.createElement('LI');
  newLI.innerText = itemName;
  // console.log(newLI);
  list.append(newLI);
  input.value = ''
});

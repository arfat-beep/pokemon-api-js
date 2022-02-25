document.getElementById("btn").addEventListener("click", () => {
  const inputField = document.getElementById("search-input");
  const inputNumber = parseInt(inputField.value);
  if (inputNumber <= 898 && inputNumber > 0) {
    inputField.value = "";
    loadData(inputNumber);
  } else {
    alert("you put wrong input please input between 1-898");
  }
});

// declare loadData
let loadData = async (number) => {
  let url = `https://pokeapi.co/api/v2/pokemon/${number}/`;
  res = await fetch(url);
  data = await res.json();
  displayData(data);
};
// displaying Data
const displayData = (data) => {
  let card = document.getElementById("card");
  console.log(data);
  if (data.id < 10) {
    data.id = "00" + data.id;
  } else if (data.id < 100) {
    data.id = "0" + data.id;
  }
  card.textContent = "";
  let url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${data.id}.png`;
  let details = `<img
  src="${url}"
  alt="arfatur Rahman"
/>
<div class="name-details">
  <div>Id: ${data.id}</div><div>Name: ${data.name}</div>
  <div>Type : ${data.types[0].type.name} </div> 
  <div>Moves : ${data.moves.length} </div>
</div>`;
  card.innerHTML = details;
};

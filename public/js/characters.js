$(document).ready(function () {
  const containerCards = document.getElementById('card-deck');
  const modal = document.getElementById('body');
  let imgCard = document.getElementsByTagName('img');
  //  Invocar fetch con la URL, de manera predeterminada, la API de extracción utiliza el método GET
  getFetch();
  function getFetch() {
    let count = 0;
    for (let i = 1; i < 88; i++) {
      const url = `https://swapi.co/api/people/${i}/`;
      fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          console.log(data);
          if (i === 17) {
            return i = 18;
          };
          const characters = `
          <div class="col-sm-6 col-lg-1 p-1">
              <img class="card-img-top card-modal" src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="${data.name}">
          </div>`;
          containerCards.innerHTML += characters;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    }
  };
});

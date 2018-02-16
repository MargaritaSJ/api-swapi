$(document).ready(function () {
  const containerCards = document.getElementById('card-deck');
  const modal = document.getElementById('body');
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
                      /*<button type="button" class="btn btn-primary btn-data" data-toggle="modal" data-target="#exampleModal">' ${data.name} '</button>*/
          const characters = `
          <div class="col-xs-4 col-sm-6 col-lg-1 p-1 characters" data-toggle="modal" data-target=".exampleModal">
            <img class="card-img-top card-modal" src="https://starwars-visualguide.com/assets/img/characters/${i}.jpg" alt="${data.name}" data-number="${i+1}">
          </div>
          <!-- Modal -->
          <div class="modal fade exampleModal" id="exampleModal" tabindex="" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">Información del personaje</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <h6 class="name">Name: ${data.name}</h6>
                  <h6 class="height">Height: ${data.height}</h6>
                  <h6 class="weight">Weight: ${data.weight}</h6>
                  <h6 class="birth">Birthday: ${data.birth_year}</h6>
                  <h6 class="gender">Gender: ${data.gender}</h6>
                  <h6 class="eye_color">Eye color: ${data.eye_color}</h6>
                  <h6 class="homeWorld">Homeworld: ${data.homeworld}</h6>
                </div>
              </div>
            </div>
          `
          ;
          containerCards.innerHTML += characters;
          count++;
        })
        .catch(function (error) {
          console.log(JSON.stringify(`Error ${error}`));
        });
    }
 };


});

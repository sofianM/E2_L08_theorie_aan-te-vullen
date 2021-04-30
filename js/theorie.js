const titel = document.getElementById("titel").innerHTML;
//TODO: "Gary" vervangen door de voornaam in het invoerveld
const voornaam = "Gary";

let div = document.getElementById("divContent");

let eersteAlinea = document.createElement("p");
eersteAlinea.innerHTML = "De titel van deze webpagina is:";
div.appendChild(eersteAlinea);

let tweedeAlinea = document.createElement("p");
tweedeAlinea.innerHTML = titel;
div.appendChild(tweedeAlinea);

let derdeAlinea = document.createElement("p");
derdeAlinea.innerHTML = "De voornaam die je ingaf is: ";
div.appendChild(derdeAlinea);

let laatsteAlinea = document.createElement("p");
laatsteAlinea.innerHTML = voornaam;
div.appendChild(laatsteAlinea);

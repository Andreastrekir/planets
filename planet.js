let planets = ["Earth", "Venus", "Jupiter", "Uranus", "Neptune", "Saturn", "Mars", "Mercury"];

for (let i = 0; i<planets.length; i++){
	let planetName = planets[i]
	let divPlanet = document.createElement("div");
	//planetTxt.style.color = "White";
	divPlanet.classList.add("planet", planetName);
	let planetTxt = document.createTextNode(planetName);
	divPlanet.appendChild(planetTxt);
	let section = document.getElementsByClassName("listPlanets")[0];
	section.appendChild(divPlanet);

}





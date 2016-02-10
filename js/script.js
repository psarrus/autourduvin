function readParameter() {
	console.log(urlParams);
	var indiceBouteille = urlParams.paramIndice;
	var bouteille = liste[indiceBouteille];

	var varTitreAriane = document.getElementById("titre-ariane");
	varTitreAriane.textContent = bouteille.titre;

	var varTitre = document.getElementById("titre");
	varTitre.textContent = bouteille.titre;

	var varMillesime = document.getElementById("millesime");
	varMillesime.textContent = bouteille.millesime;

	var varSol = document.getElementById("sol");
	varSol.textContent = bouteille.sol;

	var varCepages = document.getElementById("cepages");
	varCepages.textContent = bouteille.cepages;

	var varDegres = document.getElementById("degre");
	varDegres.textContent = bouteille.degre;

	var varVignification = document.getElementById("vignification");
	varVignification.textContent = bouteille.vignification;

	var varDegustation = document.getElementById("degustation");
	varDegustation.textContent = bouteille.degustation;

	var varPotentiel = document.getElementById("potentieldegarde");
	varPotentiel.textContent = bouteille.potentieldegarde;

	var varTemperature = document.getElementById("temperatureduservice");
	varTemperature.textContent = bouteille.temperatureduservice;

	var varCulinaire = document.getElementById("accordsculinaires");
	varCulinaire.textContent = bouteille.accordsculinaires;

	var varPrix = document.getElementById("prix");
	varPrix.textContent = bouteille.prix;

	var varImage = document.getElementById("img");
	varImage.src = bouteille.img;
}

function displayArticle() {
	console.log("Hello world!");

	var affectDiv = document.getElementById('balise-catalogue');

	var createUl = document.createElement("ul");
	affectDiv.appendChild(createUl);

	for (var i = 0; i < liste.length; i++) {
		var createLi = document.createElement("li");
		createUl.appendChild(createLi);

		var createLien = document.createElement("a");
		console.log(liste[i].lien)
		createLien.href = liste[i].lien;
		createLi.appendChild(createLien);

		var createImg = document.createElement("img");
		createImg.src = liste[i].img;
		createLien.appendChild(createImg);

		var createTitre = document.createElement("h4");
		createTitre.textContent = liste[i].titre;
		createLien.appendChild(createTitre);

		var createMillesime = document.createElement("p");
		createMillesime.textContent = liste[i].millesime;
		createLien.appendChild(createMillesime);

		var createPrix = document.createElement("p");
		createPrix.textContent = liste[i].prix + "€";
		createLien.appendChild(createPrix);

		for (var y = 0; y <= 5; i++) {
			var createPi = document.createElement("p");
			
		}
	}
}

// <i class="fa fa-star-o"></i>

function plus(){
	// var quantite = document.getElementById("quantity").innerHTML;
	document.getElementById("quantity").value ++;

	// console.log(qte);
}
function moins(){

}

function readParameter() {
	console.log(urlParams);
	var indiceBouteille = urlParams.paramIndice;
	var bouteille = liste[indiceBouteille];

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
	for (var i = 0; i < liste.length; i++) {
		var varNom = document.getElementById("trouNom");
		varNom.textContent = liste[i].titre;
		var varPrix = document.getElementById("trouPrix");
		varPrix.textContent = liste[i].prix;
	}
}
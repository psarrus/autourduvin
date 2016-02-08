function readParameter() {
	console.log("Hello world!");
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
}
	// var indiceStagiare = urlParams.paramIndice;
	// var stagiaire = promo[indiceStagiare];
	// var varNom = document.getElementById("trouNom");
	// varNom.innerHTML = stagiaire.nom;
	// var varDescription = document.getElementById("trouDescription");
	// varDescription.innerHTML = stagiaire.description;
	// var varImage = document.getElementById("trouPhoto");
	// varImage.src = stagiaire.photo;
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

		// for (var y = 0; y <= 5; i++) {
		// 	var createPi = document.createElement("p");
		// 	createLien.appendChild(createPi);
		// }
	}
}
// <i class="fa fa-star-o"></i>
var quantite = 0;
function plus(){
	quantite +=  1
	var quantiteInput = document.getElementById("quantity");
	quantiteInput.innerHTML = quantite ;
}

function moins(){
	if (quantite > 0) {

		quantite -=  1
		var quantiteInput = document.getElementById("quantity");
		quantiteInput.innerHTML = quantite ;
	}
}

var panier = [];
// sessionStorage.setItem("panier",JSON.stringify(panier));

function ajoutPanier() {
	if (sessionStorage.panier != undefined) {
		panier = JSON.parse(sessionStorage.panier);

	}

    var vardesignation = document.getElementById("titre").innerHTML; //recup du produit
    var varprix = document.getElementById("prix").innerHTML; //recup prix du produit
    var varqte = document.getElementById("quantity").innerHTML; //recup quantité du produit

    var nxPdtPanier = {
        designation: vardesignation,
        prix: varprix,
        qte: varqte
    }

    panier.push(nxPdtPanier);
	console.log(panier);
    sessionStorage.setItem("panier",JSON.stringify(panier));
}

function afficherPanier() {

    panier = JSON.parse(sessionStorage.panier);

    var totalPanier="";

    var tablePanier = document.getElementById("idPanier"); //recup de l'element qui correspond au tableau dans pnier.html

        for (var i = 0; i < panier.length; i++) { // pour chaque objet du panier

            var newLigne = document.createElement("tr"); //creation d'une ligne vide
            tablePanier.appendChild(newLigne); //affectation du tr dans table
            newLigne.className = "tr";
			newLigne.id = "tr"+i;

            var produit = document.createElement("td"); //creation d'une colonne vide
            produit.innerHTML = panier[i].designation; //donne la valeur à l'element html
            newLigne.appendChild(produit); //affecte le td dans le tr
            produit.className = "td1";

            var quantite = document.createElement("td"); //creation d'une colonne vide
            quantite.innerHTML = panier[i].qte;
            newLigne.appendChild(quantite);
            quantite.className = "td2";

            var prix = document.createElement("td"); //creation d'une colonne vide
            prix.innerHTML = panier[i].prix + " €";
            newLigne.appendChild(prix);
            prix.className = "td2";

            var totalLigne = document.createElement("td");
            totalLigne.innerHTML = (parseInt(panier[i].qte) * parseFloat(panier[i].prix)) + " €";
            newLigne.appendChild(totalLigne);
            totalLigne.className = "td4";

            var casePoubelle = document.createElement("td");
            // casePoubelle.innerHTML = '<a id="sup" href="#"><i class="fa fa-trash"></i></a>';
            newLigne.appendChild(casePoubelle);
            casePoubelle.className = "td5";
			var poubelle = document.createElement("a");
			poubelle.id = 'sup_'+i;
			poubelle.href = '#';
			casePoubelle.appendChild(poubelle);
			poubelle.innerHTML = '[x]';
			poubelle.addEventListener('click', function (evt){
				var idLigneSuppr = evt.target.id.replace("sup_", "");
				panier.splice(idLigneSuppr, 1);
				document.getElementById("tr"+idLigneSuppr).remove();
				sessionStorage.setItem("panier",JSON.stringify(panier));

			});

            var vartotalligne = parseFloat(totalLigne.innerHTML);
            totalPanier = totalPanier + vartotalligne;
        }
	}

function afficherTotal() {

		if (totalPnier !="") {

			var newLigneTotal = document.createElement("tr"); //creation d'une ligne vide
			tablePanier.appendChild(newLigneTotal); //affectation du tr dans table

			var vide1 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneTotal.appendChild(vide1); //affectation du td dans table
			vide1.className = "td1";
			var vide2 = document.createElement("td"); //creation d'une ligne vide
			vide2.innerHTML ="";
			newLigneTotal.appendChild(vide2); //affectation du td dans table
			vide2.className = "td2";
			var vide3 = document.createElement("td"); //creation d'une ligne vide
			vide3.innerHTML ="A Payer";
			newLigneTotal.appendChild(vide3); //affectation du td dans table
			vide3.className = "td2";
			var totalCde = document.createElement("td"); //creation d'une ligne vide
			totalCde.innerHTML=totalPanier + " €";
			newLigneTotal.appendChild(totalCde); //affectation du td dans table
			totalCde.className = "td4";
			var vide4 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneTotal.appendChild(vide4); //affectation du td dans table
			vide4.className = "td5";
		}
	}

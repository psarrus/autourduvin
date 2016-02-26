function readParameter() {
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
	createUl.className = "liste-article"
	affectDiv.appendChild(createUl);

	for (var i = 0; i < liste.length; i++) {
		var createLi = document.createElement("li");
		createLi.className = "border-article reglage-survol";
		createUl.appendChild(createLi);

		var createLien = document.createElement("a");
		createLien.href = liste[i].lien;
		createLi.appendChild(createLien);

		var createImg = document.createElement("img");
		createImg.src = liste[i].img;
		createImg.className = "redim-image";
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

		var createAvis = document.createElement("p");
		createLien.appendChild(createAvis);

		for (var y = 0; y < 5; y++) {
			var createI = document.createElement("i");
			createI.className = "fa fa-star-o";
			createAvis.appendChild(createI);
		}
	}
}

var quantite = 1;
function plus(){
	quantite +=  1
	var quantiteInput = document.getElementById("quantity");
	quantiteInput.innerHTML = quantite ;
}

function moins(){
	if (quantite > 1) {

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
    sessionStorage.setItem("panier",JSON.stringify(panier));

}

function afficherPanier() {

	var titre = document.getElementById("idTitre");
	var titreH3 = document.createElement("h3");
	titreH3.className = "cache";
	titreH3.id = "panier";
	titreH3.innerHTML = "Votre panier";
	titre.appendChild(titreH3);
	var titreH3vide = document.createElement("h3");
	titreH3vide.className = "affiche";
	titreH3vide.id = "paniervide";
	titreH3vide.innerHTML = "Votre panier est vide";
	titre.appendChild(titreH3vide);

    panier = JSON.parse(sessionStorage.panier);

    var totalPanier = 0;

    var tablePanier = document.getElementById("idPanier"); //recup de l'element qui correspond au tableau dans pnier.html
        for (var i = 0; i < panier.length; i++) { // pour chaque objet du panier

            var newLigne = document.createElement("tr"); //creation d'une ligne vide
            tablePanier.appendChild(newLigne); //affectation du tr dans table
            newLigne.className = "tr data-row";
			newLigne.id = "tr"+i;

            var produit = document.createElement("td"); //creation d'une colonne vide
            newLigne.appendChild(produit); //affecte le td dans le tr
            produit.className = "td1";
				var lienPdt = document.createElement("a");
				produit.appendChild(lienPdt);
				lienPdt.innerHTML = panier[i].designation; //donne la valeur à l'element html
				lienPdt.id = i;
				lienPdt.href = "#";
				// lienPdt.addEventListener('click', function (evt){
				// 	var idLigne= evt.target.id;
				// 	console.log(idLigne);
				// 	readParameter(idLigne);
					// panier.splice(idLigneSuppr, 1);
					// sessionStorage.setItem("panier",JSON.stringify(panier));
					// document.getElementById("idTotal").remove();
					// window.location.reload();
					// });

			var divQte = document.createElement("div");
			newLigne.appendChild(divQte);

				var btnMoins = document.createElement("button");
				divQte.appendChild(btnMoins);
				btnMoins.id = "btnMoins" + i;
				btnMoins.innerHTML = "-";
				btnMoins.className = "btnQte";

				var eltQte = document.createElement("span");
				eltQte.innerHTML = panier[i].qte;
				qteCde = parseInt(eltQte.innerHTML);
				divQte.appendChild(eltQte);
				eltQte.id = "qte" + i;
				eltQte.className = "td2";

				var btnPlus = document.createElement("button");
				divQte.appendChild(btnPlus);
				btnPlus.id = "btnPlus" + i;
				btnPlus.innerHTML = "+";
				btnPlus.className = "btnQte";

				var prix = document.createElement("td"); //creation d'une colonne vide
				prix.innerHTML = panier[i].prix + " €";
				newLigne.appendChild(prix);
				prix.className = "td2";
				prix.id = "prix" + i;

				var totalLigne = document.createElement("td");
				newLigne.appendChild(totalLigne);
				totalLigne.className = "td4";
				totalLigne.id = "tLigne" + i;
				var Q = parseInt(document.getElementById("qte"+i).innerHTML);
				var P = parseInt(document.getElementById("prix"+i).innerHTML);
				document.getElementById(totalLigne.id).innerHTML = (Q * P);
				var vartotalligne = parseFloat(totalLigne.innerHTML);

				btnMoins.addEventListener('click',function (evt) {
					var idModif = evt.target.id.replace("btnMoins","");
					qteCde = panier[idModif].qte;
					if (qteCde > 1) {
						qteCde -=  1;
						panier[idModif].qte = qteCde;
						panier.splice(idModif, 1,(panier[idModif]));
						sessionStorage.setItem("panier",JSON.stringify(panier));
						var idQte = evt.target.id.replace("btnMoins","qte");
						var idPrix = evt.target.id.replace("btnMoins","prix");
						var idTotalLigne = evt.target.id.replace("btnMoins","tLigne");
						document.getElementById(idQte).innerHTML = qteCde;
						var Q = parseInt(document.getElementById(idQte).innerHTML);
						var P = parseFloat(document.getElementById(idPrix).innerHTML);
						var vartotalligne = Q * P;
						document.getElementById(idTotalLigne).innerHTML = vartotalligne;
						afficherTotal(totalPanier);
					}
				});

				btnPlus.addEventListener('click',function(evt) {
					var idModif = evt.target.id.replace("btnPlus","");
					qteCde = parseInt(panier[idModif].qte);
					qteCde +=  1;
					panier[idModif].qte = qteCde;
					panier.splice(idModif, 1,(panier[idModif]));
					sessionStorage.setItem("panier",JSON.stringify(panier));
					var idQte = evt.target.id.replace("btnPlus","qte");
					var idPrix = evt.target.id.replace("btnPlus","prix");
					var idTotalLigne = evt.target.id.replace("btnPlus","tLigne");
					document.getElementById(idQte).innerHTML = qteCde;
					var Q = parseInt(document.getElementById(idQte).innerHTML);
					var P = parseFloat(document.getElementById(idPrix).innerHTML);
					var vartotalligne = Q * P;
					document.getElementById(idTotalLigne).innerHTML = vartotalligne;
					afficherTotal(totalPanier);
				});

            var casePoubelle = document.createElement("td");
            newLigne.appendChild(casePoubelle);
            casePoubelle.className = "td5";
			var poubelle = document.createElement("a");
			poubelle.id = 'sup_'+i;
			poubelle.href = '#';
			poubelle.title = "Supprimer";
			casePoubelle.appendChild(poubelle);
			poubelle.innerHTML = 'X';
			poubelle.addEventListener('click', function (evt){
				var idLigneSuppr = evt.target.id.replace("sup_", "");
				panier.splice(idLigneSuppr, 1);
				sessionStorage.setItem("panier",JSON.stringify(panier));
				document.getElementById("tr"+idLigneSuppr).remove();
				afficherTotal(totalPanier);
				});
			}

			var newLigneTTC = document.createElement("tr");
			newLigneTTC.id = "ligneTTC"
			tablePanier.appendChild(newLigneTTC); //affectation du tr dans table

			var vide1 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneTTC.appendChild(vide1); //affectation du td dans table
			vide1.className = "td1";
			var vide2 = document.createElement("td"); //creation d'une ligne vide
			vide2.innerHTML ="";
			newLigneTTC.appendChild(vide2); //affectation du td dans table
			vide2.className = "td2";
			var vide3 = document.createElement("td"); //creation d'une ligne vide
			vide3.innerHTML ="A payer TTC";
			newLigneTTC.appendChild(vide3); //affectation du td dans table
			vide3.className = "td2";
			var totalCde = document.createElement("td"); //creation d'une ligne vide
			totalCde.id ="idttc";
			newLigneTTC.appendChild(totalCde); //affectation du td dans table
			totalCde.className = "td4";
			var vide4 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneTTC.appendChild(vide4); //affectation du td dans table
			vide4.className = "td5";

			var newLigneTVA = document.createElement("tr");
			newLigneTVA.id = "ligneTVA";
			tablePanier.appendChild(newLigneTVA); //affectation du tr dans table

			var vide1 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneTVA.appendChild(vide1); //affectation du td dans table
			vide1.className = "td1";
			var vide2 = document.createElement("td"); //creation d'une ligne vide
			vide2.innerHTML ="";
			newLigneTVA.appendChild(vide2); //affectation du td dans table
			vide2.className = "td2";
			var vide3 = document.createElement("td"); //creation d'une ligne vide
			vide3.innerHTML ="TVA";
			newLigneTVA.appendChild(vide3); //affectation du td dans table
			vide3.className = "td2";
			var totalTVA = document.createElement("td"); //creation d'une ligne vide
			totalTVA.id ="idtva";
			newLigneTVA.appendChild(totalTVA); //affectation du td dans table
			totalTVA.className = "td4";
			var vide4 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneTVA.appendChild(vide4); //affectation du td dans table
			vide4.className = "td5";

			var newLigneHT = document.createElement("tr");
			newLigneHT.id = "ligneHT"
			tablePanier.appendChild(newLigneHT); //affectation du tr dans table

			var vide1 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneHT.appendChild(vide1); //affectation du td dans table
			vide1.className = "td1";
			var vide2 = document.createElement("td"); //creation d'une ligne vide
			vide2.innerHTML ="";
			newLigneHT.appendChild(vide2); //affectation du td dans table
			vide2.className = "td2";
			var vide3 = document.createElement("td"); //creation d'une ligne vide
			vide3.innerHTML ="HT";
			newLigneHT.appendChild(vide3); //affectation du td dans table
			vide3.className = "td2";
			var totalHT = document.createElement("td"); //creation d'une ligne vide
			totalHT.id ="idht";
			newLigneHT.appendChild(totalHT); //affectation du td dans table
			totalHT.className = "td4";
			var vide4 = document.createElement("td"); //creation d'une cellule vide
			vide1.innerHTML ="";
			newLigneHT.appendChild(vide4); //affectation du td dans table
			vide4.className = "td5";

			afficherTotal(totalPanier);

}

function afficherTotal(totalPanier) {

	var finaliser = document.getElementById('btn-finaliser');

	var tPanier = document.getElementById("idPanier");
	for (var i = 0; i < panier.length; i++) {
		var ligne = parseFloat(document.getElementById("tLigne"+i).innerHTML);
		totalPanier += ligne;
	}
	var ligneTTC = document.getElementById("ligneTTC");
	console.log(ligneTTC);
	document.getElementById("idttc").innerHTML = Math.round(totalPanier*100)/100;
	var ht = totalPanier / 1.20;
	var tva = totalPanier - ht;
	var ligneTVA = document.getElementById("ligneTVA");
	console.log(ligneTVA);
	document.getElementById("idtva").innerHTML = Math.round(tva*100)/100;
	var ligneHT = document.getElementById("ligneHT");
	console.log(ligneHT);
	document.getElementById("idht").innerHTML = Math.round(ht*100)/100;

	if (totalPanier != 0) {
		var titreh3 = document.getElementById('panier');
		var titreh3vide = document.getElementById('paniervide');
		titreh3.className = "affiche";
		titreh3vide.className = "cache";
		finaliser.className = "boutton-achat affiche";
		}
		else
		{
		var titreh3 = document.getElementById('panier');
		var titreh3vide = document.getElementById('paniervide');
		titreh3.className = "cache";
		titreh3vide.className = "affiche";
		finaliser.className = "cache";
		}
}

function generatorNotice() {
	for (var i = 0; i < listeAvis.length; i++) {
		var divBase = document.getElementById('gener-avis');

		var divUnique = document.createElement("div");
		divBase.appendChild(divUnique);
		divUnique.className = "style-divunique";

		var elementH4 = document.createElement("h4");
		divUnique.appendChild(elementH4);
		elementH4.textContent = listeAvis[i].nom;

		for (var y = 0; y < 5; y++) {
			var createI = document.createElement("i");
			createI.className = "fa fa-star-o";
			divUnique.appendChild(createI);
		}

		var elementP = document.createElement("p");
		divUnique.appendChild(elementP);
		elementP.textContent = listeAvis[i].avis;
	}
}

generatorNotice();

});

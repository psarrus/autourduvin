var ligneCommande = [];

function ajoutPanier() {
    ligneCommande = JSON.parse(sessionStorage.panier);

    var vardesignation = document.getElementById("titre").innerHTML; //recup du produit
    var varprix = document.getElementById("prix").innerHTML; //recup prix du produit
    var varqte = document.getElementById("quantity").innerHTML; //recup quantité du produit

        var nxPdtPanier = {
            designation: vardesignation,
            prix: varprix,
            qte: varqte
        }

    ligneCommande.push(nxPdtPanier);
    sessionStorage.setItem("panier",JSON.stringify(ligneCommande));
}

function afficherPanier() {
    panier = JSON.parse(sessionStorage.panier);
    var totalPanier=0;

    var tablePanier = document.getElementById("panier"); //recup de l'element qui correspond au tableau dans pnier.html

        for (var i = 0; i < panier.length; i++) { // pour chaque objet du panier

            var newLigne = document.createElement("tr"); //creation d'une ligne vide
            tablePanier.appendChild(newLigne); //affectation du tr dans table
            tablePanier.className = "tr";

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

            var suppr = document.createElement("td");
            suppr.innerHTML = '<a id="sup" href="#"><i class="fa fa-trash"></i></a>';
            newLigne.appendChild(suppr);
            suppr.className = "td5";

            var vartotalligne = parseFloat(totalLigne.innerHTML);
            totalPanier = totalPanier + vartotalligne;
        }

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

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

    var tablePanier = document.getElementById("panier"); //recup de l'element qui correspond au tableau dans pnier.html

        for (var i = 0; i < panier.length; i++) { // pour chaque objet du panier

            var newLigne = document.createElement("tr"); //creation d'une ligne vide
            tablePanier.appendChild(newLigne); //affectation du tr dans table

            var produit = document.createElement("td"); //creation d'une colonne vide
            produit.innerHTML = panier[i].designation; //donne la valeur à l'element html
            newLigne.appendChild(produit); //affecte le td dans le tr

            var quantite = document.createElement("td"); //creation d'une colonne vide
            quantite.innerHTML = panier[i].qte;
            newLigne.appendChild(quantite);

            var prix = document.createElement("td"); //creation d'une colonne vide
            prix.innerHTML = panier[i].prix;
            newLigne.appendChild(prix);

            var totalLigne = document.createElement("td");
            totalLigne.innerHTML = parseInt(panier[i].qte) * parseFloat(panier[i].prix);
            newLigne.appendChild(totalLigne);

            var vartotal = total + totalLigne
        }

        var newLigne = document.createElement("tr"); //creation d'une ligne vide
        tablePanier.appendChild(newLigne); //affectation du tr dans table

        var vide = document.createElement("td"); //creation d'une ligne vide
        newline.appendChild(vide); //affectation du td dans table
        var vide = document.createElement("td"); //creation d'une ligne vide
        newline.appendChild(vide); //affectation du td dans table
        var vide = document.createElement("td"); //creation d'une ligne vide
        newline.appendChild(vide); //affectation du td dans table
        var total = document.createElement("td"); //creation d'une ligne vide
        newline.innerHTML=vartotal
        tablePanier.appendChild(total); //affectation du td dans table


    }

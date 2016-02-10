var ligneCommande = [];

function ajoutPanier() {

    var vardesignation = document.getElementById("titre").value; //recup du produit
    var varprix = document.getElementById("prix").value; //recup prix du produit
    var varqte = document.getElementById("quantity").value; //recup quantité du produit

    var nxPdtPanier = {
        designation: vardesignation,
        prix: varprix,
        qte: varqte
    }

    panier.push(nxPdtPanier);
    sessionStorage.setItem("panier",JSON.stringify(ligneCommande));
}

function afficherPanier() {
    panier = JSON.parse(sessionStorage.newPanier);

    var tablePanier = document.getElementById("panier"); //recup de l'element qui correspond au tableau
    for (var i = 0; i < panier.length; i++) {
        var newLigne = document.createElement("tr"); //creation d'une ligne vide
        var eltLigne = document.createElement("td"); //creation d'une colonne vide
        eltLigne.innerHTML = panier[i].designation;
        newLigne.appendChild(eltLigne);
        var eltLigne = document.createElement("td"); //creation d'une colonne vide
        eltLigne.innerHTML = panier[i].prix;
        newLigne.appendChild(eltLigne);
        var eltLigne = document.createElement("td"); //creation d'une colonne vide
        eltLigne.innerHTML = panier[i].qte;
        newLigne.appendChild(eltLigne);
    }

    }

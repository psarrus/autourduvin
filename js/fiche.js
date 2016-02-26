$(document).ready(function() {

	var quantite = 0;

	if (sessionStorage.panier != undefined) {
		panier = JSON.parse(sessionStorage.panier);
		for (var i = 0; i < panier.length; i++) {
			if (panier[i].idCatalogue == urlParams.paramIndice) {
				quantite += parseInt(panier[i].qte)
				$("#quantity").html(quantite)
			}
		}
	}
	if (quantite == 0) {
		quantite = 1
	}

    function readParameter() {
        var indiceBouteille = urlParams.paramIndice;
        var bouteille = liste[indiceBouteille];

        $("#titre-ariane").html(bouteille.titre);
        $("#titre").html(bouteille.titre);
        $("#millesime").html(bouteille.millesime);
        $("#sol").html(bouteille.sol);
        $("#cepages").html(bouteille.cepages);
        $("#degre").html(bouteille.degre);
        $("#vignification").html(bouteille.vignification);
        $("#degustation").html(bouteille.degustation);
        $("#potentieldegarde").html(bouteille.potentieldegarde);
        $("#temperatureduservice").html(bouteille.temperatureduservice);
        $("#accordsculinaires").html(bouteille.accordsculinaires);
        $("#prix").html(bouteille.prix);
        $("#img").attr("src", bouteille.img);
    }

    readParameter();

    $("#plus").click(function plus() {
        quantite += 1;
        $("#quantity").html(quantite);
    })

    $("#moins").click(function moins() {
        if (quantite > 1) {
            quantite -= 1;
            $("#quantity").html(quantite);
        }
    })

    var panier = [];

    $("#ajoutPanier").click(function ajoutPanier() {
		if (sessionStorage.panier != undefined) {
			panier = JSON.parse(sessionStorage.panier);
		}
        var vardesignation = $("#titre").html(); //recup du produit
        var varprix = $("#prix").html(); //recup prix du produit
        var varqte = $("#quantity").html(); //recup quantité du produit

        var nxPdtPanier = {
            idCatalogue: urlParams.paramIndice,
            designation: vardesignation,
            prix: varprix,
            qte: varqte
        }

        panier.push(nxPdtPanier);
        sessionStorage.setItem("panier", JSON.stringify(panier));

    })


});

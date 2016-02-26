$(document).ready(function() {

    function afficherPanier() {

        var titre = $("#idTitre");

        panier = JSON.parse(sessionStorage.panier);

        $("<h3 id='titrePanier'>").html("Votre panier").appendTo(titre).hide();
        $("<h3 id='titrePanierVide'>").html("Votre panier est vide").appendTo(titre).hide();

        var totalPanier = 0;

        var tablePanier = $("#idPanier");
        for (var i = 0; i < panier.length; i++) { // pour chaque objet du panier

            var newLigne = $("<tr id='tr" + i + "' class='tr data-row'>").appendTo(tablePanier);
			var td = $("<td class='td1'>").appendTo(newLigne);
			td.append($("<a>").attr("href", "/fiche.html?paramIndice="+panier[i].idCatalogue).html(panier[i].designation))

            var divQte = $("<td>").appendTo(newLigne);

            var btnMoins = $("<button id='btnMoins" + i + "' class='btnQte'>").html("-").appendTo(divQte);
            var eltQte = $("<span id='qte" + i + "' class='td2'>").html(panier[i].qte).appendTo(divQte);
            qteCde = parseInt(eltQte.html());

            var btnPlus = $("<button id='btnPlus" + i + "' class='btnQte'>").html("+").appendTo(divQte);
            var prix = $("<td id='prix" + i + "' class='td2'>").html(panier[i].prix).appendTo(newLigne);

            var Q = parseInt(eltQte.html());
            var P = parseInt(prix.html());

            var totalLigne = $("<td id='tLigne" + i + "' class='td4'>").html(Q * P).appendTo(newLigne);

            btnMoins.click(function() {
                var idModif = $(this).attr("id").replace("btnMoins", "");
                qteCde = parseInt(panier[idModif].qte);
                if (qteCde > 1) {
                    qteCde -= 1
                    panier[idModif].qte = qteCde;
                    sessionStorage.setItem("panier", JSON.stringify(panier));
                    $("#qte" + idModif).html(qteCde);
                    var vartotalligne = qteCde * parseFloat($("#prix" + idModif).html());
                    $("#tLigne" + idModif).html(vartotalligne);
                }
				afficherTotal(totalPanier);
            });

            btnPlus.click(function() {
                var idModif = $(this).attr("id").replace("btnPlus", "");
				qteCde = parseInt(panier[idModif].qte);
                qteCde += 1
                panier[idModif].qte = qteCde;
                sessionStorage.setItem("panier", JSON.stringify(panier));
                $("#qte" + idModif).html(qteCde);
                var vartotalligne = qteCde * parseFloat($("#prix" + idModif).html());
                $("#tLigne" + idModif).html(vartotalligne);

				afficherTotal(totalPanier);
            });

            var casePoubelle = $("<td class='td5'>").appendTo(newLigne);
            var poubelle = $("<a id='sup_" + i + "' title='Supprimer'>").attr("href", "#").html("X").appendTo(casePoubelle);;
            $(poubelle).click(function() {
                var idLigneSuppr = $(this).attr("id").replace("sup_", "");
                panier.splice(idLigneSuppr, 1);
                sessionStorage.setItem("panier", JSON.stringify(panier));
                $("#tr" + idLigneSuppr).remove();
                afficherTotal(totalPanier);
            });
        }

        var newLigneHT = $("<tr id='ligneHT'>").appendTo(tablePanier);
        $("<td class='td1'>").appendTo(newLigneHT);
        $("<td class='td2'>").appendTo(newLigneHT);
        $("<td class='td2'>").html("HT").appendTo(newLigneHT);
        $("<td id='idht' class='td4'>").appendTo(newLigneHT);
        $("<td class='td5'>").appendTo(newLigneHT);

        var newLigneTVA = $("<tr id='ligneTVA'>").appendTo(tablePanier);
        $("<td class='td1'>").appendTo(newLigneTVA);
        $("<td class='td2'>").appendTo(newLigneTVA);
        $("<td class='td2'>").html("TVA").appendTo(newLigneTVA);
        $("<td id='idtva' class='td4'>").appendTo(newLigneTVA);
        $("<td class='td5'>").appendTo(newLigneTVA);

        var newLigneTTC = $("<tr id='ligneTTC'>").appendTo(tablePanier);
        $("<td class='td1'>").appendTo(newLigneTTC);
        $("<td class='td2'>").appendTo(newLigneTTC);
        $("<td class='td2'>").html("TTC").appendTo(newLigneTTC);
        $("<td id='idttc' class='td4'>").appendTo(newLigneTTC);
        $("<td class='td5'>").appendTo(newLigneTTC);

        afficherTotal(totalPanier);


    }
    afficherPanier();

    function afficherTotal(totalPanier) {
        var finaliser = $('#btn-finaliser');
        var tPanier = $("#idPanier");
		var totalPanier = 0;
        for (var i = 0; i < panier.length; i++) {
            var ligne = parseFloat($("#tLigne" + i).html());
			console.log(ligne);
            totalPanier += Math.round(ligne * 100) / 100;
        }
        var ht = Math.round(totalPanier / 1.20);
        $("#idht").html((ht * 100) / 100);
        var tva = Math.round(ht * 0.20);
        $("#idtva").html((tva * 100) / 100);
        $("#idttc").html(totalPanier);

        if (panier.length > 0) {
            $("#titrePanier").show();
            $("#titrePanierVide").hide();
            finaliser.show()
        } else {
            $("#titrePanier").hide();
            $("#titrePanierVide").show();
			finaliser.hide()
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

    // generatorNotice();
});

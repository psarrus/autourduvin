$(document).ready(function(){

function displayArticle() {
	console.log("Affichage du catalogue");

	var affectDiv = $('#balise-catalogue');
	var createUl = $("<ul class='liste-article'>").appendTo(affectDiv);

	for (var i = 0; i < liste.length; i++) {
		var createLi = $("<li class='border-article reglage-survol'>").appendTo(createUl);

		var createLien = $("<a>").attr("href", liste[i].lien).appendTo(createLi);

		$("<img class='redim-image'>").attr("src",liste[i].img).appendTo(createLien);
		$("<h4>").html(liste[i].titre).appendTo(createLien);
		$("<p>").html(liste[i].millesime).appendTo(createLien);
		$("<p>").html(liste[i].prix + "€").appendTo(createLien);

		var createAvis = $("<p>").appendTo(createLi);
		for (var y = 0; y < 5; y++) {
			$("<i class='fa fa-star-o'>").appendTo(createAvis);
		}
	}
}

displayArticle();

});

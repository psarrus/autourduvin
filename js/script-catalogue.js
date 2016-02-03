var article = {
	nom:"Vin d'Alsace",
	description:"Un vin d'exeption et rare!",
	prix:14.99,
}

var article1 = {
	nom:"Cote du Rhone",
	description:"Le meilleur des meilleurs!",
	prix:9.99,
}

var art = [article, article1];

function displayArticle() {
	console.log("Hello world!");
	var nameArticle = document.getElementById("nom");
	nameArticle.textContent = article.nom;
	var nameDescription = document.getElementById("description");
	nameDescription.textContent = article.description;
	var namePrix = document.getElementById("prix");
	namePrix.textContent = article.prix;
}

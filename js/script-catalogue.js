var article = {
	nom:"Vin d'Alsace",
}

function displayArticle() {
	console.log("Hello world!");
	var nameArticle = document.getElementById("nom");
	article.nom.innerHTML = nameArticle;
}
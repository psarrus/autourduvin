function displayArticle() {
	console.log("Hello world!");
	var photoBouteille = document.getElementById('trouPhoto');
	photoBouteille.src = article01.photo;
	var nomBouteille = document.getElementById('trouNom');
	nomBouteille.textContent = article01.nom;
}

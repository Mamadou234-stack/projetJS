// Créer une instance de XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Ouvrir la requête GET
xhr.open('GET', url, true);
xhr.responseType = 'json';

// Définir ce qui se passe quand la réponse est chargée avec succès
xhr.onload = function() {
  if (xhr.status === 200) {
    var articles = xhr.response.articles; // Accéder aux articles dans la réponse JSON
    var articlesDiv = document.getElementById('articles');
    
    articles.forEach(function(article) {
      // Créer un div pour chaque article
      var articleDiv = document.createElement('div');
      articleDiv.classList.add('article');

      // Ajouter le titre de l'article
      var title = document.createElement('h2');
      title.textContent = article.title;

      // Ajouter la description de l'article
      var description = document.createElement('p');
      description.textContent = article.description;

      // Ajouter le sous-titre "Moyens d'atteindre"
      var waysHeader = document.createElement('h3');
      waysHeader.textContent = 'Moyens d\'atteindre :';

      // Créer une liste des moyens d'atteindre les objectifs
      var waysList = document.createElement('ul');
      article.ways_to_achieve.forEach(function(way) {
        var listItem = document.createElement('li');
        listItem.textContent = way;
        waysList.appendChild(listItem);
      });

      // Ajouter le sous-titre "Avantages"
      var benefitsHeader = document.createElement('h3');
      benefitsHeader.textContent = 'Avantages :';

      // Créer une liste des avantages
      var benefitsList = document.createElement('ul');
      article.benefits.forEach(function(benefit) {
        var listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
      });

      // Ajouter les éléments créés à l'élément principal
      articleDiv.appendChild(title);
      articleDiv.appendChild(description);
      articleDiv.appendChild(waysHeader);
      articleDiv.appendChild(waysList);
      articleDiv.appendChild(benefitsHeader);
      articleDiv.appendChild(benefitsList);

      // Ajouter l'article au conteneur principal
      articlesDiv.appendChild(articleDiv);
    });
  } else {
    // Gestion des erreurs si la requête échoue
    console.error('Erreur de chargement des articles :', xhr.status);
  }
};

// Gérer les erreurs de la requête
xhr.onerror = function() {
  console.error('Erreur réseau ou problème de connexion.');
};

// Envoyer la requête
xhr.send();
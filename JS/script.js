function couleurDifficulte() // Change la couleur de la difficulte en fonction du string 
{
	var difficulte = document.getElementById("difficulte").innerHTML; // récupération du string
	var changementCouleur;
	
	if(difficulte == "Moyenne") // affichage du 2e cercle en orange pour la difficulté moyenne
	{
		changementCouleur = document.querySelector(".cercle:nth-child(2)");
		changementCouleur.style.background = "orange";
	}
	else if(difficulte == "Difficile") // affichage du 2e cercle en orange et le 3e en rouge pour la difficulté difficile
	{
		changementCouleur = document.querySelector(".cercle:nth-child(2)");
		changementCouleur.style.background = "orange";
		changementCouleur = document.querySelector(".cercle:nth-child(3)");
		changementCouleur.style.background = "red";
	}
}



// Calcul des ingrédients
function plusNum() // Ajout d'un nombre avec le bouton +
{
	var nombre = document.getElementById("nbPersonne").value; // récupération du nombre actuel de personne
	if (nombre < 100)
	{
		document.getElementById("plus").onclick = nombre++; // ajoute 1 personne
		var remplace = document.getElementById("nbPersonne"); // se positionne sur l'input du nombre de personne et change la valeur du value
		var valeur = document.createAttribute("value");
		valeur.value = nombre;
		remplace.setAttributeNode(valeur);
		document.getElementById("plus").addEventListener("click", plusNum);
	}
	calculIngredients();
}


function moinsNum() // Soustraction d'un nombre avec le bouton -
{
	var nombre = document.getElementById("nbPersonne").value; // récupération du nombre actuel de personne
	if (nombre>1)
	{
		document.getElementById("moins").onclick = nombre--; // soustrait 1 personne
		var remplace = document.getElementById("nbPersonne"); // se positionne sur l'input du nombre de personne et change la valeur du value
		var valeur = document.createAttribute("value");
		valeur.value = nombre;
		remplace.setAttributeNode(valeur);
		document.getElementById("moins").addEventListener("click", moinsNum);
	}
	calculIngredients();
}


function calculIngredients()
{
	var nombrePersonne = document.getElementById("nbPersonne").value; // récupération de nouveau nombre de personne
	const nombrePersonneInitial = localStorage.getItem("nbPersIni"); // Nombre de personne initialement prévu pour la recette
	var nombreIngredientsInitial; // Nombre d'ingrédient prévu initialement pour un certain nombre de personne
	var tailleListeIngredient = document.querySelectorAll(".nombreIngredient"); // récupération du numéro du nombre d'ingrédient à modififer
	var nombreIngredientsPlusieursPersonne = 0; // Nombre d'ingrédient nécessaire pour le nouveau nombre de personne
	
	for(let i=0; i<=tailleListeIngredient.length-1; i++)
	{
		nombreIngredientsInitial = localStorage.getItem("nbIngre["+i+"]"); // on récupère dans l'ordre tour par tour les nombres d'ingrédients de base
		nombreIngredientsPlusieursPersonne = (nombrePersonne*nombreIngredientsInitial)/nombrePersonneInitial; // calcul du nouveau nombre d'ingrédient
		nombreIngredientsPlusieursPersonne = Math.round(nombreIngredientsPlusieursPersonne*10)/10; // on arrondie à 1 chiffres après la virgule
		tailleListeIngredient[i].innerHTML = nombreIngredientsPlusieursPersonne; // on affiche le nouveau nombre d'ingrédients
	}
}


function recupIngredient()
{
	const nombreIngredientsInitial = document.querySelectorAll(".nombreIngredient"); // récupère la liste du nombre d'ingrédient de base
	for(let i=0; i<=nombreIngredientsInitial.length-1; i++)
	{
		localStorage.setItem("nbIngre["+i+"]", nombreIngredientsInitial[i].innerHTML); // Stock les valeurs une par une
	}
	
}

function recupNbPersonneInitial()
{
	const nbPersonneInitial = document.getElementById("nbPersonne").value; // récupère le nombre de base sur la recette
	localStorage.setItem("nbPersIni", nbPersonneInitial); // Stock ce nombre de personne
}


var theme = (localStorage.getItem("sombre")=='true');
window.addEventListener("DOMContentLoaded", changementTheme);
// Mode sombre
function changementTheme()
{
    theme=!theme;  
    if(theme)
    {
        // définition de nouvelles propriétés
        document.documentElement.style.setProperty('--ecritureNav', '#ffb84d'); //#ff5900
        document.documentElement.style.setProperty('--couleurFond', '#4a4848');
        document.documentElement.style.setProperty('--backgroundBloc', '#4a4848');
        document.documentElement.style.setProperty('--couleurContact', '#a7a7a5');
        document.documentElement.style.setProperty('--couleurMatérielPair', '#a7a7a5');
        document.documentElement.style.setProperty('--couleurMatérielImpair', '#8d8d8b');
        document.documentElement.style.setProperty('--couleurTraits', '#ff6600');
        document.documentElement.style.setProperty('--couleurIcones', 'white');
       	document.querySelector(".fa-sun").style.display = "block"; // changement de l'icone du thème
       	document.querySelector(".fa-moon").style.display = "none";
    }
    else
    {
        // définition de nouvelles propriétés
        document.documentElement.style.setProperty('--ecritureNav', '#262626');
        document.documentElement.style.setProperty('--couleurFond', 'rgb(253, 223, 186)');
        document.documentElement.style.setProperty('--backgroundBloc', 'antiquewhite');
        document.documentElement.style.setProperty('--couleurContact', 'rgb(253, 223, 186)');
        document.documentElement.style.setProperty('--couleurMatérielPair', '#fde5b4');
        document.documentElement.style.setProperty('--couleurMatérielImpair', '#fcdc9c');
        document.documentElement.style.setProperty('--couleurTraits', 'black');
        document.documentElement.style.setProperty('--couleurIcones', 'black');
        document.querySelector(".fa-sun").style.display = "none"; // changement de l'icone du thème
       	document.querySelector(".fa-moon").style.display = "block";
    }
    localStorage.setItem("sombre", !theme); 
}




// fleche pour remonter la page
function remontePage()
{
	const btn = document.querySelector('.bouton');
	btn.addEventListener('click', () => {
	    window.scrollTo({
	        top: 0,
	        left: 0,
	        behavior: "smooth"
	    });
	});
}
window.addEventListener("DOMContentLoaded", remontePage);

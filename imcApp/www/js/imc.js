function task() {
	var poids = document.getElementById('poids');
	var taille = document.getElementById('taille');

	var imc= (poids.value/(taille.value * taille.value));

	if (imc<16.5) 
	{
		resultat.innerHTML= "dénutrition ou anorexie";
	}
	else if (imc>=16.5 && imc<18.5)  
	{
		resultat.innerHTML= "Insuffisance pondérale ou maigreur";
	}
	else if (imc>=18.5 && imc<25) 
	{
		resultat.innerHTML= "Corpulence normale";
	}
	else if (imc>=25 && imc<30) 
	{
		resultat.innerHTML= "Surpoids";
	}
	else if (imc>=30 && imc<35)
	{
		resultat.innerHTML= "Obésité modérée";
	}
	else if(imc>=35 && imc<=40)
	{
		resultat.innerHTML= "Obésité sévère";
	}
	else {
		resultat.innerHTML= "Obésité morbide ou massive";
	}

}
	
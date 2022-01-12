function recetaoneshow(){
	let receta = document.querySelector(".recetauno");
	receta.style.display = "block";
}

function recetaoneshadow(){
	let receta = document.querySelector(".recetauno");
	receta.style.display = "none";
}

function recetatwoshow(){
	let receta = document.querySelector(".recetados");
	receta.style.display = "block";
}

function recetatwoshadow(){
	let receta = document.querySelector(".recetados");
	receta.style.display = "none";
}

function recetathreeshow(){
	let receta = document.querySelector(".recetatres");
	receta.style.display = "block";
}

function recetathreeshadow(){
	let receta = document.querySelector(".recetatres");
	receta.style.display = "none";
}

function recetafourshow(){
	let receta = document.querySelector(".recetacuatro");
	receta.style.display = "block";
}

function recetafourshadow(){
	let receta = document.querySelector(".recetacuatro");
	receta.style.display = "none";
}

function formularioshadow(){
	let form = document.querySelector(".form");
	form.style.display = "none";
}

document.querySelector(".seere.one").addEventListener("click",recetaoneshow);
document.querySelector(".close.one").addEventListener("click",recetaoneshadow);
document.querySelector(".seere.two").addEventListener("click",recetatwoshow);
document.querySelector(".close.two").addEventListener("click",recetatwoshadow);
document.querySelector(".seere.three").addEventListener("click",recetathreeshow);
document.querySelector(".close.three").addEventListener("click",recetathreeshadow);
document.querySelector(".seere.four").addEventListener("click",recetafourshow);
document.querySelector(".close.four").addEventListener("click",recetafourshadow);
document.querySelector(".close-form").addEventListener("click",formularioshadow);


	

function respuesta(){
	let coordsg = document.querySelector(".gallina").getBoundingClientRect();
	let coordsj = document.querySelector(".jamon").getBoundingClientRect();
	let coordsp = document.querySelector(".pierna").getBoundingClientRect();
	let coordsgr = document.querySelector(".gallinar").getBoundingClientRect();
	let coordsjr = document.querySelector(".jamonr").getBoundingClientRect();
	let coordspr = document.querySelector(".piernar").getBoundingClientRect();
	let form = document.querySelector(".form");

	let gallinaarr = coordsg.top;
	let gallinaizq = coordsg.left;
	let jamonarr = coordsj.top;
	let jamonizq = coordsj.left;
	let piernaarr = coordsp.top;
	let piernaizq = coordsp.left;
	let gallinararr = coordsgr.top;
	let gallinarizq = coordsgr.left;
	let jamonrarr = coordsjr.top;
	let jamonrizq = coordsjr.left;
	let piernararr = coordspr.top;
	let piernarizq = coordspr.left;

	

	if(gallinaarr >= (gallinararr-20) && gallinaarr < (gallinararr+20)){
		if(jamonarr >= (jamonrarr-20) && jamonarr < (jamonrarr+20)){
			if(piernaarr >= (piernararr-20) && piernaarr < (piernararr+20)){
				form.style.display = "block";
			}else{
				alert("Vuelve a intentarlo");
			}
		}else{
			alert("Vuelve a intentarlo");
			}
	}else{
		alert("Vuelve a intentarlo");
	}
}

document.querySelector(".ver").addEventListener("click",respuesta);
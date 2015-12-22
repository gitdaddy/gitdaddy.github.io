
var heroNames = ["sauron", "saruman", "legolas", "gandalf", "gimli"]; 
var weaponNames = ["sword", "bow", "axe", "spear", "staff", "hammer"];
var placeNames = ["mordor", "helm", "shire", "minas"]; 



function changeBg()
	{
		//document.body.style.background = "#f3f3f3 url('RING.jpg') no-repeat right top";
	}

	
function insertValues(){ // stores the votes using localStorage object
	// get the votes
	var heros = document.forms[0]; // make sure to use the right index
	var heroSelected;
	var weaponSelected = document.getElementById("weapons").value;
	var places = document.forms[1];
	var placeSelected;
	
	for (var i = 0; i < heros.length; i++) {
    if (heros[i].checked) {
        heroSelected = heros[i].value;
		}
	}
	
	for (var i = 0; i < places.length; i++) {
    if (places[i].checked) {
        placeSelected = places[i].value;
		}
	}
	alert("Values: " + heroSelected + "  " + placeSelected +"  " + weaponSelected);

	
	if(typeof(Storage) !== "undefined"){
	// add it on to the storage
	if(isNaN(localStorage.getItem(heroSelected)))
		localStorage.setItem(heroSelected, 1);
	else
		localStorage.setItem(heroSelected, parseInt(localStorage.getItem(heroSelected)) + 1);

	
	if(isNaN(localStorage.getItem(weaponSelected))){
		alert("Setting weapon at 1");
		localStorage.setItem(weaponSelected, 1);		
	}
	else
		localStorage.setItem(weaponSelected, parseInt(localStorage.getItem(weaponSelected)) + 1);

	
	if(isNaN(localStorage.getItem(placeSelected)))
		localStorage.setItem(placeSelected, 1);
	else
		localStorage.setItem(placeSelected, parseInt(localStorage.getItem(placeSelected)) + 1);

	
	alert("Data of hero: " + heroSelected + " is: " + localStorage.getItem(heroSelected));
	alert("Data of place: " + placeSelected + " is: " + localStorage.getItem(placeSelected));
	 alert("Data of weapon: " + weaponSelected + " is: " + localStorage.getItem(weaponSelected));
	}
	else
		alert("Your Browser doesn't support on-line local storage!");
}
	

	function getWeaponImage()
	{
	    var weapon = document.getElementById("weapons").value;
		if(weapon == "sword")
			document.getElementById("image").src = "sword.jpg";
		if(weapon == "staff")
			document.getElementById("image").src = "staff.jpg";
		if(weapon == "bow")
			document.getElementById("image").src = "Bows.jpg";
		if(weapon == "spear")
			document.getElementById("image").src = "spear.jpg";
		if(weapon == "axe")
			document.getElementById("image").src = "axe.jpg";
		if(weapon == "hammer")
			document.getElementById("image").src = "hammer.jpg";
	}
	
	function seeResults(){
		location.replace("results.html");
	}
	
	function warChart(){
	
	alert("Hero Charts:(sauron) " + parseInt(localStorage.getItem("sauron")));
	

	plaChart();
	weaChart();
	var data = [
    {
        value: parseInt(localStorage.getItem("sauron")),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Sauron"
    },
    {
        value: parseInt(localStorage.getItem("saruman")),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Saruman"
    },
    {
        value: parseInt(localStorage.getItem("legolas")),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Legolas"
    },
	{
        value: parseInt(localStorage.getItem("gandalf")),
        color: "#0080ff",
        highlight: "#2b9eff", 
        label: "Gandalf"
    },
	{
        value: parseInt(localStorage.getItem("gimli")),
        color: "#aed5fc",
        highlight: "#cde2bd",
        label: "Gimli"
    }
   ]
   
	var ctx = document.getElementById("warriorChart").getContext("2d");
	var myNewChart = new Chart(ctx).PolarArea(data);
}

function weaChart(){
	
	alert("Weapon Charts:(sword) " + parseInt(localStorage.getItem("sword")));

	
	var data = [
    {
        value: parseInt(localStorage.getItem("sword")),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Sword"
    },
    {
        value: parseInt(localStorage.getItem("bow")),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Bow"
    },
    {
        value: parseInt(localStorage.getItem("hammer")),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Hammer"
    },
	{
        value: parseInt(localStorage.getItem("staff")),
        color: "#0080ff",
        highlight: "#2b9eff", 
        label: "Staff"
    },
	{
        value: parseInt(localStorage.getItem("spear")),
        color: "#aed5fc",
        highlight: "#cde2bd",
        label: "spear"
    },
	{
        value: parseInt(localStorage.getItem("axe")),
        color: "#787777",
        highlight: "#d5bee0",
        label: "Axe"
    }
   ]
   
	var ctx = document.getElementById("weaponChart").getContext("2d");
	var myNewChart = new Chart(ctx).PolarArea(data);
}

function plaChart(){
	
	alert("Hero Charts:(mordor) " + parseInt(localStorage.getItem("mordor")));

	var data = [
    {
        value: parseInt(localStorage.getItem("mordor")),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Mordor"
    },
    {
        value: parseInt(localStorage.getItem("helm")),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Helms Deep"
    },
    {
        value: parseInt(localStorage.getItem("shire")),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Shire"
    },
	{
        value: parseInt(localStorage.getItem("minas")),
        color: "#c3848e",
        highlight: "#c5b6aa",
        label: "Minas Tirith"
    }
   ]
   
	var ctx = document.getElementById("placeChart").getContext("2d");
	var myNewChart = new Chart(ctx).PolarArea(data);
}

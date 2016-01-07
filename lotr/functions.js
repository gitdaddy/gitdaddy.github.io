
var heroNames = ["sauron", "saruman", "legolas", "gandalf", "gimli"]; 
var weaponNames = ["sword", "bow", "axe", "spear", "staff", "hammer"];
var placeNames = ["mordor", "helm", "shire", "minas"]; 


function changeBg()
	{
		document.body.style.background = "#f3f3f3 url('RING.jpg') no-repeat right top"; 
		for(var i = 0; i < heroNames.length; i++)
		{
			//alert("Checking: " + heroNames[i] + "is Nan?" + isNaN(localStorage.getItem(heroNames[i])));
			if(isNaN(localStorage.getItem(heroNames[i])))
			{
					localStorage.setItem(heroNames[i], 0);
			}
		}
		for(var i = 0; i < weaponNames.length; i++)
		{
			//alert("Checking #" + i + " " + weaponNames[i] + " is Nan? " + isNaN(localStorage.getItem(weaponNames[i])));			
			if(isNaN(localStorage.getItem(weaponNames[i])))
			{
					localStorage.setItem(weaponNames[i], 0);
			}
		}
		for(var i = 0; i < placeNames.length; i++)
		{
			//alert("Checking: " + placeNames[i] + "is Nan?" + isNaN(localStorage.getItem(placeNames[i])));
			if(isNaN(localStorage.getItem(placeNames[i])))
			{
					localStorage.setItem(placeNames[i], 0);
			}
		}
			
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
	//alert("Values: " + heroSelected + "  " + placeSelected +"  " + weaponSelected);
	//alert("Is NAN hero? :" + isNaN(localStorage.getItem(heroSelected)));

	
	if(typeof(Storage) !== "undefined"){
	// add it on to the storage
	localStorage.setItem(heroSelected, parseInt(localStorage.getItem(heroSelected)) + 1);
	
	localStorage.setItem(weaponSelected, parseInt(localStorage.getItem(weaponSelected)) + 1);
	
	localStorage.setItem(placeSelected, parseInt(localStorage.getItem(placeSelected)) + 1);

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
	
	//alert("Weapon Charts:(axe) " + localStorage.getItem(weaponNames[2]));
	
	var data = [
    {
        value: localStorage.getItem("sword"),
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Sword"
    },
    {
        value: localStorage.getItem("bow"),
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Bow"
    },
    {
        value: localStorage.getItem("hammer"),
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Hammer"
    },
	{
        value: localStorage.getItem("staff"),
        color: "#0080ff",
        highlight: "#2b9eff", 
        label: "Staff"
    },
	{
        value: localStorage.getItem("spear"),
        color: "#aed5fc",
        highlight: "#cde2bd",
        label: "Spear"
    },
	{
        value: localStorage.getItem(weaponNames[2]),
        color: "#787777",
        highlight: "#d5bee0",
        label: "Axe"
    }
   ]
   
	var ctx = document.getElementById("weaponChart").getContext("2d");
	var myNewChart = new Chart(ctx).PolarArea(data);
}

function plaChart(){
	
	//alert("Hero Charts:(mordor) " + parseInt(localStorage.getItem("mordor")));

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

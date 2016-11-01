

var app = angular.module("pfApp", []);

app.controller("resultsCtrl", function($scope) {
	$scope.result = "????";
	$scope.num_guesses = 0;
	$scope.guesses = []; 
	$scope.dataIn = "";

	$scope.randNum = 0;
	var stop = false;
	while(!stop){	
		$scope.randNum = getRand();
		//alert("randNum: " + $scope.randNum);
		var x = $scope.randNum;
		stop = isEachUnique(x);
	}

	$scope.makeGuess = function ($event) {
		if($event.charCode === 13) { // "enter key"
			// validate
			var str = $scope.dataIn;
			var x = str.match(/[1-9]/g);
			var d = isEachUnique(str);
			if ((!x || x.length < 4 || !d)){
				//alert("Please Enter 4 digits between 1 and 9");
				var d = document.getElementById("myInput");
				d.style.backgroundColor = "red";
				return;
			}
			var d = document.getElementById("myInput");
				d.style.backgroundColor = "white";

			// update list
			var pico = getPico($scope.randNum, $scope.dataIn);
			var fama = getFama($scope.randNum, $scope.dataIn, pico);
			$scope.guesses.push({nums:$scope.dataIn, p:pico, 
				f:fama});

			// update result
			$scope.num_guesses += 1;
			$scope.dataIn = "";
		}
	}

});


 // for when the enter button is clicked
$("#myInput").keyup(function(event){
    if(event.keyCode == 13){
        $("#myInput").click();
    }
});


$(document).ready(function(){
    $("#start").click(function(){
        $("#start").hide();
        $(".begin").show();
    });
});
 

function getRand(){
  var min = Math.ceil(1111);
  var max = Math.floor(9999);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getPico(randNum, input){
	var num = Number(input);
	var p = 0;
	var n = (""+num).split("");
	var r = (""+randNum).split("");

	for (var x = 0; x < 4; x += 1)
	{
		if (r[x] === n[x])
			p += 1;
	}

	return p;
}

function getFama(randNum, input, pico){
	var num = Number(input);
	var f = pico * -1;
	var n = (""+num).split("");
	var r = (""+randNum).split("");

	for (var x = 0; x < 4; x += 1)
	{
		if (r.includes(n[x]))
			f += 1;
	}

	return f;
}

function isEachUnique(num){
	var r = (""+num).split("");

	for (var x = 0; x < r.length; x += 1)
	{
		// see if there are any duplicates
		var count = coutOccurances(r[x], r);
		if ( count > 1)
			return false;
	}
	return true;
}


function coutOccurances(value, array){
	var num = 0;
	for (var i = 0; i < array.length; i += 1){
		if (value === array[i])
			num += 1;
	}
	return num;
}
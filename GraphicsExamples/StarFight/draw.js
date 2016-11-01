"use strict";

function draw() {
// Object matrix needs to be updated continually
    if(tieBomber.model){
        tieBomber.model.updateMatrix();
    }
    if(asteroid.model){
        asteroid.model.updateMatrix();
    }

    if(laser.model){
        laser.model.updateMatrix();
    }
    
    if(temp){
       temp.updateMatrix();
    }

    var numRocks = 10;

    if (numPlayers == 2 && arwing != undefined) {
    arwing.model.updateMatrix();
    laser2.model.updateMatrix();
    numRocks = 10;
    }

    // clone the asteroids once the parent has loaded and give them a random rotation angle
    if(asteroid != undefined && needToClone == true) {
    	for(var i = 0; i < numRocks; i++) {
    	    asteroids[i] = new asteroidClone(asteroid.clone());
    	    asteroids[i].model.rotation.set(Math.random() * 360, Math.random() * 360, Math.random() * 360);
                scene.add(asteroids[i].model); 
    	}
    	needToClone = false;
    }
}

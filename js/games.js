//What happens when the games link at the top of the screen is pressed.
var gamesText;
var infinityMesh, schoolDemoMesh;

function initGames()
{
	gamesText = new THREE.Group();

	//infinityMesh = displayLink(" Infinity ");
	//infinityMesh.position.set(-500,130,90);
	//gamesText.add(infinityMesh);

	//var schoolDemoMesh = displayLink(" School Demo ");
	//schoolDemoMesh.position.set(-500,110,90);
	//gamesText.add(schoolDemoMesh);

	scene.add(gamesText);
	gamesText.visible = false;
}

function displayGames()
{
	gamesText.visible = true;
	displayVideos();
	//links.push(infinityMesh);
	//links.push(schoolDemoMesh);
}

function hideGames()
{
	gamesText.visible = false;

	/*var index = links.indexOf(infinityMesh);
	if (index > -1)
 	   links.splice(index, 1); //Remove the reference to infinity video

 	index = links.indexOf(schoolDemoMesh);
	if (index > -1)
 	   links.splice(index, 1); //Remove the reference to school demo video*/

	hideVideos();
}
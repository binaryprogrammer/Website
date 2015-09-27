//What happens when the games link at the top of the screen is pressed.
var gamesText;

function initGames()
{
	gamesText = new THREE.Group();


	text = displayText(" Infinity ");
	text.position.set(-500,170,90);
	gamesText.add(text);

	scene.add(gamesText);
	gamesText.visible = false;
}

function displayGames()
{
	gamesText.visible = true;
	displayVideos();
}

function hideGames()
{
	gamesText.visible = false;
	hideVideos();
}
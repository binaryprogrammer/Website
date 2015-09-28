
var bioText;

function initBio()
{
	bioText = new THREE.Group();

	var text; //TODO: Geometry merge all the text here then enable disable the visibility.
	text = displayText( " Nathan Moore ");
	text.position.set(-500,200,90);
	bioText.add(text);

	text = displayText(" I make stuff ");
	text.position.set(-500,185,90);
	bioText.add(text);

	text = displayText(" Mostly games ");
	text.position.set(-500,170,90);
	bioText.add(text);

	scene.add(bioText);
	bioText.visible = false;

	/*
		Nathan Moore, programmer, an avid game maker and lover. I spend all my free time making video games.

		I'm a problem solver, an explorer, and _________. I love problems. They present the opportunity for solutions.

		Nathan Moore Explorer
			Exploring is the most exciting form of learing one can undertake. Exploring brings the potential for the

		Nathan Moore Problem Solver

		Nathan Moore  
	*/
}

function showBio()
{
	bioText.visible = true;
}

function hideBio()
{
	bioText.visible = false;
}
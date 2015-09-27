
var bioText;

function initBio()
{
	bioText = new THREE.Group();

	var text; //TODO: Geometry merge all the text here then enable disable the visibility.
	text = displayText( " SOFTWARE SKILLS ");
	text.position.set(-500,200,90);
	bioText.add(text);

	text = displayText(" Proficient in: C#, AS3, Unity ");
	text.position.set(-500,185,90);
	bioText.add(text);

	text = displayText(" Experience in: JavaScript, Obj-C, Java ");
	text.position.set(-500,170,90);
	bioText.add(text);

	text = displayText(" Familiar with: HTML5, CSS, HLSL ");
	text.position.set(-500,155,90);
	bioText.add(text);

	text = displayText(" JOB EXPERIENCE ");
	text.position.set(105,155,200);
	bioText.add(text);

	text = displayText(" Programmer @ 2by2 Gaming ");
	text.position.set(105,140,200);
	bioText.add(text);
	
	text = displayText(" Lab Assistant @ Flashpoint Academy ");
	text.position.set(105,125,200);
	bioText.add(text);

	text = displayText(" Unity Programmer @ High Voltage Software ");
	text.position.set(105,110,200);
	bioText.add(text);

	text = displayText(" PROJECT EXPERIENCE ");
	text.position.set(105,-50,250);
	bioText.add(text);

	text = displayText(" Infinity ");
	text.position.set(105,-65,250);
	bioText.add(text);

	text = displayText(" Spero ");
	text.position.set(105,-80,250);
	bioText.add(text);

	text = displayText(" Golden Age of Copper ");
	text.position.set(105,-95,250);
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
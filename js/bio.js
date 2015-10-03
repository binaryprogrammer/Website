
var bioText;

function initBio()
{
	bioText = new THREE.Group();

	//text.geometry.boundingBox;
	var text; //TODO: Geometry merge all the text here then enable disable the visibility.
	text = displayText( "Nathan is a fast learner and has been");
	text.position.set(-500,200,90);
	bioText.add(text);

	text = displayText( "aggressively pursuing knowledge his");
	text.position.set(-500,185,90);
	bioText.add(text);

	text = displayText( "entire life. At 16 he enrolled in");
	text.position.set(-500,170,90);
	bioText.add(text);

	text = displayText( "Joliet Junior College. Before");
	text.position.set(-500,155,90);
	bioText.add(text);

	text = displayText( "graduating high school, he was taking");
	text.position.set(-500,140,90);
	bioText.add(text);
	
	text = displayText( "classes like trigonometry and pre-cal.");
	text.position.set(-500,125,90);
	bioText.add(text);
	
	text = displayText( "At 18 he set his sights on video games,");
	text.position.set(-500,100,95);
	bioText.add(text);
	
	text = displayText( "two years later he graduated at the top");
	text.position.set(-500, 85,95);
	bioText.add(text);
	
	text = displayText( "of his class from Tribeca Flashpoint");
	text.position.set(-500, 70,95);
	bioText.add(text);
	
	text = displayText( "Media Arts Academy, earning recognition ");
	text.position.set(-500, 55,95);
	bioText.add(text);
	
	text = displayText( "on the Dean's short list.");
	text.position.set(-500, 40,95);
	bioText.add(text);
	
	text = displayText( "A few years after graduating he");
	text.position.set(-500, 15,90);
	bioText.add(text);

	text = displayText( "decided to explore. He walked 900");
	text.position.set(-500, 0,90);
	bioText.add(text);

	text = displayText( "miles along the Appalachian Trail in ");
	text.position.set(-500, -15,90);
	bioText.add(text);

	text = displayText( "10 weeks. Since returning has been");
	text.position.set(-500, -30,90);
	bioText.add(text);

	text = displayText( "looking across the country for his");
	text.position.set(-500, -45,90);
	bioText.add(text);

	text = displayText( "next job and next challenge.");
	text.position.set(-500, -60,90);
	bioText.add(text);



	text = displayText( "During his time at Tribeca Flashpoint,");
	text.position.set(200, 30, 70);
	bioText.add(text);

	text = displayText( "he wrote more than 3 games from");
	text.position.set(200, 15, 70);
	bioText.add(text);

	text = displayText( "scratch using C# and Microsoft's game");
	text.position.set(200, 0, 70);
	bioText.add(text);

	text = displayText( "library XNA. He was the programmer");
	text.position.set(200, -15, 70);
	bioText.add(text);

	text = displayText( "on Bloom, the game that won 1st place");
	text.position.set(200,-30, 70);
	bioText.add(text);

	text = displayText( "at Microsoft's Imagine Cup US for");
	text.position.set(200,-45, 70);
	bioText.add(text);

	text = displayText( "game design. His game won every single");
	text.position.set(200,-60, 70);
	bioText.add(text);

	text = displayText( "award in the competition, breaking");
	text.position.set(200,-75, 70);
	bioText.add(text);

	text = displayText( "the record for most awarded project,");
	text.position.set(200,-90, 70);
	bioText.add(text);

	text = displayText( "and receiving the most votes ever in");
	text.position.set(200,-105, 70);
	bioText.add(text);

	text = displayText( "People's Choice Award. His team has");
	text.position.set(200,-120, 70);
	bioText.add(text);

	text = displayText( "been featured in dozens of news");
	text.position.set(200,-135, 70);
	bioText.add(text);

	text = displayText( "articles including Wired Magazine.");
	text.position.set(200,-150, 70);
	bioText.add(text);
	
	scene.add(bioText);
	bioText.visible = false;

	/*
		Nathan Moore, programmer, an avid game maker and lover. I spend all my free time making video games.

		I'm a problem solver, an explorer, and _________. I love problems. They present the opportunity for solutions.

		Nathan Moore Explorer
			Exploring is the most exciting form of learing one can undertake. Exploring brings the potential for the

		Nathan Moore Problem Solver

Nathan is a fast learner and has been aggressively pursuing knowledge his entire life. At 16 he 
enrolled in Joliet Junior College. Before graduating high school, he was taking classes like 
trigonometry and precalculus. At 18 he set his sights on video games, two years later he graduated at 
the top of his class from Tribeca Flashpoint Media Arts Academy earning recognition on the Dean's 
short list. A few years after graduating he decided to explore. He walked 900 miles along the 
Appalachian Trail in 10 weeks. Since returning has been driving around the country looking for his 
next challenge. Now he's excited and ready for any challenge both personal and professional.

During his time at Tribeca Flashpoint, he wrote more than 3 games from scratch using C# and 
Microsoft's game library XNA. He was the programmer on Bloom, a game that won 1st place at 
Microsoft's Imagine Cup US for Game Design. His game won every single award in the competition 
breaking the record for most awarded project, and received the most votes ever won in The People's 
Choice Award. His team has been featured in dozens of news articles including Wired Magazine.

http://www.wired.com/geekdad/2011/04/us-imagine-cup-winners-make-an-impact/
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
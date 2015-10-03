
var resumeText;
var pdfMesh;

function initResume()
{
	resumeText = new THREE.Group();
	pdfMesh = makePictureLink (THREE.ImageUtils.loadTexture("img/pdf.png"), -windowHalfX + 320, windowHalfY-64, -60, 50, 50);
	pdfMesh.visible = false;
	scene.add(pdfMesh);
	//resumeText.add(pdfMesh);

	var text; //TODO: Geometry merge all the text here then enable disable the visibility.
	text = displayText( " SOFTWARE SKILLS ");
	text.position.set(-500,200,110);
	resumeText.add(text);

	text = displayText(" Proficient in: C#, AS3, Unity ");
	text.position.set(-500,185,110);
	resumeText.add(text);

	text = displayText(" Experience in: JavaScript, Obj-C, Java ");
	text.position.set(-500,170,110);
	resumeText.add(text);

	text = displayText(" Familiar with: HTML5, CSS, HLSL ");
	text.position.set(-500,155,110);
	resumeText.add(text);

	text = displayText(" JOB EXPERIENCE ");
	text.position.set(105,155,240);
	resumeText.add(text);

	text = displayText(" Programmer @ 2by2 Gaming ");
	text.position.set(105,140,240);
	resumeText.add(text);
	
	text = displayText(" Lab Assistant @ Flashpoint Academy ");
	text.position.set(105,125,240);
	resumeText.add(text);

	text = displayText(" Unity Programmer @ High Voltage Software ");
	text.position.set(105,110,240);
	resumeText.add(text);

	text = displayText(" PROJECT EXPERIENCE ");
	text.position.set(105,-50,280);
	resumeText.add(text);

	text = displayText(" Infinity ");
	text.position.set(105,-65,280);
	resumeText.add(text);

	text = displayText(" Spero ");
	text.position.set(105,-80,280);
	resumeText.add(text);

	text = displayText(" Golden Age of Copper ");
	text.position.set(105,-95,280);
	resumeText.add(text);

	scene.add(resumeText);
	resumeText.visible = false;
}

function showResume()
{
	resumeText.visible = true;
	links.push(pdfMesh);
	pdfMesh.visible = true;
	//scene.add(pdfMesh);
}

function hideResume()
{
	resumeText.visible = false;
	
	var index = links.indexOf(pdfMesh);
	if (index > -1)
 	   links.splice(index, 1);

	pdfMesh.visible = false;
	//scene.remove(pdfMesh);
}
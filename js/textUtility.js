var fontSize = 32;
var lettersPerSide = 16;
var textMaterial;

function initText()
{
    var canvas = document.createElement('canvas');
    canvas.width = canvas.height = fontSize*lettersPerSide;
    var context = canvas.getContext('2d');
    context.font = fontSize+'px Monospace';
    var i=0;

    for (var y=0; y<lettersPerSide; y++) 
    {
        for (var x=0; x<lettersPerSide; x++,i++) 
        {
            var character = String.fromCharCode(i);
            context.fillText(character, x*fontSize, -(8/32)*fontSize+(y+1)*fontSize);
        }
    }

    var texture = new THREE.Texture(canvas);
    texture.flipY = false;
    texture.needsUpdate = true;

    textMaterial = new THREE.MeshBasicMaterial({map: texture});
    textMaterial.transparent = true;
    return textMaterial;
}

function createText(message)
{
    if (textMaterial === undefined) //our texturemap hasn't been created yet, create it.
        initText();

    var j=0, ln=0;
    var offset = 0.9 / lettersPerSide;
    var geometry = new THREE.Geometry();

    //var str = "Here is a bunch of text and we are going to see how this looks \n if we just type it all out here in genuine hard coded \n fashion.";

    for (i=0; i<message.length; i++) 
    {
        var code = message.charCodeAt(i);
        var cx = code % lettersPerSide;
        var cy = Math.floor(code / lettersPerSide);

        geometry.vertices.push(
            new THREE.Vector3( j*1.1+0.05, ln*1.1+0.05, 0 ),
            new THREE.Vector3( j*1.1+1.05, ln*1.1+0.05, 0 ),
            new THREE.Vector3( j*1.1+1.05, ln*1.1+1.05, 0 ),
            new THREE.Vector3( j*1.1+0.05, ln*1.1+1.05, 0 ));

        var face = new THREE.Face3(i*4+0, i*4+1, i*4+2);
        geometry.faces.push(face);
        
        face = new THREE.Face3(i*4+0, i*4+2, i*4+3);
        geometry.faces.push(face);
        
        var ox = (cx + 0.05) / lettersPerSide; //Was //cx+0.05 
        var oy = (cy + 0.05) / lettersPerSide; //Was //cy+0.05

        geometry.faceVertexUvs[0].push([
            new THREE.Vector2( ox, oy + offset ),
            new THREE.Vector2( ox + offset, oy + offset ),
            new THREE.Vector2( ox + offset, oy )]);

        geometry.faceVertexUvs[0].push([
            new THREE.Vector2( ox, oy + offset ),
            new THREE.Vector2( ox + offset, oy ),
            new THREE.Vector2( ox, oy )]);

        if (code == 10) 
        {
            ln--;
            j=0;
        } 
        else 
        {
           j++;
        }
    }

    var text = new THREE.Mesh(geometry, textMaterial);
    text.scale.set(10, 10, 1);
    return text;
}

//Returns the displayed text as a Mesh.
function displayText(message)
{
    var mesh = createText(message);
    scene.add(mesh);
    return mesh;
}

function displayLink(message)
{
    var mesh = displayText(message);
    links.push(mesh);
    return mesh;
}

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

//Returns the displayed text as a Mesh.
function displayText(message)
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
    //scene.add(text);
    return text;
}

//Slow function. Delete asap
function makeLink(message, parameters, x, y, z)
{
    if ( parameters === undefined ) 
        parameters = {};
    
    var fontface = parameters.hasOwnProperty("fontface") ? 
    parameters["fontface"] : "Arial";
    
    var fontsize = parameters.hasOwnProperty("fontsize") ? 
    parameters["fontsize"] : 18;
    
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;
    
    // get size data (height depends only on font size)
    var metrics = context.measureText( message );
    var textWidth = metrics.width;
    
    // text color
    context.fillStyle = "rgba(0, 0, 0, 1.0)"; //Black
    context.fillText( message, fontsize, fontsize);
    
    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas); 
    texture.needsUpdate = true;
    
    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } ); 
    
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,50,1.0);
    sprite.position.set(x, y, z);

    var geom = new THREE.PlaneGeometry(textWidth/300, fontsize/150, 1, 1);
    var mesh = new THREE.Mesh( geom, spriteMaterial );
    mesh.scale.set(100,50,1.0);
    mesh.position.set(x+textWidth/20,y+fontsize/10,z);
    mesh.name = message;
    mesh.visible = false;
    
    links.push(mesh);
    scene.add(mesh);
    //sprite.add(mesh);
    scene.add(sprite);
    
    return mesh; //return the mesh so we can store it to check against it later.
}


//Makes a sprite with the given message and returns it. Returned text is static    
function makeTextSprite( message, parameters )
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
    //var metrics = context.measureText( message );
    //var textWidth = metrics.width;
    
    // text color
    context.fillStyle = "rgba(0, 0, 0, 1.0)";
    context.fillText( "There won't be much text displayed here but i'm trying to get everything displayed", -100, 128);
    
    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    
    var spriteMaterial = new THREE.SpriteMaterial( 
    { map: texture, useScreenCoordinates: false } ); 
    
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,50,1.0);
    
    scene.add(sprite);
    return sprite;
}

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

//I don't think this function works, but I was in a rush writing this site I didn't make any comments. 
function generateSprite() 
{
    var canvas = document.createElement( 'canvas' );
    canvas.width = 16;
    canvas.height = 16;

    var context = canvas.getContext( '2d' );
    var gradient = context.createRadialGradient( canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2 );
    gradient.addColorStop( 0, 'rgba(255,255,255,1)' );
    gradient.addColorStop( 0.2, 'rgba(0,255,255,1)' );
    gradient.addColorStop( 0.4, 'rgba(0,0,64,1)' );
    gradient.addColorStop( 1, 'rgba(0,0,0,1)' );

    context.fillStyle = gradient;
    context.fillRect( 0, 0, canvas.width, canvas.height );

    return canvas;
}

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
    var metrics = context.measureText( message );
    var textWidth = metrics.width;
    
    // text color
    context.fillStyle = "rgba(0, 0, 0, 1.0)";
    
    context.fillText( message, fontsize, fontsize);
    
    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;
    
    var spriteMaterial = new THREE.SpriteMaterial( 
    { map: texture, useScreenCoordinates: false } ); 
    
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,50,1.0);
    
    scene.add(sprite);
    return sprite;
}

function makeLink(message, paramaters)
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
    context.fillStyle = "rgba(0, 0, 0, 1.0)";
    
    context.fillText( message, fontsize, fontsize);
    
    // canvas contents will be used for a texture
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;
    
    var spriteMaterial = new THREE.SpriteMaterial( 
    { map: texture, useScreenCoordinates: false } ); 
    
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,50,1.0);
    
    scene.add(sprite);
    return sprite;
}

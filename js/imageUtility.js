
function makePictureLink(texture, x, y, z)
{
    if (texture.image == undefined)
    {
        console.log("No image in texture"); //TODO: fix this, the image is loaded. If I add a breakpoint, everything works.
        return;
    }

    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } ); 
    
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,100,1.0);
    sprite.position.set(x, y, z);

    var geom = new THREE.PlaneGeometry(texture.image.width, texture.image.height, 1, 1);
    var mesh = new THREE.Mesh( geom, spriteMaterial );
    mesh.scale.set(1,1,1.0);
    mesh.position.set(x, y, z);
    //mesh.visible = false;
    
    links.push(mesh);
    scene.add(mesh);
    //sprite.add(mesh);
    scene.add(sprite);
    
    return mesh; //return the mesh so we can store it to check against it later.
}
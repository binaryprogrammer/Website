
function makePictureLink(texture, x, y, z, scaleX, scaleY)
{
    var spriteMaterial = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false } ); 
    
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(scaleX,scaleY,1.0);
    sprite.position.set(x, y, z);

    var geom = new THREE.PlaneGeometry(50, 50, 1, 1);
    var mesh = new THREE.Mesh( geom, spriteMaterial );
    mesh.scale.set(1,1,1.0);
    mesh.position.set(x, y, z);
    mesh.visible = false;
    
    links.push(mesh);
    scene.add(mesh);
    scene.add(sprite);
    
    return mesh; //return the mesh so we can store it to check against it later.
}
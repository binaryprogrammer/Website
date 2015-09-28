

function makePictureLink(texture, x, y, z, sizeX, sizeY)
{
    var mat = new THREE.MeshBasicMaterial( { map: texture, transparent: true, useScreenCoordinates: false } );
    var geom = new THREE.PlaneGeometry(sizeX, sizeY, 1, 1);
    var mesh = new THREE.Mesh( geom, mat );
    //mesh.scale.set(scaleX,scaleY,1.0);
    mesh.position.set(x, y, z);
    return mesh; //return the mesh so we can store it to check against it later.
}

function displayPictureLink(texture, x, y, z, sizeX, sizeY)
{
    var mesh = makePictureLink(texture, x, y, z, sizeX, sizeY);

    links.push(mesh);
    scene.add(mesh);
    return mesh; //return the mesh so we can store it to check against it later.
}
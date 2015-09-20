//TODO: call this when I want to display the videos
function loadVideos()
{
    texture = new THREE.Texture( image );

    imageReflection = document.createElement( 'canvas' );
    imageReflection.width = 720; //480
    imageReflection.height = 480; //204

    imageReflectionContext = imageReflection.getContext( '2d' );
    imageReflectionContext.fillStyle = '#000000';
    imageReflectionContext.fillRect( 0, 0, 720, 480 ); //imageReflectionContext.fillRect( 0, 0, 480, 204 );

    imageReflectionGradient = imageReflectionContext.createLinearGradient( 0, 0, 0, 480 ); //imageReflectionGradient = imageReflectionContext.createLinearGradient( 0, 0, 0, 204 );
    imageReflectionGradient.addColorStop( 0.2, 'rgba(360, 360, 360, 1)' ); //imageReflectionGradient.addColorStop( 0.2, 'rgba(240, 240, 240, 1)' );
    imageReflectionGradient.addColorStop( 1, 'rgba(360, 360, 360, 0.8)' ); //imageReflectionGradient.addColorStop( 1, 'rgba(240, 240, 240, 0.8)' );

    textureReflection = new THREE.Texture( imageReflection );
}

function displayVideos() //TODO: fix all hard coded values to fit multiple screen resolutions.
{
    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    
    //TODO: polish the movie reflection
    var materialReflection = new THREE.MeshBasicMaterial( { map: textureReflection, side: THREE.BackSide, overdraw: 0.5 } );
    materialReflection.transparent = true;
    materialReflection.opacity = .8;

    // Create a plane to project the video onto.
    var videoGeom = new THREE.PlaneGeometry(480, 204, 4, 4); //var videoGeom = new THREE.PlaneGeometry(480, 204, 4, 4);

    videoMesh = new THREE.Mesh( videoGeom, material );
    videoMesh.scale.x = videoMesh.scale.y = videoMesh.scale.z = 1.5;
    scene.add(videoMesh);

    videoMesh = new THREE.Mesh( videoGeom, materialReflection );
    videoMesh.position.y = -306; //-306;
    videoMesh.rotation.x = - Math.PI;
    videoMesh.scale.x = videoMesh.scale.y = videoMesh.scale.z = 1.5;
    scene.add( videoMesh );
    
    var playTex = THREE.ImageUtils.loadTexture("img/Play.png");
    playTex.flipY = true;
    playTex.needsUpdate = true;
    
    var playMat = new THREE.MeshBasicMaterial( { map: playTex, transparent: true, overdraw: 0.5 } );
    
    var playPauseGeom = new THREE.PlaneGeometry(50, 50, 1, 1);
    playPauseMesh = new THREE.Mesh(playPauseGeom, playMat);
    playPauseMesh.position.y = -140;
    playPauseMesh.position.x = -200;
    playPauseMesh.position.z += 300;
    buttons.push(playPauseMesh);
    scene.add(playPauseMesh);
    
    var volumeTex = THREE.ImageUtils.loadTexture("img/Unmute.png");
    volumeTex.flipY = true;
    volumeTex.needsUpdate = true;
    
    var volumeMat = new THREE.MeshBasicMaterial( { map: volumeTex, transparent: true, overdraw: 0.5 } );
    
    var volumeGeom = new THREE.PlaneGeometry(50, 50, 1, 1);
    volumeMesh = new THREE.Mesh(playPauseGeom, volumeMat);
    volumeMesh.position.y = -140;
    volumeMesh.position.x = 200;
    volumeMesh.position.z += 240;
    buttons.push(volumeMesh);
    scene.add(volumeMesh);
}
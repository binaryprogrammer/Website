var video, image, imageContext,
    imageReflection, imageReflectionContext, imageReflectionGradient,
    texture, textureReflection;

var videoMesh, reflectionMesh, playPauseMesh, volumeMesh, seekMesh;

//call this when I want to display the videos
function loadVideos()
{
    video = document.getElementById( 'video' );
    
    image = document.createElement( 'canvas' );
    image.width = 720; //720
    image.height = 480; //480

    imageContext = image.getContext( '2d' );
    imageContext.fillStyle = '#0000dd';
    imageContext.fillRect( 0, 0, 720, 480 ); //( 0, 0, 720, 480 );
                
    texture = new THREE.Texture( image );

    imageReflection = document.createElement( 'canvas' );
    imageReflection.width = 720; //720
    imageReflection.height = 480; //480

    imageReflectionContext = imageReflection.getContext( '2d' );
    imageReflectionContext.fillStyle = '#000000';
    imageReflectionContext.fillRect( 0, 0, 720, 480 ); //( 0, 0, 720, 480 );

    imageReflectionGradient = imageReflectionContext.createLinearGradient( 0, 0, 0, 480 ); //( 0, 0, 0, 480 ); 
    imageReflectionGradient.addColorStop( 0.2, 'rgba(255, 255, 255, 1)' ); //( 0.2, 'rgba(360, 360, 360, 1)' ); 
    imageReflectionGradient.addColorStop( 1, 'rgba(255, 255, 255, 0.8)' ); //( 1, 'rgba(360, 360, 360, 0.8)' ); 

    textureReflection = new THREE.Texture( imageReflection );

    var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
    
    //TODO: polish the movie reflection
    var materialReflection = new THREE.MeshBasicMaterial( { map: textureReflection, side: THREE.BackSide, overdraw: 0.5 } );
    materialReflection.transparent = true;
    materialReflection.opacity = 0.8;

    // Create a plane to project the video onto.
    var videoGeom = new THREE.PlaneGeometry(480, 204, 4, 4);

    videoMesh = new THREE.Mesh( videoGeom, material );
    videoMesh.scale.x = videoMesh.scale.y = videoMesh.scale.z = 1.5;

    reflectionMesh = new THREE.Mesh( videoGeom, materialReflection );
    reflectionMesh.position.y = -306; //-306;
    reflectionMesh.rotation.x = - Math.PI;
    reflectionMesh.scale.x = reflectionMesh.scale.y = reflectionMesh.scale.z = 1.5;

    initVideoButtons();
}

function initVideoButtons()
{
    var playTex = THREE.ImageUtils.loadTexture("img/Play.png");
    playTex.flipY = true;
    playTex.needsUpdate = true;
    
    var playMat = new THREE.MeshBasicMaterial( { map: playTex, transparent: true, overdraw: 0.5 } );
    
    var playPauseGeom = new THREE.PlaneGeometry(50, 50, 1, 1);
    playPauseMesh = new THREE.Mesh(playPauseGeom, playMat);
    playPauseMesh.position.y = -200;
    playPauseMesh.position.x = -200;
    playPauseMesh.position.z = 100;
    
    var volumeTex = THREE.ImageUtils.loadTexture("img/Unmute.png");
    volumeTex.flipY = true;
    volumeTex.needsUpdate = true;
    
    var volumeMat = new THREE.MeshBasicMaterial( { map: volumeTex, transparent: true, overdraw: 0.5 } );
    
    var volumeGeom = new THREE.PlaneGeometry(50, 50, 1, 1);
    volumeMesh = new THREE.Mesh(playPauseGeom, volumeMat);
    volumeMesh.position.y = -200;
    volumeMesh.position.x = 200;
    volumeMesh.position.z = 40;
}

function hideVideos()
{
    if (playPauseMesh === undefined)
        return;

    video.pause();
    playPauseMesh.material.map = THREE.ImageUtils.loadTexture( 'img/Play.png' );
    playPauseMesh.material.needsUpdate = true;

    scene.remove(videoMesh);
    scene.remove(reflectionMesh);
    scene.remove(playPauseMesh);
    buttons.pop(playPauseMesh);
    scene.remove(volumeMesh);
    buttons.pop(volumeMesh);
}

function displayVideos() //TODO: fix all hard coded values to fit multiple screen resolutions.
{
    scene.add(videoMesh);
    scene.add(reflectionMesh);
    scene.add(playPauseMesh);
    buttons.push(playPauseMesh);
    scene.add(volumeMesh);
    buttons.push(volumeMesh);
}

//function switchVideos(video) {  }






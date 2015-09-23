/*
 * I don't have any formal web development training, so I don't know what type of code traditionally goes 
 * into main.js. I'm gong to use this class for basic functions that'd you'd expect to find on most websites. 
 */

function webglAvailable() 
{
    try 
    {
        var canvas = document.createElement( 'canvas' );
        return !!( window.WebGLRenderingContext && (
        canvas.getContext( 'webgl' ) ||
        canvas.getContext( 'experimental-webgl' ) ));
    } 
    catch (e) 
    {
        return false;
    }
}

function onWindowResize() 
{
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

function onDocumentMouseMove( event ) 
{
    event.preventDefault();

    mouse.x = ( event.clientX - windowHalfX ); //was mouseX
    mouse.y = ( event.clientY - windowHalfY ) * 0.8; //was mouseY
}

function onDocumentMouseDown( event ) 
{
    event.preventDefault();

    var clicked = new THREE.Vector2(); //Where the user clicked in 3d space.
    clicked.x = ( event.clientX / renderer.domElement.width ) * 2 - 1;
    clicked.y = -( event.clientY / renderer.domElement.height ) * 2 + 1;

    //console.log("on Mouse Down");

    raycaster.setFromCamera( clicked, camera );
    
    checkMouseAgainstButtons(raycaster);
    checkMouseAgainstLinks(raycaster);
}

function checkMouseAgainstButtons(raycaster)
{
    var intersects = raycaster.intersectObjects( buttons );

    if ( intersects.length > 0 ) 
    {
        var intersect = intersects[ 0 ];
        
        if ( intersect.object == playPauseMesh ) 
        {
            if (video.paused == true) //TODO: fix bug where when the video finishes the pause button doesn't switch to play.
            {
                // Play the video
                video.play();
                
                // Update the button text to 'Pause'
                playPauseMesh.material.map = THREE.ImageUtils.loadTexture( 'img/Pause.png' );
                playPauseMesh.material.needsUpdate = true;
                playPauseMesh.position.z -= 50;
            } 
            else 
            {
                // Pause the video
                video.pause();
                
                // Update the button text to 'Play'
                playPauseMesh.material.map = THREE.ImageUtils.loadTexture( 'img/Play.png' );
                playPauseMesh.material.needsUpdate = true;
                playPauseMesh.position.z += 50;
            }
        }
        else if (intersect.object == volumeMesh)
        {
            if (video.muted == false) 
            {
                // Mute the video
                video.muted = true;
                
                // Update the button text
                volumeMesh.material.map = THREE.ImageUtils.loadTexture( 'img/Mute.png' );
                volumeMesh.material.needsUpdate = true;
                volumeMesh.position.z -= 50;
            } 
            else 
            {
                // Unmute the video
                video.muted = false;
                
                // Update the button text
                volumeMesh.material.map = THREE.ImageUtils.loadTexture( 'img/Unmute.png' );
                volumeMesh.material.needsUpdate = true;
                volumeMesh.position.z += 50;
            }
        }
        else if (intersects.object == seekMesh)
        {
            
        }
    }
}

function checkMouseAgainstLinks(raycaster)
{
    var intersects = raycaster.intersectObjects( links );

    if ( intersects.length > 0 ) 
    {
        var intersect = intersects[ 0 ];

        if ( intersect.object == homeMesh ) 
        {
            console.log("home clicked");
            hideVideos();
            hideResume();
            //TODO: clear display
        }
        else if (intersect.object == gamesMesh)
        {
            console.log("games clicked");
            displayVideos();
            hideResume();
            //TODO: display games and videos
        }
        else if (intersect.object == bioMesh)
        {
            console.log("bio clicked");
            hideVideos();
            hideResume();
            //TODO: display bio
        }
        else if (intersect.object == resumeMesh)
        {
            console.log("resume clicked");
            hideVideos();
            showResume();
            //TODO: display resume
        }
        else if (intersect.object == linkedInMesh)
        {
            console.log("linkedIn clicked");
            hideVideos();
            hideResume();
            //TODO: open linkedIn in new window
        }
        else if (intersect.object == twitterMesh)
        {
            console.log("twitter clicked");
            hideVideos();
            hideResume();
            //TODO: open twitter in new window
        }
        else if (intersect.object == gitHubMesh)
        {
            console.log("github clicked");
            hideVideos();
            hideResume();
            //TODO: open github in new window
        }
        else if (intersect.object == playInfinityMesh || intersect.object == infinityMesh)
        {
            console.log("play Infinity");
            //TODO: open infinity in new window
        }
    }
}

//
function animate() 
{
    requestAnimationFrame( animate );

    render();
    if (displayStats)
        stats.update();
}

var radius = 600;
var theta = 0;

function render() 
{
    camera.position.x += ( mouse.x - camera.position.x ) * 0.05; //was mouseX
    camera.position.y += ( - mouse.y - camera.position.y ) * 0.05; //was mouseY
    //camera.lookAt( scene.position );
    camera.lookAt(camTarget);
    
    camera.updateMatrixWorld(); //from particle camera
    
    //TODO: move the particles down and fade them out.
    for ( var i = 0; i < particles.children.length; i++) 
    {
        particles.children[i].position.y -= particleSpeed[i];
        if (particles.children[i].position.y < -window.innerHeight)
        {
            particles.position.y = window.innerHeight;
        }
    }
    particles.rotation.y += .0001;

    if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
    {
        imageContext.drawImage( video, 0, 0 );

        if ( texture ) texture.needsUpdate = true;
        if ( textureReflection ) textureReflection.needsUpdate = true;
    }

    imageReflectionContext.drawImage( image, 0, 0 );
    imageReflectionContext.fillStyle = imageReflectionGradient;
    imageReflectionContext.fillRect( 0, 0, 720, 480 ); //imageReflectionContext.fillRect( 0, 0, 480, 204 );

    renderer.render( scene, camera );
}
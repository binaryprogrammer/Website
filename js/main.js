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
        else if (intersects.object == infinityMesh)
        {
            //switchVideos
        }
        else if (intersects.object == schoolDemoMesh)
        {
            //switchVideos
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
            hideAll();
        }
        else if (intersect.object == gamesMesh)
        {
            console.log("games clicked");
            hideAll();
            displayGames();
        }
        else if (intersect.object == bioMesh)
        {
            console.log("bio clicked");
            hideAll();
            showBio();
        }
        else if (intersect.object == resumeMesh)
        {
            console.log("resume clicked");
            hideAll();
            showResume();
        }
        else if (intersect.object == pdfMesh)
        {
            window.open("/downloads/Nathan_Moore_Resume.pdf");
        }
        else if (intersect.object == linkedInMesh)
        {
            console.log("linkedIn clicked");
            window.open("https://www.linkedin.com/in/binaryprogrammer");
        }
        else if (intersect.object == twitterMesh)
        {
            console.log("twitter clicked");
            window.open("https://twitter.com/binaryprogramer");
        }
        else if (intersect.object == gitHubMesh)
        {
            console.log("github clicked");
            window.open("https://github.com/binaryprogrammer");
        }
        else if (intersect.object == playInfinityMesh)
        {
            console.log("play Infinity");
            //TODO: open infinity in new window
        }
    }
}

function hideAll()
{
    hideGames();
    hideResume();
    hideBio();
}

//
function animate() 
{
    //setTimeout( function() {
        if ( !document.webkitHidden ) 
            requestAnimationFrame( animate ); //requestAnimationFrame( animate ); //Was
    //}, 1000 / 30 ); //30fps

    render();
    if (displayStats)
        stats.update();
}

function render() 
{
    camera.position.x += ( mouse.x - camera.position.x ) * 0.05; //was mouseX
    camera.position.y += ( - mouse.y - camera.position.y ) * 0.05; //was mouseY
    camera.lookAt(camTarget);
    
    //TODO: move the particles down and fade them out.
    for ( var i = 0; i < particles.children.length; i++) 
    {
        particles.children[i].position.y -= particleSpeed[i]/2;
        particles.children[i].material.opacity -= particleFade[i];
        if (particles.children[i].material.opacity <= 0)
        {
            //particles.children[i].position.y += window.innerHeight/4;
            particles.children[i].position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;
            particles.children[i].position.y = Math.random() * window.innerHeight * 2 - window.innerHeight;
            particles.children[i].position.z = Math.random() * 1800 - 1000;
            particleFade[i] *= -1;
        }
        else if (particles.children[i].material.opacity>= 1)
        {
            particleFade[i] *= -1;
        }
    }
    //particles.rotation.y += .0001;

    if (imageReflectionContext != null)
    {
        if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
        {
            imageContext.drawImage( video, 0, 0 );

            if ( texture ) texture.needsUpdate = true;
            if ( textureReflection ) textureReflection.needsUpdate = true;
        }

        imageReflectionContext.drawImage( image, 0, 0 );
        imageReflectionContext.fillStyle = imageReflectionGradient;
        imageReflectionContext.fillRect( 0, 0, 720, 480 ); //imageReflectionContext.fillRect( 0, 0, 480, 204 );
    }

    renderer.render( scene, camera );
    //requestAnimationFrame(animate, renderer.domElement);
}
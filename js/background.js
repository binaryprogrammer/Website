function createBackgroundParticles()
{
    var texture0 = THREE.ImageUtils.loadTexture("img/0.png");
    texture0.flipY = true;
    texture0.needsUpdate = true;
    
    var material0 = new THREE.SpriteMaterial( { map: texture0, transparent: true } );
    
    var texture1 = THREE.ImageUtils.loadTexture("img/1.png");
    texture1.flipY = true;
    texture1.needsUpdate = true;
    
    var material1 = new THREE.SpriteMaterial( { map: texture1, transparent: true } );
    
    particles = new THREE.Group();
    //particles = new THREE.Object3D(); //Doesn't seem to affect speed any.
    particleSpeed = [];
    particleLifetime = [];
    scene.add( particles );
    for ( var i = 0; i < 80; i ++ ) //Make how many spawn based off screen resolution
    {
        //TODO: make sure none of these spawn in front of the content.
        var particle0 = new THREE.Sprite( material0 );
        particle0.position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;
        particle0.position.y = Math.random() * window.innerHeight * 2 - window.innerHeight;
        particle0.position.z = Math.random() * 1800 - 1000;
        particle0.scale.x = particle0.scale.y = Math.random() * 20 + 20;
        particles.add( particle0 );
        particleSpeed.push(Math.random());
        particleLifetime.push(Math.random() * 20);
        
        var particle1 = new THREE.Sprite( material1 );
        particle1.position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;
        particle1.position.y = Math.random() * window.innerHeight * 2 - window.innerHeight;
        particle1.position.z = Math.random() * 1800 - 1000;
        particle1.scale.x = particle1.scale.y = Math.random() * 20 + 20;
        particles.add( particle1 );
        particleSpeed.push(Math.random());
        particleLifetime.push(Math.random() * 20);
        
        //TODO: animate the numbers in and out.
    }
}

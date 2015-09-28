var particleGeom, particles, particleSpeed, particleLifetime, particleFade;

function createBackgroundParticles()
{
    
    
    particles = new THREE.Group();
    //particleGeom = new THREE.Geometry();

    //var mesh = new THREE.Mesh(new THREE.CubeGeometry(10,10,10), new THREE.MeshNormalMaterial());
    //mesh.position.x = 30;
    //mesh.rotation.y = Math.PI/3;
    //THREE.GeometryUtils.merge(geometry, mesh);

    particleSpeed = [];
    particleLifetime = [];
    particleFade = [];
    scene.add( particles );

    //Make particle 0
    /*var particle0 = new THREE.Sprite( material0 );
    particle0.scale.x = particle0.scale.y = Math.random() * 20 + 20;

    //Make particle 1
    var particle1 = new THREE.Sprite( material1 );
    particle1.scale.x = particle1.scale.y = Math.random() * 20 + 20;*/

    for ( var i = 0; i < 40; i ++ ) //Make how many spawn based off screen resolution
    {
        var texture0 = THREE.ImageUtils.loadTexture("img/0.png");
        texture0.flipY = true;
        texture0.needsUpdate = true;
        
        var material0 = new THREE.SpriteMaterial( { map: texture0, transparent: true } );
        
        var texture1 = THREE.ImageUtils.loadTexture("img/1.png");
        texture1.flipY = true;
        texture1.needsUpdate = true;
        
        var material1 = new THREE.SpriteMaterial( { map: texture1, transparent: true } );

        //TODO: make sure none of these spawn in front of the content.
        //var particle = particle0.clone();
        var particle = new THREE.Sprite( material0 );
        particle.scale.x = particle.scale.y = Math.random() * 20 + 20;
        particle.position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;
        particle.position.y = Math.random() * window.innerHeight * 2 - window.innerHeight;
        particle.position.z = Math.random() * 1800 - 1000;
        particle.material.opacity = Math.random();
        particles.add( particle );
        particleSpeed.push(Math.random());
        particleLifetime.push(Math.random() * 20);

        if (Math.random() >= .5)
            particleFade.push(-Math.random()/1000);
        else
            particleFade.push(Math.random()/1000);
        
        //particle = particle1.clone();
        particle = new THREE.Sprite( material1 );
        particle.scale.x = particle.scale.y = Math.random() * 20 + 20;
        particle.position.x = Math.random() * window.innerWidth * 2 - window.innerWidth;
        particle.position.y = Math.random() * window.innerHeight * 2 - window.innerHeight;
        particle.position.z = Math.random() * 1800 - 1000;
        particle.material.opacity = Math.random();
        particles.add( particle );
        particleSpeed.push(Math.random());
        particleLifetime.push(Math.random() * 20);

        if (Math.random() >= .5)
            particleFade.push(-Math.random()/1000);
        else
            particleFade.push(Math.random()/1000);
        
        //TODO: animate the numbers in and out.
    }
}

function displayBackgroundLogo()
{
    var tex = THREE.ImageUtils.loadTexture( "img/logo.png" );
    var mat = new THREE.MeshBasicMaterial( { map: tex, transparent: true, depthWrite: false } );
    var geom = new THREE.PlaneGeometry(300, 300, 1, 1);
    var mesh = new THREE.Mesh( geom, mat );
    mesh.scale.set(4,4,1.0);
    mesh.position.set(0, 0, -100);
    scene.add(mesh);
}

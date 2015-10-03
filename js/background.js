var totalParticles = 40;
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

    var loader = new THREE.TextureLoader();
    loader.load( 'img/0.png', 
        function ( texture ) //Texture has finished loading
        {
            for (var i = 0; i < totalParticles/2; ++i) //Only half the particles are 0.
            {
                texture.flipY = true;
                texture.needsUpdate = true;

                newBackgroundParticle(new THREE.SpriteMaterial( { map: texture, transparent: true } ));
            }
        }
    );

    loader.load( 'img/1.png', 
        function ( texture ) //texture has finished loading
        {
            for (var i = 0; i < totalParticles/2; ++i) //Only half the particles are 0.
            {
                texture.flipY = true;
                texture.needsUpdate = true;

                newBackgroundParticle(new THREE.SpriteMaterial( { map: texture, transparent: true } ));
            }        
        }
    );
}

function newBackgroundParticle(mat)
{
    var particle = new THREE.Sprite( mat );
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
}

function displayBackgroundLogo()
{
    var loader = new THREE.TextureLoader();
    loader.load( 'img/logo.png', 
        function ( texture ) 
        {
            var geom = new THREE.PlaneGeometry(300, 300, 1, 1);

            var mat = new THREE.MeshBasicMaterial( { map: texture, transparent: true, depthWrite: false } );
            var mesh = new THREE.Mesh( geom, mat );
            mesh.scale.set(4,4,1.0);
            mesh.position.set(0, 0, -100);
            scene.add(mesh);
        }
    );
}



var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 200;
var controls = new THREE.OrbitControls(camera);
controls.minDistance = 20;
controls.maxDistance = 200;



var mercury = crearPlanetaPro(2,24,24,'images/mercuryTexture.png',null,'images/mercurybump.jpg',12,0,0);
hacerAnillo(20, 0.07, 480, 0x757064, 0);
var venus = crearPlaneta(3,24,24,'images/venusTextura.jpg',12,0,0);
hacerAnillo(30, 0.07, 480, 0x757064, 0);
var earth = crearPlanetaPro(7, 24, 24, 'images/earthmap1k.jpg','images/earthspec1k.jpg','images/earthbump1k.jpg',12,0,0);
var nubes = crearNubes(7, 24, 24,'images/Earth-Clouds2700.png');
hacerAnillo(42, 0.07, 480, 0x757064, 0);
var moon = crearPlaneta(1,24,24,'images/lunaTextura.jpeg',12,2,0);
var marte = crearPlanetaPro(5,24,24,'images/marsmap1k.jpg',null,'images/marsbump1k.jpg',12,0,0);
hacerAnillo(55, 0.07, 480, 0x757064, 0);
var jupiter = crearPlaneta(8,24,24,'images/jupitermap.jpg',12,0,0);
hacerAnillo(73, 0.07, 480, 0x757064, 0);

var moon1 = crearPlaneta(1,24,24,'images/lunaTextura.jpeg',12,2,0);
var moon2 = crearPlaneta(0.4,24,24,'images/lunaTextura.jpeg',12,2,0);
var moon3 = crearPlaneta(0.3,24,24,'images/lunaTextura.jpeg',12,2,0);
var moon4 = crearPlaneta(0.8,24,24,'images/lunaTextura.jpeg',12,2,0);
var moon5 = crearPlaneta(0.7,24,24,'images/lunaTextura.jpeg',12,2,0);
var moon6 = crearPlaneta(1,24,24,'images/lunaTextura.jpeg',12,2,0);


var saturn = crearPlaneta(6,24,24,'images/saturnTextura.jpeg',12,0,0);
hacerAnillo(100, 0.07, 480, 0x757064, 0);

var satringGeometry = new THREE.RingGeometry(7, 8, 480);
var sattexture = new THREE.TextureLoader().load('images/anillo.jpg');
var satringMaterial = new THREE.MeshBasicMaterial({map:sattexture, side: THREE.DoubleSide});
var satRing = new THREE.Mesh(satringGeometry, satringMaterial);
satRing.position.set(100, 100, 0);
//satRing.rotation.z = Math.PI / 2;
scene.add(satRing);

var satringGeometry1 = new THREE.RingGeometry(8.1, 9, 480);
var sattexture1 = new THREE.TextureLoader().load('images/anillo1.jpeg');
var satringMaterial1 = new THREE.MeshBasicMaterial({map:sattexture1, side: THREE.DoubleSide});
var satRing1 = new THREE.Mesh(satringGeometry1, satringMaterial1);
satRing1.position.set(100, 100, 0);
//myRing.rotation.z = Math.PI / 2;
scene.add(satRing1);

var satringGeometry2 = new THREE.RingGeometry(9.1, 10.5, 480);
var sattexture2 = new THREE.TextureLoader().load('images/anillo2.jpeg');
var satringMaterial2 = new THREE.MeshBasicMaterial({map:sattexture2, side: THREE.DoubleSide});
var satRing2 = new THREE.Mesh(satringGeometry2, satringMaterial2);
satRing2.position.set(100, 100, 0);
//myRing.rotation.z = Math.PI / 2;
scene.add(satRing2);

var uranus = crearPlaneta(4.5,24,24,'images/uranusTextura.jpeg',12,0,0);
hacerAnillo(125, 0.07, 480, 0x757064, 0);
var neptune = crearPlaneta(4.3,24,24,'images/neptuneTextura.jpg',12,0,0);
hacerAnillo(150, 0.07, 480, 0x757064, 0);
var pluto = crearPlanetaPro(4,24,24,'images/plutomap1k.jpg',null,'images/plutobump1k.jpg',12,0,0);
hacerAnillo(140, 0.07, 480, 0x757064, 0);



var geometrySol = new THREE.SphereGeometry(15, 24, 24);
var textureSol = new THREE.TextureLoader().load('images/solTextura.jpeg');
var materialSol = new THREE.MeshBasicMaterial({ map: textureSol });
var sun = new THREE.Mesh(geometrySol, materialSol);

var sphereGeom =  new THREE.SphereGeometry( 17, 10, 16 );
var amarilloMaterial = new THREE.MeshBasicMaterial( { color: 0xff9900, transparent: true, opacity: 0.1 } );
var brilloAmarillo = new THREE.Mesh( sphereGeom, amarilloMaterial );

var sphereGeom1 =  new THREE.SphereGeometry( 17, 10, 16 );
var rojoMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, transparent: true, opacity: 0.1 } );
var brillorojo = new THREE.Mesh( sphereGeom1, rojoMaterial );

var sphereGeom2 =  new THREE.SphereGeometry( 17, 10, 16 );
var naranjaMaterial = new THREE.MeshBasicMaterial( { color: 0xff6600, transparent: true, opacity: 0.5 } );
var brillonaranja = new THREE.Mesh( sphereGeom2, naranjaMaterial );

light = new THREE.PointLight(0xb4e7f2, 4);
light.angle = Math.PI / 2;
light.position.set(0, 0, 0);
scene.add(light)

scene.add(sun);
scene.add(brillorojo);
scene.add(brilloAmarillo);
scene.add(brillonaranja);
time = 0;



var urls = ['images/stars.png', 'images/stars.png', 'images/stars.png', 'images/stars.png', 'images/stars.png', 'images/stars.png'];
textureCube = new THREE.CubeTextureLoader().load(urls);
textureCube.format = THREE.RGBFormat;
scene.background = textureCube;



var render = function () {
    requestAnimationFrame(render);

    time += 0.01;

    earth.rotation.x += 0.0;
    earth.rotation.y += 0.01;
    moon.rotation.x += 0.0;
    moon.rotation.y += 0.01;
    mercury.rotation.x += 0.0;
    mercury.rotation.y += 0.05;
    venus.rotation.x += 0.0;
    venus.rotation.y += 0.03;
    marte.rotation.x += 0.0;
    marte.rotation.y += 0.01;
    sun.rotation.x += 0.0;
    sun.rotation.y += 0.01;
    satRing.rotation.y +=  0.001*Math.PI / 2;
    satRing1.rotation.y += 0.001 *Math.PI / 2;
    satRing2.rotation.y +=  0.001*Math.PI / 2;




    brillorojo.rotation.x -= 0.05;
    brillorojo.rotation.y -= 0.01;

    brilloAmarillo.rotation.x -= 0.01;
    brilloAmarillo.rotation.y -= 0.06;

    brillonaranja.rotation.x += 0.01;
    brillonaranja.rotation.z += 0.06;

    mercury.position.x= 20 * Math.cos(time*2);
    mercury.position.y = 20 * Math.sin(time*2);

    venus.position.x= 30  * Math.cos(time*1.5);
    venus.position.y = 30 * Math.sin(time*1.5);

    earth.position.x = 42 * Math.cos(time*1.2);
    earth.position.y = 42 * Math.sin(time*1.2);

    nubes.position.x = 42 * Math.cos(time*1.2);
    nubes.position.y = 42 * Math.sin(time*1.2);


    moon.position.x = 10 * Math.cos(time * 2) + earth.position.x;
    moon.position.y = 10 * Math.sin(time * 2) + earth.position.y;

    marte.position.x= 55 * Math.cos(time*1.6);
    marte.position.y = 55 * Math.sin(time*1.6);

    jupiter.position.x= 73 * Math.cos(time*1.7);
    jupiter.position.y = 73 * Math.sin(time*1.7);
    moon1.position.x = 10 * Math.cos(time * 2) + jupiter.position.x;
    moon1.position.y = 10 * Math.sin(time * 2) + jupiter.position.y;
    moon2.position.x = 10 * Math.cos(time * 1.1) + jupiter.position.x;
    moon2.position.y = 10 * Math.sin(time * 1.1) + jupiter.position.y;
    moon3.position.x = 10 * Math.cos(time * 1.3) + jupiter.position.x;
    moon3.position.y = 10 * Math.sin(time * 1.3) + jupiter.position.y;
    moon4.position.x = 10 * Math.cos(time * 1.7) + jupiter.position.x;
    moon4.position.y = 10 * Math.sin(time * 1.7) + jupiter.position.y;
    moon5.position.x = 10 * Math.cos(time * 1.4) + jupiter.position.x;
    moon5.position.y = 10 * Math.sin(time * 1.4) + jupiter.position.y;
    moon6.position.x = 10 * Math.cos(time * 1.5) + jupiter.position.x;
    moon6.position.y = 10 * Math.sin(time * 1.5) + jupiter.position.y;



    saturn.position.x= 100 * Math.cos(time);
    saturn.position.y = 100 * Math.sin(time);
    satRing.position.x= 100 * Math.cos(time);
    satRing.position.y = 100 * Math.sin(time);
    satRing1.position.x= 100 * Math.cos(time);
    satRing1.position.y = 100 * Math.sin(time);
    satRing2.position.x= 100 * Math.cos(time);
    satRing2.position.y = 100 * Math.sin(time);
    //saturn.position.z = 130 * Math.sin(time);

    uranus.position.x= 125 * Math.cos(time*1.5);
    uranus.position.y = 125 * Math.sin(time*1.5);

    neptune.position.x= 140 * Math.cos(time*1.1);
    neptune.position.y = 140 * Math.sin(time*1.1);

    pluto.position.x= 150 * Math.cos(time*1.3);
    pluto.position.y = 150 * Math.sin(time*1.3);

    renderer.render(scene, camera);
};

function crearPlaneta(radioEsfera, anchoEsfera, altoEsfera, pathTextura, posicionX, posicionY, posicionZ) {
    var geometry = new THREE.SphereGeometry(radioEsfera, anchoEsfera, altoEsfera);
    var texture = new THREE.TextureLoader().load(pathTextura);
    var material = new THREE.MeshStandardMaterial({ map: texture });
    //var material = new THREE.MeshBasicMaterial({ map: texture });
    var planeta = new THREE.Mesh(geometry, material);
    if (posicionX != 0) { planeta.position.x = posicionX; }

    if (posicionY != 0) { planeta.position.y = posicionY; }

    if (posicionZ != 0) { planeta.position.z = posicionZ; }

    scene.add(planeta);
    return planeta;
}

function    crearPlanetaPro(radioEsfera, anchoEsfera, altoEsfera, pathTextura,pathEspec,pathBump, posicionX, posicionY, posicionZ) {
    var geometry = new THREE.SphereGeometry(radioEsfera, anchoEsfera, altoEsfera);
    //var material = new THREE.MeshBasicMaterial({ map: texture });
        var Color = THREE.ImageUtils.loadTexture( pathTextura );
        var Bump =  THREE.ImageUtils.loadTexture( pathBump )
        if(pathEspec != null)
        {
            var Specular = THREE.ImageUtils.loadTexture( pathEspec );
            mappedTexture = new THREE.MeshPhongMaterial( { color: 0xffffff, map: Color, specular: 0xffffff, specularMap: Specular, bumpMap: Bump, bumpScale: 20, shading: THREE.SmoothShading, emissive: 0x111111} );
        }
        else{
            mappedTexture = new THREE.MeshPhongMaterial( { color: 0xffffff, map: Color, specular: 0xffffff, bumpMap: Bump, bumpScale: 20, shading: THREE.SmoothShading, emissive: 0x111111} );
        }



    var planeta = new THREE.Mesh(geometry, mappedTexture);
    if (posicionX != 0) { planeta.position.x = posicionX; }

    if (posicionY != 0) { planeta.position.y = posicionY; }

    if (posicionZ != 0) { planeta.position.z = posicionZ; }

    scene.add(planeta);
    return planeta;
}

function crearNubes(radioEsfera, anchoEsfera, altoEsfera,pathTextura){
    var geometry = new THREE.SphereGeometry(radioEsfera + 0.2, anchoEsfera, altoEsfera);
    var Clouds = THREE.ImageUtils.loadTexture( pathTextura );
    skyTexture = new THREE.MeshPhongMaterial( { color: 0xffffff, map: Clouds, transparent: true, bumpMap: Clouds, bumpScale: 2, shading: THREE.SmoothShading} );
    skyTexture.blending = THREE["CustomBlending"];
    skyTexture.blendSrc = THREE["SrcAlphaFactor"];
	skyTexture.blendDst = THREE["SrcAlphaFactor"];
    skyTexture.blendEquation = THREE.AddEquation;
    sky = new THREE.Mesh( geometry, skyTexture );
    scene.add( sky );
    return sky;
}

function hacerAnillo(size, innerDiameter, facets, myColor, distanceFromAxis) {
    var ringGeometry = new THREE.RingGeometry(size, size+innerDiameter, facets);
    var ringMaterial = new THREE.MeshBasicMaterial({color: myColor, side: THREE.DoubleSide});
    var myRing = new THREE.Mesh(ringGeometry, ringMaterial);
    myRing.position.set(distanceFromAxis, 0, 0);
    //myRing.rotation.z = Math.PI / 2;
    scene.add(myRing);
    return myRing;
}


render();

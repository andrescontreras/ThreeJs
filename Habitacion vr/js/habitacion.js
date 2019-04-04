var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var t = 0;
var intencidad = 0.8;
var effect;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 50;
camera.position.y=50;
camera.position.z=1;
camera.position.y=1;
//var controls = new THREE.OrbitControls(camera);
//controls.minDistance = 20;
//controls.maxDistance = 200;

crearPared(70,15,-20,0,0,0,Math.PI / 2,0,parseInt('0xccffcc'),'images/wall_texture.jpg');//Pared izquierda
crearPared(70,15,20,0,0,0,Math.PI / 2,0,parseInt('0xccffcc'),'images/wall_texture.jpg');//Pared derecha
crearPared(40,15,0,0,-35,0,0,0,parseInt('0xccffcc'),'images/wall_texture.jpg');//Pared adelante
crearPared(40,15,0,0,35,0,0,0,parseInt('0xccffcc'),'images/wall_texture.jpg');//Pared atras
crearPared(40,70,0,-7.5,0,Math.PI/ 2,0,0,parseInt('FA8072'),'images/floor_texture.jpg'); //Piso
crearPared(10,10,-19.9,1,0,0,Math.PI/ 2,0,parseInt('FA8072'),'images/atari.png'); //Poster atari
crearPared(10,10,-19.9,1,20,0,Math.PI/ 2,0,parseInt('FA8072'),'images/window_texture.jpg'); //Ventana izquierda
crearPared(10,10,19.9,1,-20,0,Math.PI/ 2,0,parseInt('FA8072'),'images/window_texture.jpg'); //Ventana derecha
crearPared(10,15,0,0,34.9,0,0,0,parseInt('FA8072'),'images/door_texture.jpg'); //Puerta

/*
var geometry = new THREE.PlaneGeometry( 50, 50);
   var texture = new THREE.TextureLoader().load('images/wall_texture.jpg');
var material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
var plane = new THREE.Mesh( geometry, material );
plane.position.x=-40;   
scene.add(plane);
*/

var geometry = new THREE.PlaneGeometry(3, 3, 3 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.position.set(3,5,-34.5);
    plane.name = "switch";
    scene.add(plane);

    var light = new THREE.PointLight( 0xb4e7f2, intencidad );
    light.position.set( -6, 10, -28 );
    scene.add( light );

    var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(1,3,-33.5);
scene.add( cube );

effect = new THREE.StereoEffect( renderer );
effect.setSize( window.innerWidth, window.innerHeight );
var controls = new THREE.DeviceOrientationControls(camera);

var render = function () {
    requestAnimationFrame(render);
    raycaster.setFromCamera( mouse, camera );

    // calculate objects intersecting the picking ray
    var intersects = raycaster.intersectObjects( scene.children);
    if(intersects.length>0) {
      if(intersects[0].object.name=="switch")
      {
        if(t > 200)
        {
         console.log("ENTRO SWICTH");
         intencidad = intencidad * -1
         light.intensity = intencidad;
         
         t = 0;
        }
        t++;
      }   
    }else{t=0;}
    //renderer.render( scene, camera );
    controls.update();
    effect.render( scene, camera );
    t++;
  };
  window.addEventListener( 'mousemove', onMouseMove, false );
   
    renderer.render(scene, camera);
    function onMouseMove( event ) {
        // calculate mouse position in normalized device coordinates
        // (-1 to +1) for both components
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        }
render();
window.addEventListener('mousemove', onMouseMove, false); 

function crearPared(width, height,positionX,positionY,positionZ,rotationX,rotationY,rotationZ,colorPared,textura){
    /*
    var geometry = new THREE.PlaneGeometry( 15, 15);
    var material = new THREE.MeshBasicMaterial( {color: 0xccffcc, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.position.x=50;
    plane.rotation.y = Math.PI / 2;
    scene.add( plane );
    */
   var geometry = new THREE.PlaneGeometry( width, height);
   var texture = new THREE.TextureLoader().load(textura);
    //var material = new THREE.MeshStandardMaterial({ map: texture });
    //var material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
    var material = new THREE.MeshBasicMaterial( {map: texture, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    if(positionX!=0){plane.position.x=positionX;}
    if(positionY!=0){plane.position.y=positionY;}
    if(positionZ!=0){plane.position.z=positionZ;}

    if(rotationX!=0){plane.rotation.x = rotationX;}
    if(rotationY!=0){plane.rotation.y = rotationY;}
    if(rotationZ!=0){plane.rotation.z = rotationZ;}

    scene.add( plane );
}
function randomHex() {
    var hexNumbers = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        'A',
        'B',
        'C',
        'D',
        'E',
        'F'
    ]
    // picking a random item of the array
    return hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
}
function color() {
    hexValue = ['0x'];
    for (var i = 0; i < 6; i += 1) {
        hexValue.push(randomHex());
    }
    return parseInt(hexValue.join(''));
}
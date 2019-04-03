var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var t = 0;
var intencidad = 0.8;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 20;
var controls = new THREE.OrbitControls(camera);
controls.minDistance = 20;
controls.maxDistance = 200;




 //Simple A-frame roof
 var roofVertices = [
    new THREE.Vector3(0, 10, 0), new THREE.Vector3(10, 15, 0), new THREE.Vector3(20, 10, 0),
    new THREE.Vector3(20, 10, 20), new THREE.Vector3(10, 15, 20), new THREE.Vector3(0, 10, 20)
];

var material = new THREE.MeshBasicMaterial({
    color: 0xccffcc,
    side: THREE.DoubleSide
});

for (var i = 0; i < roofVertices.length; i++) {

    var v1 = roofVertices[i];
    var v2 = roofVertices[(i + 1) % roofVertices.length];//wrap last vertex back to start

    var wallGeometry = new THREE.Geometry();

    wallGeometry.vertices = [
        v1,
        v2,
        new THREE.Vector3(v1.x, 0, v1.z),
        new THREE.Vector3(v2.x, 0, v2.z)
    ];

    //always the same for simple 2-triangle plane
    wallGeometry.faces = [new THREE.Face3(0, 1, 2), new THREE.Face3(1, 2, 3)];

    wallGeometry.computeFaceNormals();
    wallGeometry.computeVertexNormals();

    var wallMesh = new THREE.Mesh(wallGeometry, material);

    scene.add(wallMesh);


    
}
var geometry = new THREE.PlaneGeometry(3, 3, 3 );
    var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.position.set(3,5,1);
    plane.name = "switch";
    scene.add(plane);

    var light = new THREE.PointLight( 0xb4e7f2, intencidad );
    light.position.set( 6, 6, 6 );
    scene.add( light );

    var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshLambertMaterial( {color: 0x00ff00} );
var cube = new THREE.Mesh( geometry, material );
cube.position.set(3,3,3);
scene.add( cube );

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
    //controls.update();
    renderer.render( scene, camera );
    //effect.render( scene, camera );
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


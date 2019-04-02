var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 20;
var controls = new THREE.OrbitControls(camera);
controls.minDistance = 20;
controls.maxDistance = 200;



var render = function () {
    requestAnimationFrame(render);
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
    renderer.render(scene, camera);
};



render();


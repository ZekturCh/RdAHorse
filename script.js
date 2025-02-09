// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// Add AR Button
document.body.appendChild(THREE.ARButton.createButton(renderer));
import { ARButton } from 'https://cdn.jsdelivr.net/npm/three@0.128/examples/jsm/webxr/ARButton.js';

document.body.appendChild(ARButton.createButton(renderer));


// Load 3D Car Model
const loader = new THREE.GLTFLoader();
loader.load('./assets/car_model.glb', function (gltf) {
    const car = gltf.scene;
    car.scale.set(1, 1, 1); // Adjust size
    car.position.set(0, 0, -2); // Place in front
    scene.add(car);
});

// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);

// Animate Scene
function animate() {
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
}
animate();

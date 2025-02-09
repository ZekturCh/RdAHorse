import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js';
import { ARButton } from 'https://cdn.jsdelivr.net/npm/three@0.160/examples/jsm/webxr/ARButton.js';

// 1️⃣ Crear el renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.xr.enabled = true;
document.body.appendChild(renderer.domElement);

// 2️⃣ Agregar el botón de entrada a AR
document.body.appendChild(ARButton.createButton(renderer));

// 3️⃣ Crear la escena y la cámara
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.6, 3); // Ajustar posición inicial

// 4️⃣ Agregar una luz ambiental
const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
scene.add(light);

// 5️⃣ Crear un cubo flotante
const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
cube.position.set(0, 0, -2); // Posición frente al usuario
scene.add(cube);

// 6️⃣ Animación y renderizado
function animate() {
    renderer.setAnimationLoop(() => {
        cube.rotation.y += 0.01; // Rotar el cubo lentamente
        renderer.render(scene, camera);
    });
}

animate();

import * as THREE from "three";

//Constant values
let DISPLACEMENT_PATH =
  "https://res.cloudinary.com/dg5nsedzw/image/upload/v1641657200/blog/vaporwave-threejs-textures/displacement.png";

const scene = new THREE.Scene();

//Setting up fog
const fog = new THREE.Fog("#000000", 1, 2.5);
scene.fog = fog;

//Setting up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.PlaneGeometry(2, 2, 24, 24);

//Adding the displacement texture
const textureLoader = new THREE.TextureLoader();
const terrainTexture = textureLoader.load(DISPLACEMENT_PATH);

//Creating the plane meshes
const terrainWireframe = new THREE.MeshStandardMaterial({
  color: 0xff61c6,
  wireframe: true,
  displacementMap: terrainTexture,
  displacementScale: 0.4,
});
const terrainFlat = new THREE.MeshStandardMaterial({
  color: 0x0a0c37,
  displacementMap: terrainTexture,
  displacementScale: 0.4,
});

//Adding the planes to the scene
const plane = new THREE.Mesh(geometry, terrainFlat);
const wires = new THREE.Mesh(geometry, terrainWireframe);
const plane2 = new THREE.Mesh(geometry, terrainFlat);
const wires2 = new THREE.Mesh(geometry, terrainWireframe);
wires.position.z = 0.01;
wires2.position.z = 0.01;
scene.add(plane);
scene.add(wires);
scene.add(plane2);
scene.add(wires2);

//Creating light and camera
const ambientLight = new THREE.AmbientLight("#ffffff", 10);
scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.y = -1;
camera.position.z = 0.2;
camera.rotation.x = Math.PI / 2;

const clock = new THREE.Clock();

//Required animation loop
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getElapsedTime();

  plane.position.y = -(delta * 0.5) % 2;
  wires.position.y = -(delta * 0.5) % 2;
  plane2.position.y = -((delta * 0.5) % 2) + 2;
  wires2.position.y = -((delta * 0.5) % 2) + 2;

  renderer.render(scene, camera);
}

animate();

//React component to export
export function mount(container) {
  if (container) {
    container.insertBefore(renderer.domElement, container.firstChild);
  } else {
    renderer.domElement.remove();
  }
}

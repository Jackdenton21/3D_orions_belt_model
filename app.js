import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function createStar(radius, color, position, name) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: color });
    const star = new THREE.Mesh(geometry, material);
    star.position.set(position.x, position.y, position.z);
    star.name = name;
    scene.add(star);
    return star;
}

function createLine(start, end) {
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const points = [];
    points.push(new THREE.Vector3(start.x, start.y, start.z));
    points.push(new THREE.Vector3(end.x, end.y, end.z));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
}

const betelgeuse = createStar(0.3, 0xff5733, { x: -3, y: 3, z: -2 }, 'betelgeuse'); // Red supergiant
const rigel = createStar(0.3, 0x3375ff, { x: 3, y: -4, z: 2 }, 'rigel'); // Blue supergiant
const bellatrix = createStar(0.2, 0xffffff, { x: 3, y: 3, z: -1 }, 'bellatrix'); // Massive blue giant
const saiph = createStar(0.2, 0xffffff, { x: -3, y: -4, z: 1 }, 'saiph'); // Bright giant star
const alnilam = createStar(0.25, 0xffffff, { x: 0, y: -1, z: 0 }, 'alnilam'); // Middle star of Orion's Belt
const mintaka = createStar(0.25, 0xffffff, { x: 1.5, y: -1, z: 0.5 }, 'mintaka'); // Western star of Orion's Belt
const alnitak = createStar(0.25, 0xffffff, { x: -1.5, y: -1, z: 0.5 }, 'alnitak'); // Eastern star of Orion's Belt
const meissa = createStar(0.2, 0xffffff, { x: 0, y: 5, z: -3 }, 'meissa'); // Star at the head of Orion
const tabit = createStar(0.15, 0xffffff, { x: 2, y: 0, z: 1 }, 'tabit'); // Star to the east of Orion's Belt
const pi3Orionis = createStar(0.197, 0xfff4c1, { x: 4, y: -2, z: 2 }, 'pi3Orionis'); // F-type giant
const pi2Orionis = createStar(0.159, 0xaabfff, { x: 4, y: -3, z: 1.5 }, 'pi2Orionis'); // B-type giant
const pi1Orionis = createStar(0.15, 0xaabfff, { x: 4, y: -4, z: 1 }, 'pi1Orionis'); // B-type main-sequence
const nuOrionis = createStar(0.157, 0xaabfff, { x: 2, y: 2, z: -1.5 }, 'nuOrionis'); // B-type giant
const xiOrionis = createStar(0.158, 0x9db4ff, { x: 1, y: -5, z: 0 }, 'xiOrion');


// Creating lines for Orion constellation
createLine(betelgeuse.position, bellatrix.position);
createLine(betelgeuse.position, alnitak.position);
createLine(bellatrix.position, mintaka.position);
createLine(alnitak.position, alnilam.position);
createLine(alnilam.position, mintaka.position);
createLine(mintaka.position, rigel.position);
createLine(alnitak.position, saiph.position);
createLine(meissa.position, bellatrix.position); 
createLine(mintaka.position, tabit.position); 
createLine(rigel.position, pi3Orionis.position);
createLine(pi3Orionis.position, pi2Orionis.position);
createLine(pi2Orionis.position, pi1Orionis.position);
createLine(bellatrix.position, nuOrionis.position);
createLine(saiph.position, xiOrionis.position);




for (let i = 0; i < 1000; i++) {
    createStar(0.05, 0xffffff, {
        x: THREE.MathUtils.randFloatSpread(200),
        y: THREE.MathUtils.randFloatSpread(200),
        z: THREE.MathUtils.randFloatSpread(200)
    });
}

camera.position.z = 15;

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

const topTextDiv = document.createElement('div');
topTextDiv.textContent = 'Orion Constellation 3D Model'; // You can change the text to whatever you need
topTextDiv.style.position = 'fixed';
topTextDiv.style.top = '10px';
topTextDiv.style.left = '0';
topTextDiv.style.width = '100%';
topTextDiv.style.textAlign = 'center';
topTextDiv.style.color = 'white';
topTextDiv.style.zIndex = '1000';
topTextDiv.style.fontWeight = 'bold'; // Makes the text bold
topTextDiv.style.fontSize = '20px'; // Increases the font size to 24px
document.body.appendChild(topTextDiv);

const textDiv = document.createElement('div');
textDiv.textContent = 'Made by Jack Denton for PHYS 183 The Milky Way Inside and Out';
textDiv.style.position = 'fixed';
textDiv.style.bottom = '10px';
textDiv.style.width = '100%';
textDiv.style.textAlign = 'center';
textDiv.style.zIndex = '1000';
textDiv.style.color = 'white';
textDiv.style.marginBottom = '10px';
textDiv.style.fontWeight = 'bold';
textDiv.style.fontSize = '18px';


document.body.appendChild(textDiv);

animate();

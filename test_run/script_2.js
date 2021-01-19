//import { OrbitControls } from "https://unpkg.com/three/examples/jsm/controls/OrbitControls.js";
"use strict";

function main() {
	// renderer
	const renderer = new THREE.WebGLRenderer({antialias: true});
	document.body.appendChild(renderer.domElement);

	const camera = new THREE.PerspectiveCamera(30, 800 / 600, 1, 10000);
	camera.position.set(3, 5, 7);
	camera.lookAt(new THREE.Vector3(0,0,0));

	//const controls = new OrbitControls( camera, renderer.domElement );

	const scene = new THREE.Scene();
	scene.add(new THREE.AmbientLight(0xFFFFFF,5));

	const loader = new THREE.GLTFLoader();
	loader.load("./Box.gltf", gltf => {
			scene.add(gltf.scene);
	});

	(function animate() {
		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	})();

} // end main
const obj_returned = main();

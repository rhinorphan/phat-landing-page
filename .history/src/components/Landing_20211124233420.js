import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { animateTopScroll } from 'react-scroll/modules/mixins/animate-scroll';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Landing = () => {

    function init() {
      var vertexHeight = 15000;
var planeDefinition = 100;
var planeSize = 1245000;
var totalObjects = 50000;
var frame = 60;

var container = document.getElementById('container');
document.appendChild(container);

var camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 400000)
camera.position.z = 50000;
camera.position.y = 15000;
camera.lookAt(new THREE.Vector3(0, 15900, 0));

var scene = new THREE.Scene();

var uniforms = {
  time: {
    type: "f",
    value: 0.0
  }
};

var material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  wireframe: true,
  fog:false
});

var plane = new THREE.Mesh(new THREE.PlaneGeometry(planeSize, planeSize, planeDefinition, planeDefinition), material);
plane.rotation.x -= Math.PI * .50;

scene.add(plane);

var geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < totalObjects; i++) {
  const x = Math.random() * planeSize - (planeSize * .5);
  const y = (Math.random() * 100000) + 10000;
  const z = Math.random() * planeSize - (planeSize * .5);
  vertices.push(x, y, z);
}

var material = new THREE.ParticleBasicMaterial({
  size: 400
});
var particles = new THREE.ParticleSystem(geometry, material);

scene.add(particles);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

render();

function render() {
  requestAnimationFrame(render);
  camera.position.z -= 150;
  uniforms.time.value = frame;
  frame += .03;
  //  dateVerts();
  renderer.render(scene, camera);
}
    }

    useEffect(() => {
        init();
    }, [])

  return (
    <div name="landing" id="container">
      <div class="flex flex-col items-center justify-center text-center overlay">
        <h2 class="chrome">
          Crypto Party HATS
        </h2>
        <h3 class="dreams">
        Games
        </h3>
        <h3 class="text-sm mb-2 mt-20 text-white md:text-l lg:text-xl">
        Join the revolution!
        </h3>

        <button class="m-2 mt-7 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500transition duration-300 hover:text-white pushable">
          <a className="front hover:bg-pink-400 " target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500 transition duration-300 hover:text-white pushable">
          <a className='hover:bg-pink-400 front' target="_blank" rel="noopener noreferrer" href="#"><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
    </div>
  )
}

export default Landing

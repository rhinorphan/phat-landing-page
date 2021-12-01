import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { animateTopScroll } from 'react-scroll/modules/mixins/animate-scroll';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Landing = () => {

    function init() {

      let container = document.getElementById('container');

      const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			container.appendChild( renderer.domElement );

			const geometry = new THREE.BoxGeometry();
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.01;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();
    }

    useEffect(() => {
        init();
    }, [])

  return (
    <div className="flex flex-col md:flex-row-reverse" name="landing">
      <div id="container" className="">
      </div>
      <div class="flex flex-col items-center justify-center mx-24 text-center">
        <h2 class="text-xl  font-bold mb-2 text-green-500 md:text-2xl lg:text-4xl">
          Community Arcade Cabinet
        </h2>
        <h3 class="text-l mb-2 text-gray-300 md:text-xl lg:text-2xl">
        With your beloved games.
        </h3>
        <h3 class="text-sm mb-2 text-green-500 md:text-l lg:text-xl">
        Join the revolution!
        </h3>

        <button class="m-2 mt-4 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500transition duration-300 hover:text-white pushable">
          <a className="front hover:bg-green-400 " target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500 transition duration-300 hover:text-white pushable">
          <a className='hover:bg-green-400 front' target="_blank" rel="noopener noreferrer" href="#"><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
    </div>
  )
}

export default Landing

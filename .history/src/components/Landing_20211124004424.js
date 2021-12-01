import React, { useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { animateTopScroll } from 'react-scroll/modules/mixins/animate-scroll';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Landing = () => {

  let scene, camera, renderer, stars, starGeo;

    function init() {

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI/2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      starGeo = new THREE.BoxGeometry();
      for(let i=0;i<6000;i++) {
        let star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }

      let sprite = new THREE.TextureLoader().load( 'star.png' );
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });

      stars = new THREE.Points(starGeo,starMaterial);
      scene.add(stars);

      window.addEventListener("resize", onWindowResize, false);

      animate(); 
    }
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
    function animate() {
      starGeo.vertices.forEach(p => {
        p.velocity += p.acceleration
        p.y -= p.velocity;
        
        if (p.y < -200) {
          p.y = 200;
          p.velocity = 0;
        }
      });
      starGeo.verticesNeedUpdate = true;
      stars.rotation.y +=0.002;
    
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    init();

  return (
    <div className="flex flex-col md:flex-row-reverse md:py-20 px-4" name="landing">
      <div id="container">
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

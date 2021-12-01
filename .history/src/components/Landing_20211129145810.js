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

      class Particles {
	
        constructor(options) {
      
              this.time = 0;
              this.mouseX = 0;
              this.mouseY = 0;
      
              this.container = options.dom;
              this.windowHalfX = window.innerWidth / 2;
              this.windowHalfY = window.innerHeight / 2;
      
              this.camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 2, 2000 );
              this.camera.position.z = 1000;
      
              this.scene = new THREE.Scene();
              this.scene.fog = new THREE.FogExp2( 0x000000, 0.001 );
      
              this.renderer = new THREE.WebGLRenderer( { antialias: true });
              this.renderer.setPixelRatio( window.devicePixelRatio );
              this.renderer.setSize( window.innerWidth, window.innerHeight );
      
              this.renderer.toneMapping = THREE.ReinhardToneMapping;
              this.container.appendChild( this.renderer.domElement );
      
              this.onResize();
              this.renderPass();
              this.composerEffect();
              this.addParticles();
              this.render();
      
          }
        
        addControlsMovement(){
      
              this.controls = new OrbitControls( this.camera, this.renderer.domElement );
              this.controls.maxDistance = 1500;
              this.controls.enableDamping = true;
      
          }
      
          renderPass(){
      
              this.renderScene = new RenderPass( this.scene, this.camera );
              this.bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
              this.bloomPass.threshold = 0;
              this.bloomPass.strength = 1.5;
              this.bloomPass.radius = 0;
      
          }
      
          composerEffect(){
      
              this.composer = new EffectComposer( this.renderer );
              this.composer.addPass( this.renderScene );
              this.composer.addPass( this.bloomPass );
      
          }
      
          addParticles(){
      
              this.geometry = new THREE.BufferGeometry();
              this.vertices = [];
              this.sprite = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/disc.png');
      
              for (let i = 0; i < 15000; i++) {
      
                  const x = 2000 * Math.random() - 1000;
                  const y = 2000 * Math.random() - 1000;
                  const z = 2000 * Math.random() - 1000;
      
                  this.vertices.push(x, y, z);
      
              }
              this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices, 3));
      
              this.material = new THREE.PointsMaterial({
                  size: 3,
                  sizeAttenuation: true,
                  map: this.sprite,
                  alphaTest: 0.5,
                  transparent: true
              });
              this.material.color.setHSL(1.0, 0.3, 0.7);
      
              this.particles = new THREE.Points(this.geometry, this.material);
              this.scene.add(this.particles);
      
          }
      
          render(){
      
              this.time = Date.now() * 0.00005;
              this.now = ( 360 * ( 1.0 + this.time ) % 360 ) / 360;
      
              this.material.color.setHSL( this.now, 0.5, 0.5 );
              this.bloomPass.strength = ( this.now > 0.5 ) ? 15 - ( this.now * 15 ) : this.now * 15;
          
          for ( let i = 0; i < this.scene.children.length; i ++ ) {
      
            const object = this.scene.children[i];
      
            if ( object instanceof THREE.Points ) {
              
              object.rotation.y = this.time * 0.5 * 0.5;      
            }
      
          }
      
              this.renderer.render( this.scene, this.camera );
              this.composer.render();
      
              window.requestAnimationFrame(this.render.bind(this));
      
          }
      
          onResize(){
      
              this.windowHalfX = window.innerWidth / 2;
              this.windowHalfY = window.innerHeight / 2;
      
              this.camera.aspect = window.innerWidth / window.innerHeight;
              this.camera.updateProjectionMatrix();
      
              this.renderer.setSize( window.innerWidth, window.innerHeight );
      
          }
      }
      
      new Particles({
          dom: document.getElementById('container')
      })
    }

    useEffect(() => {
        //init();
    }, [])

  return (
    <div name="landing" id="container">
      <div class="flex flex-col items-center justify-center text-center overlay">
        <img src={`${process.env.PUBLIC_URL}/assets/images/landing-logo.png`} className="landing__logo"/>
        <h3 class="text-sm mb-2 -mt-14 md:-mt-32 text-white md:text-l lg:text-xl">
        Join the revolution!
        </h3>

        <button class="m-2 mt-16 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500transition duration-300 hover:text-white pushable">
          <a className="front hover:bg-pink-400 " target="_blank" rel="noopener noreferrer" href="https://lionell-moore.gitbook.io/crypto-party-hats/introductions/what-is-party-hats">Whitepaper</a>
        </button>
        <button class="m-2 mt-4 bg-white rounded-full py-4 px-8 shadow-lg uppercase text-sm tracking-wider text-green-500 transition duration-300 hover:text-white pushable">
          <a className='hover:bg-pink-400 front' target="_blank" rel="noopener noreferrer" href=""><Link activeClass="active"
              to="community" spy={true} smooth={true} duration={500}>Learn More</Link></a>
        </button>
      </div>
    </div>
  )
}

export default Landing

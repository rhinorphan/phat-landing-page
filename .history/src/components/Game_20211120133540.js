import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GUI } from 'three/examples/jsm/libs/dat.gui.module';
import Stats from 'three/examples/jsm/libs/stats.module';
import SoldierAnim from './Soldier.glb';


const Game = () => {

  const loader = new GLTFLoader();

    var scene, renderer, camera, stats;
    var model, skeleton, mixer, clock;

    var crossFadeControls = [];

    var idleAction, walkAction, runAction;
    var idleWeight, walkWeight, runWeight;
    var actions, settings;

    var singleStepMode = false;
    var sizeOfNextStep = 0;

    function init() {

        var container = document.getElementById('container');

        camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.set(1, 2, - 3);
        camera.lookAt(0, 1, 0);

        clock = new THREE.Clock();

        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xa0a0a0);
        //Clearing background
        // scene.background = null;

        scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

        var hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 20, 0);
        scene.add(hemiLight);

        var dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(- 3, 10, - 10);
        dirLight.castShadow = true;
        dirLight.shadow.camera.top = 2;
        dirLight.shadow.camera.bottom = - 2;
        dirLight.shadow.camera.left = - 2;
        dirLight.shadow.camera.right = 2;
        dirLight.shadow.camera.near = 0.1;
        dirLight.shadow.camera.far = 40;
        scene.add(dirLight);

        // scene.add( new CameraHelper( light.shadow.camera ) );

        // ground
        var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(100, 100), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
        mesh.rotation.x = - Math.PI / 2;
        mesh.receiveShadow = true;
        scene.add(mesh);

        var loader = new GLTFLoader();
        loader.load(SoldierAnim, function (gltf) {
        // loader.load('model/Soldier.glb', function (gltf) {

            model = gltf.scene;
            scene.add(model);

            //Clearing background
            // scene.background = null;

            model.traverse(function (object) {
                if (object.isMesh) object.castShadow = true;
            });

            //

            skeleton = new THREE.SkeletonHelper(model);
            skeleton.visible = false;
            scene.add(skeleton);


            //

            var animations = gltf.animations;

            mixer = new THREE.AnimationMixer(model);

            idleAction = mixer.clipAction(animations[0]);
            walkAction = mixer.clipAction(animations[3]);
            runAction = mixer.clipAction(animations[1]);

            actions = [idleAction, walkAction, runAction];

            activateAllActions();

            animate();

        });

        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setClearColor(0xffffff, 0);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        stats = new Stats();
        container.appendChild(stats.dom);

        window.addEventListener('resize', onWindowResize, false);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        // Render loop
        requestAnimationFrame(animate);
        idleWeight = idleAction.getEffectiveWeight();
        walkWeight = walkAction.getEffectiveWeight();
        runWeight = runAction.getEffectiveWeight();

        // Update the panel values if weights are modified from "outside" (by crossfadings)
        updateWeightSliders();

        // Enable/disable crossfade controls according to current weight values
        updateCrossFadeControls();

        // Get the time elapsed since the last frame, used for mixer update (if not in single step mode)
        var mixerUpdateDelta = clock.getDelta();

        // If in single step mode, make one step and then do nothing (until the user clicks again)
        if (singleStepMode) {
            mixerUpdateDelta = sizeOfNextStep;
            sizeOfNextStep = 0;
        }

        // Update the animation mixer, the stats panel, and render this frame
        mixer.update(mixerUpdateDelta);
        stats.update();
        renderer.render(scene, camera);
    }

    
    useEffect(() => {
        init();
    }, [])

  return (
    <div id="container"></div>
  )
}

export default Game

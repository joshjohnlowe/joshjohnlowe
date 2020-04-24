import React from 'react';
import '../cool/main.scss';

// Oh shit here we go
import * as THREE from "three";

class Wee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            k: 1
        }
    }

    componentDidMount() {
        const width = this.mount.clientWidth
        const height = this.mount.clientHeight
        var Simplex = require('perlin-simplex')
        this.simplex = new Simplex()
        // SET UP
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(
            45,
            width / height,
            0.1,
            1000
        )

        var light = new THREE.HemisphereLight( 0xFFFFFF, 0x0000FF, 1.0 );
        var directionalLight = new THREE.DirectionalLight( 0x00FF00, 1.0 );
        var directionalLightTwo = new THREE.DirectionalLight( 0xFF0000, 1.0 );
        directionalLightTwo.position.set(0.8, -1, 1);
    
        this.scene.add(light, directionalLight, directionalLightTwo);
        this.scene.background = new THREE.Color( 0xD24012 );

        this.camera.position.set(0, 0, 5);
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        })
        this.renderer.setClearColor(0x000000, 0)
        this.renderer.setSize(width, height)
        this.mount.appendChild(this.renderer.domElement)

        // this.sphere_geometry = new THREE.SphereGeometry(1, 200, 200);
        this.sphere_geometry = new THREE.PlaneGeometry( 20, 20, 32, 32);

        var material = new THREE.MeshPhongMaterial( { 
            color: 0xFF00FF,
            // envMap: envMap, // optional environment map
            specular: 0x050505,
            shininess: 100
        } ) 
        
    

        this.sphere = new THREE.Mesh(this.sphere_geometry, material);

        this.sphere.position.z = 1;

        this.sphere_vertices = this.sphere.geometry.vertices;
        this.sphere_geometry = this.sphere.geometry;
        this.scene.add(this.sphere);
        this.start()
    }


    componentWillUnmount() {
        this.stop()
        this.mount.removeChild(this.renderer.domElement)
    }

    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate)
        }
    }

    stop = () => {
        cancelAnimationFrame(this.frameId)
    }

    update = () => {
        var time = performance.now() * this.props.blobSpeed;

        var k = this.props.k;

        for (var i = 0; i < this.sphere_vertices.length; i++) {
            var p = this.sphere_vertices[i];
            p.normalize().multiplyScalar(1 + this.props.amplitude * this.simplex.noise3d(p.x * k + time, p.y * k, p.z * k));
        }
        this.sphere_geometry.computeVertexNormals();
        this.sphere_geometry.normalsNeedUpdate = true;
        this.sphere_geometry.verticesNeedUpdate = true;
    }

    animate = () => {
        this.update();
        //this.sphere.rotation.x += this.props.blobSpeed;
        //this.sphere.rotation.y += this.props.blobSpeed;

        this.renderScene()
        this.frameId = window.requestAnimationFrame(this.animate)
    }
    renderScene = () => {
        this.renderer.render(this.scene, this.camera)
    }
    render() {
        return (<
            div className="threeDee"
            ref={
                (mount) => {
                    this.mount = mount
                }
            }
        />
        )
    }
}

export default Wee;
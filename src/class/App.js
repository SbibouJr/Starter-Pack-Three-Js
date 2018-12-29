import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  AmbientLight,
  TextureLoader,
} from 'three';
import image from '../assets/images/mystere.png';

class App {
  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new WebGLRenderer();
    this.loader = new TextureLoader();
  }

  run() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = 'three-container';
    document.body.appendChild(this.renderer.domElement);

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshStandardMaterial({ map: this.loader.load(image) });
    const cube = new Mesh(geometry, material);
    const light = new AmbientLight(0x404040, 4); // soft white light
    this.scene.add(cube);
    this.scene.add(light);

    this.camera.position.z = 5;
    function animate() {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      requestAnimationFrame(animate);
      this.renderer.render(this.scene, this.camera);
    }
    animate();
  }
}

export default App;

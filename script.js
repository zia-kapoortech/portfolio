window.scrollTo(0,0);
import * as THREE from "three";
const canvas = document.querySelector("#webgl");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
45,
window.innerWidth / window.innerHeight,
0.1,
100
);
camera.position.z = 6;
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha:true,
  antialias:true
});
renderer.setSize(
window.innerWidth,
window.innerHeight
);
renderer.setPixelRatio(
window.devicePixelRatio
);







// =====================
// MAIN 3D CORE OBJECT
// =====================


const geometry =
new THREE.IcosahedronGeometry(
1.4,
2
);



const material =
new THREE.MeshPhysicalMaterial({

color:"#c0392b",

wireframe:true,

transparent:true,

opacity:.55,

metalness:1,

roughness:.2

});



const core =
new THREE.Mesh(
geometry,
material
);



core.position.set(
1.8,
0,
0
);



scene.add(core);








// =====================
// PARTICLE NETWORK
// =====================


const particleGeometry =
new THREE.BufferGeometry();


const count = 800;


const positions =
new Float32Array(count * 3);



for(let i=0;i<count*3;i++){

positions[i] =
(Math.random()-0.5)*18;

}



particleGeometry.setAttribute(

"position",

new THREE.BufferAttribute(
positions,
3
)

);



const particleMaterial =
new THREE.PointsMaterial({

color:"#c0392b",

size:.025

});



const particles =
new THREE.Points(

particleGeometry,

particleMaterial

);



scene.add(particles);








// =====================
// LIGHT
// =====================


const light =
new THREE.PointLight(
"#ffffff",
2
);



light.position.set(
3,
3,
5
);



scene.add(light);







// =====================
// MOUSE EFFECT
// =====================


let mouseX=0;

let mouseY=0;



window.addEventListener(
"mousemove",
(e)=>{


mouseX =
(e.clientX/window.innerWidth)-.5;


mouseY =
(e.clientY/window.innerHeight)-.5;


});







// =====================
// ANIMATION LOOP
// =====================


function animate(){


requestAnimationFrame(
animate
);



core.rotation.x +=0.002;


core.rotation.y +=0.004;



particles.rotation.y +=0.0008;



camera.position.x +=

(mouseX*.7-camera.position.x)*0.03;



camera.position.y +=

(-mouseY*.7-camera.position.y)*0.03;



renderer.render(
scene,
camera
);


}



animate();







// =====================
// RESPONSIVE
// =====================


window.addEventListener(
"resize",
()=>{


camera.aspect =
window.innerWidth /
window.innerHeight;


camera.updateProjectionMatrix();



renderer.setSize(

window.innerWidth,

window.innerHeight

);


});

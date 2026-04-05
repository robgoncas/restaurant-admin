const ctx = document.getElementById('grafico');
new Chart(ctx,{
 type:'bar',
 data:{labels:['Enero','Febrero','Marzo'],
 datasets:[{label:'Ventas',data:[10,20,30]}]}
});

const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(75,400/300,0.1,1000);
const renderer=new THREE.WebGLRenderer();
renderer.setSize(400,300);
document.getElementById('scene').appendChild(renderer.domElement);

const cube=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshBasicMaterial({wireframe:true}));
scene.add(cube);
camera.position.z=5;

function animate(){
 requestAnimationFrame(animate);
 cube.rotation.x+=0.01;
 cube.rotation.y+=0.01;
 renderer.render(scene,camera);
}
animate();
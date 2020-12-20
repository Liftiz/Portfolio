// var container = document.getElementById('container');
// var renderer = new THREE.CanvasRenderer();
// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 1, 10000);
// var geometry = new THREE.Geometry();
// var distance = 1000;

// renderer.setSize(window.innerWidth, window.innerHeight);
// container.appendChild(renderer.domElement);


// scene.add(camera);


// for( var i =0; i<80; i++){
// var particle = new THREE.Particle( new THREE.ParticleCanvasMaterial({

// color: Math.random()* 0x808080 +0x808080 ,
// opacity:1 ,
// program: function(context){
//     context.beginPath();
//     context.arc(0,0,1,0,Math.PI*2, true);
//     context.closePath();
//     context.fill();
// }

// }));
// var elm = document.createElement('a');
// elm.href='https://fr.wikipedia.org';
// var elmReturn = document.body.appendChild(elm);
// elmReturn.innerText += "Mon lien";
// elmReturn.style.color = "black";

// particle.position.x = Math.random()* distance*2 - distance;
// particle.position.y = Math.random()* distance*2 - distance;
// particle.position.z = Math.random()* distance*2 - distance;
// particle.scale.x = particle.scale.y = Math.random()*10+5;

// geometry.vertices.push( new THREE.Vertex(particle.position));

// scene.add(particle);
// }

// var line = new THREE.Line(geometry, new THREE.LineBasicMaterial
//     ({
//         color: 0x000000,
//         opacity: 0.15
//     }));
// scene.add(line);

// camera.position.z=100;
// camera.lookAt(scene.position);

// renderer.render(scene, camera);



// document.addEventListener('mousemove', onMouseMove, false);
// function onMouseMove(event){
//     var mouseX = event.clientX - window.innerWidth/2;
//     var mouseY = event.clientY - window.innerHeight/2;
//     camera.position.x += (mouseX - camera.position.x)*0.05;
//     camera.position.y += (mouseY - camera.position.y)*0.05;
//     camera.position.z = distance;
//     camera.lookAt(scene.position);
//     renderer.render(scene, camera);
// }

const container = document.getElementById('container');
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 1, 10000);

const deltaMouse = new THREE.Vector2();
const mouse = new THREE.Vector2();

const raycaster = new THREE.Raycaster();
const distance = 1000;

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);
scene.background = new THREE.Color("#FFF");
scene.add(camera);

const points = [];
for(var i = 0; i< 80; i++) {
    const material = new THREE.MeshBasicMaterial({
        color: Math.random() * 0x808080 + 0x808080,
        opacity: 0.8
    });
    const geometry = new THREE.CircleGeometry(2, 32);
    const circle = new THREE.Mesh( geometry, material );

    circle.position.x = Math.random() * distance * 2 - distance;
    circle.position.y = Math.random() * distance * 2 - distance;
    circle.position.z = Math.random() * distance * 2 - distance;
    circle.scale.x = circle.scale.y = Math.random() * 10 + 5;
    circle.userData = { link: "ortFolioNv.html" };
    points.push(circle.position);
    scene.add(circle);
}

{
    const lineMaterial = new THREE.LineBasicMaterial({
        color: "#CFD8DC",
        linewidth: 1
    });
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, lineMaterial);
    
    scene.add(line);
}

camera.position.z=100;
camera.lookAt(scene.position);
renderer.render(scene, camera);
let currentActiveLink = null;

function onMouseMove(event){
    deltaMouse.x = event.clientX - window.innerWidth ;
    deltaMouse.y = event.clientY - window.innerHeight ;
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function onMouseClick() {
    if (currentActiveLink !== null) {
        console.log(currentActiveLink);
        window.location.href="portFolioNv.html";
    }
}

function render() {
    window.requestAnimationFrame(render);
	// update the picking ray with the camera and mouse position
	raycaster.setFromCamera(mouse, camera);

	// calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
        for (let i = 0; i < intersects.length; i++) {
            const object = intersects[i].object;
            if (object.type === "Line") {
                continue;
            }

            if (object.userData.link) {
                currentActiveLink = object.userData.link;
            }
        }
    }
    else {
        currentActiveLink = null;
    }

    // Update camera position
    camera.position.x += (deltaMouse.x - camera.position.x) * 0.05;
    camera.position.y += (deltaMouse.y - camera.position.y) * 0.05;
    camera.position.z = distance;
    camera.lookAt(scene.position);

	renderer.render( scene, camera );
}

document.addEventListener('mousemove', onMouseMove, false);
document.addEventListener("click", onMouseClick, false);
window.requestAnimationFrame(render);


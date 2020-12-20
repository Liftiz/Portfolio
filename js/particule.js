const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

// Mouvement de la souris
let mouse = {
    x: null,
    y: null, 
    radius: (canvas.height/80) * (canvas.width/80)
};

window.addEventListener('mousemove', 
function (event){
    mouse.x = event.x;
    mouse.y = event.y;
}
);

// Je créer les particules

class Particle {
    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y ; 
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;

    }
    //Methode pour créer chaque particule 
    draw (){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "#000";
        ctx.fill();
    }
    update(){
        if (this.x > canvas.width || this.x < 0){
            this.directionX = -this.directionX;
        } else if (this.y > canvas.height || this.y <0){
            this.directionY = -this.directionY;
        }
        let dx = mouse.x - this.x ;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if(distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size* 1){
                this.x += 10;
            }
            if ( mouse.x > this.x && this.x > this.size *0.1){
                this.x -= 10;
            }
            if(mouse.y< this.y && this.y < canvas.height - this.size *1){
                this.y += 10
            }
            if (mouse.y > this.y && this.y > this.size *1){
                this.y -=10;
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
    
}
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++){
            let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
            +   ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
            if  (distance < (canvas.width/7) * (canvas.height/7))
            {   
                opacityValue = 1-(distance/10000);
                ctx.strokeStyle='rgba(128, 128, 128,' + opacityValue +')';
                ctx.beginPath();
                ctx.lineWidth = 0.5;
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();

            }    
    }
    }
}

// create particle array 
function init(){
    particleArray = [];
    let numberOfParticles = (canvas.height*canvas.width)/9000;
    for (let i=0; i<numberOfParticles; i++){
        let size = (Math.random()*8)+1;
        let x = (Math.random() * ((innerWidth - size ) - (size )) + size );
        let y = (Math.random() * ((innerHeight - size ) - (size )) + size );
        let directionX = (Math.random() * 2) - 1;
        let directionY = (Math.random() * 2) - 1;
        
        let color = 'gold';
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// create animation loop
function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,innerWidth,innerHeight);
	
	for (let i = 0; i < particleArray.length; i++){
		particleArray[i].update();
	}
    connect();
}
init();
animate();

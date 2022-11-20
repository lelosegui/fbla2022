const canvas = document.getElementById("playground");


const context=canvas.getContext("2d");
const block =new Block(90,50,10,10);

function animate() {
    canvas.height = window.innerHeight;
    block.draw(context);

}

animate();
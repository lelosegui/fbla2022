const canvas = document.getElementById("playground");


const context = canvas.getContext("2d");
const block = new Block(90,10,10,10);

function animate() {
    block.update();

    canvas.height = window.innerHeight;

    block.draw(context);

    requestAnimationFrame(animate);
}

animate();
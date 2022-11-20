class Block{
    constructor(x,y,width,high) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.high = high;
    }

    draw(context) {


        context.beginPath();
        context.fillStyle = 'black';
        context.fillRect(this.x,this.y,this.width,this.high);

        context.fill();
    }
}


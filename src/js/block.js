class Block{
    constructor(x,y,width,high) {

        this.speed = 0;
        this.acceleration = 0.367;
        this.friction = 0.05;
        this.maxSpeed = 3;

        this.x = x;
        this.y = y;
        this.width = width;
        this.high = high;
        this.controls = new Controls();
    }

    update(){
        this.#move();
    }

    draw(context) {


        context.beginPath();
        context.fillStyle = 'black';
        context.fillRect(this.x,this.y,this.width,this.high);

        context.fill();
    }

    #move(){

        if(this.controls.forward===true){
            this.speed += this.acceleration;
        }

        if(this.controls.reverse===true){
            this.speed -= this.acceleration;
        }

        if(this.speed >=this.maxSpeed){
            this.speed = this.maxSpeed;
        }

        if(this.speed <= -this.maxSpeed){
            this.speed = -this.maxSpeed;
        }

        if(this.speed<0){
            this.speed += this.friction;
        }

        if(this.speed>0){
            this.speed -= this.friction;
        }

        this.y=this.y-this.speed;

    }
}


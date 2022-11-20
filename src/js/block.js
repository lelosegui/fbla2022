class Block{
    constructor(x,y,width,high) {

        this.ySpeed = 0;
        this.xSpeed = 0;
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
        context.fillStyle = 'HotPink';
        context.fillRect(this.x,this.y,this.width,this.high);

        context.fill();
    }

    #move(){

        if(this.controls.forward===true){
            this.ySpeed += this.acceleration;
        }

        if(this.controls.reverse===true){
            this.ySpeed -= this.acceleration;
        }

        if(this.controls.left===true){
            this.xSpeed -= this.acceleration;
        }

        if(this.controls.right===true){
            this.xSpeed += this.acceleration;
        }

        if(this.ySpeed >=this.maxSpeed){
            this.ySpeed = this.maxSpeed;
        }

        if(this.ySpeed <= -this.maxSpeed){
            this.ySpeed = -this.maxSpeed;
        }

        if(this.xSpeed >=this.maxSpeed){
            this.xSpeed = this.maxSpeed;
        }

        if(this.xSpeed <= -this.maxSpeed){
            this.xSpeed = -this.maxSpeed;
        }

        if(this.ySpeed<0){
            this.ySpeed += this.friction;
        }

        if(this.ySpeed>0){
            this.ySpeed -= this.friction;
        }

        if(this.xSpeed<0){
            this.xSpeed += this.friction;
        }

        if(this.xSpeed>0){
            this.xSpeed -= this.friction;
        }


        this.y -= this.ySpeed;
        this.x += this.xSpeed;
    }
}


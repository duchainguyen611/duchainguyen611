class Gift{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.status = false;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = 'pink';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }

    fall(){
        this.y ++;
    }
}
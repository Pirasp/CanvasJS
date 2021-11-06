//the javascript component for the endless runner
//Written by Johannes Hofer
//https://github.com/Pirasp
//johanneshofer@gmx.net


    var Canvas = document.getElementById("EndlessRunnerCanvas");
    rescaleCanvas();

    function rescaleCanvas(){
        Canvas.height = window.innerHeight;
        Canvas.width = window.innerWidth;
    }

    var c = Canvas.getContext('2d');

    //dwar ground
    c.fillStyle='lightgray';
    c.fillRect(0, window.innerHeight/2, window.innerWidth, window.innerHeight/2);

    function Player(gravity, jumpvelocity, playerheight){
        var grav = gravity; var impulse = jumpvelocity; var size = playerheight;
        var defaultY = window.innerHeight/2-playerheight;
        var y = defaultY; var yvel = 0;


        this.update = function(){

            //jumping and gravity
            if(this.y < this.defaultY){

                this.y += this.yvel;
                this.yvel -= this.grav;

            }
            //character ground collision
            if(this.y >= this.defaultY){
                this.y = this.defaultY; 
                this.yvel = 0;
            }
            //character jump input
            //TODO: keycode abfrage im IF
            if(this.y >= this.defaultY){

                this.yvel = this.jumpvelocity;

            }

            //draw character
            c.fillStyle = 'blue';
            c.fillRect(250, y, 20, size);

        }

    }

    var char = new Player(0.1, 10, 40);

    function animate(){
        //clears the upper halve of the screen so the ground only needs to be drawn once
        c.clearRect(0, 0, window.innerWidth, window.innerHeight/2);
        char.update();
        requestAnimationFrame(animate);
    }

    animate();
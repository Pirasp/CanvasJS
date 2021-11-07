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

    
    function Player(gravity, jumpvelocity, playerheight){
        var grav = gravity; var impulse = -jumpvelocity; var size = playerheight;
        var defaultY = window.innerHeight/2-playerheight;
        var y = defaultY; var yvel = 0;
        
        
        this.update = function(){

            //character ground collision
            if(y >= defaultY){
                y = defaultY; 
                yvel = 0;
            }
            
            //jumping and gravity
            if(y < defaultY){
                
                y += yvel;
                yvel += grav;
                
            }
            
            //draw character
            c.fillStyle = 'blue';
            c.fillRect(250, y, 20, size);
            
        }
        this.jump = function(){
            if(yvel == 0 && y == defaultY){
                yvel = impulse;
                y -= 2;
            }
        }
        
    }
    
    
    var char = new Player(0.5, 10, 40);
    
    //jump on key press
    document.addEventListener("keydown", function onEvent(event) {
        
        char.jump();
        
    });
    
    function animate(){
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        char.update();
        //dwar ground
        c.fillStyle='lightgray';
        c.fillRect(0, window.innerHeight/2, window.innerWidth, window.innerHeight/2);
        requestAnimationFrame(animate);
    }

    animate();
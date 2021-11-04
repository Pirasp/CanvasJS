//the javascript component for BubbleBounce
//Written by Johannes Hofer
//https://github.com/Pirasp
//johanneshofer@gmx.net


    var Canvas = document.getElementById("BubbleBounceCanvas");
    rescaleCanvas();
    //window.onresize = rescaleCanvas;

    //always resizes the Canvas to window dimensions
    function rescaleCanvas(){
        Canvas.height = window.innerHeight;
        Canvas.width = window.innerWidth;
    }

    //circle bounce code
    var c = Canvas.getContext('2d');
    var circles = [];

    var mpx = 0; mpy = 0; my = 0; mx = 0;
    var mvx = 0; mvy = 0;


    function Circle(){
        var radius = 80 * Math.random() + 20;
        var red = 225 * Math.random()+20;
        var green = 225 * Math.random()+20;
        var blue = 225 * Math.random()+20;
        var vx = (4 * (Math.random()-0.5) + 0.5)*2;
        var vy = (4 * (Math.random()-0.5) + 0.5)*2;
        var vdes = (4 * (Math.random()-0.5) + 0.5)*2+1;
        var x = Math.random() * (window.innerWidth - 2*radius) + radius;
        var y = Math.random() * (window.innerHeight - 2*radius) + radius;
        var lifetime = 1500 * Math.random()+500;
        var index = 0;

        red -= red%1;
        green -= green%1;
        blue -= blue%1;
        var color = "rgba("+red+","+green+","+blue;

        var trad = radius / 200;

        //drawing the circle
        this.draw = function(){
            c.beginPath();
            c.arc(x, y, radius, 0, Math.PI*2, false);
            c.strokeStyle = color + ",1)";
            c.fillStyle = color + ",0.1)"
            c.fill();
            c.stroke();
            
            x += vx;
            y += vy;
            
            lifetime--;
            
            //bouncing
            if(x<0+radius || x>window.innerWidth-radius){
                vx = -vx;
            }
            if(y<0+radius || y>window.innerHeight-radius){
                vy = -vy;
            }
            
            //bounce off mouse
            //vector mouse->circle
            var mcx = x-mx;
            var mcy = y-my;
            
            //console.log(Math.sqrt(Math.pow(mcx, 2)+Math.pow(mcy, 2)));
            var dst = Math.sqrt(Math.pow(mcx, 2)+Math.pow(mcy, 2));
            var vlen = Math.sqrt(Math.pow(vx, 2)+Math.pow(vy, 2));
            if(dst<radius){
                vy = (mcx/dst)*vlen+mvx;
                vx = (mcy/dst)*vlen+mvy;
            }
            if(vlen > vdes && vlen > 1){
                vx *= 0.98;
                vy *= 0.98;
            }
            
            //makes bubbles smaller before death
            if (lifetime<201 && radius > trad){
                radius -= trad;
                vx *= 1.03;
                vy *= 1.03;
            }
            //kills bubbles
            if (lifetime<=0){
                for (var i = 0; i<circles.length; i++){
                    if(circles[i]===this){
                        circles.splice(i, 1);
                    }
                }
            }
        }

    }
    
    function makeCircle(){
        if(circles.length>30){
            return;
        }
        
        var circ = new Circle();
        circ.index = circles.length;
        circles.push(circ);
    }
    
    function decideCircle(possibility){
        var rand = Math.random();
        if (rand < possibility){
            makeCircle();
        }
    }
    
    
    function animate(){
        requestAnimationFrame(animate);
        c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        
        for (var i = 0; i<circles.length; i++){
            circles[i].draw();
        }
        
        decideCircle(0.1);        
    }
    
    document.onmousemove = function(event){
        mpx = mx;
        mpy = my;
        
        mx = event.pageX;
        my =  event.pageY;
        
        mvx = mx - mpx;
        mvy = my - mpy;
    }
    

animate();

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


    function Circle(){
        var radius = 80 * Math.random() + 20;
        var red = 225 * Math.random()+20;
        var green = 225 * Math.random()+20;
        var blue = 225 * Math.random()+20;
        var vx = (4 * (Math.random()-0.5) + 0.5)*2;
        var vy = (4 * (Math.random()-0.5) + 0.5)*2;
        var x = Math.random() * (window.innerWidth - 2*radius) + radius;
        var y = Math.random() * (window.innerHeight - 2*radius) + radius;
        var lifetime = 1500 * Math.random()+500;
        var index = 0;

        red -= red%1;
        green -= green%1;
        blue -= blue%1;
        var color = "rgba("+red+","+green+","+blue;

        console.log("made circle "+ radius + " "+color);


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

            if(x<0+radius || x>window.innerWidth-radius){
                vx = -vx;
            }
            if(y<0+radius || y>window.innerHeight-radius){
                vy = -vy;
            }
            if (lifetime<=0){
                circles.splice(index, 1);
            }
        }

    }

    function makeCircle(){
        if(circles.length>150){
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


animate();

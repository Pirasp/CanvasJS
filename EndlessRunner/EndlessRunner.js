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

    c.fillStyle='lightgray';
    c.fillRect(0, window.innerHeight/2, window.innerWidth, window.innerHeight/2);

    function animate(){
        //clears the upper halve of the screen so the ground only needs to be drawn once
        c.clearRect(0, 0, window.innerWidth, window.innerHeight/2);
        requestAnimationFrame(animate);
    }

    animate();
//the javascript component for the endless runner
//Written by Johannes Hofer
//https://github.com/Pirasp
//johanneshofer@gmx.net


    var Canvas = document.getElementById("EndlessRunnerCanvas");
    rescaleCanvas();
    window.onresize = rescaleCanvas;

    function rescaleCanvas(){
        Canvas.height = window.innerHeight;
        Canvas.width = window.innerWidth;
    }

    

    
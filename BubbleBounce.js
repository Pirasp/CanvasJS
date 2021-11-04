//the javascript component for BubbleBounce
//Written by Johannes Hofer
//https://github.com/Pirasp
//johanneshofer@gmx.net


    var Canvas = document.getElementById("BubbleBounce");
    rescaleCanvas();
    window.onresize = rescaleCanvas;

    function rescaleCanvas(){
        Canvas.height = window.innerHeight;
        Canvas.width = window.innerWidth;
    }

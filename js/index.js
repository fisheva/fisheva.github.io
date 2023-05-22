window.onload = function(){
    function select (e){
        if (e.target.nodeName === "polygon"){
            let part = "." + e.target.className.baseVal;
            document.querySelector("#fish-color " + part).classList.toggle("select");
            document.querySelector("#fish-subhead " + part).classList.toggle("select");
        }
    }
    document.querySelector("#fish").addEventListener("mouseover", select);
    document.querySelector("#fish").addEventListener("mouseout", select);

}


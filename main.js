window.onload = () => {
    const canvas = document.querySelector("#platno");
    const ctx = canvas.getContext("2d");
    const input = document.querySelector("#vnos"); 

    draw(50,50,50,100,100,50);

    input.addEventListener("input",() =>{

        let object = SceneReader.SceneReader();
        if(object != null){
            document.querySelector("#warn").hidden = true;
            let matrika = Matrix.toMatrix(object.vertices);
            let t = Matrix.translate(-object.camera.translation[0],-object.camera.translation[1],-object.camera.translation[2]);
            let t1 = Matrix.rotateY(-object.camera.rotation[1]);

            matrika = Matrix.perspective(1);
            matrika = Matrix.multiply(t1, matrika);
            matrika = Matrix.multiply(t, matrika);
            console.log(matrika);
            draw(50,50,50,100,100,50);
        }else{
            document.querySelector("#warn").hidden = false;
        }
    });

    function draw(x1,y1,x2,y2,x3,y3){
     ctx.beginPath();
     ctx.moveTo(x1, y1);
     ctx.lineTo(x2, y2);
     ctx.lineTo(x3, y3);
     ctx.closePath();
     ctx.stroke();
    }





}


 
 

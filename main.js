window.onload = () => {
    console.log("hello");
    const canvas = document.querySelector("#platno");
    const ctx = canvas.getContext("2d");
    const input = document.querySelector("#vnos"); 
    document.addEventListener("keyup", keypress);
    let movement = {
        "Mx" : 0,
        "My" : 0,
        "Mz": 0,
        "Rx": 0,
        "Ry": 0,
        "Rz": 0

    }
    input.addEventListener("input",() =>{
        doSomething();
    });





    function doSomething(){
        let object = SceneReader.SceneReader();
        if(object != null){
            document.querySelector("#warn").hidden = true;

            let M = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
            
            let matrika = Matrix.toMatrix(object.vertices);

            M = Matrix.multiply(Matrix.rotateX(-object.camera.rotation[0]),M);
            M = Matrix.multiply(Matrix.rotateY(-object.camera.rotation[1]),M);
            M = Matrix.multiply(Matrix.rotateZ(-object.camera.rotation[2]),M);
            M = Matrix.multiply(Matrix.translate(-object.camera.translation[0],-object.camera.translation[1],-object.camera.translation[2]),M);
            
            M = Matrix.multiply(Matrix.translate(object.model.translation[0] + movement["Mx"],object.model.translation[1] + movement["My"],object.model.translation[2] + movement["Mz"] ),M);
            M = Matrix.multiply(Matrix.rotateZ(object.model.rotation[2] + movement["Rz"]),M);
            M = Matrix.multiply(Matrix.rotateY(object.model.rotation[1] + movement["Ry"]),M);
            M = Matrix.multiply(Matrix.rotateX(object.model.rotation[0] + movement["Rx"]),M);
            M = Matrix.multiply(Matrix.scale(object.model.scale[0],object.model.scale[1],object.model.scale[2]),M);

            matrika = Matrix.multiply(M,matrika);
            console.log(matrika);
            matrika = Matrix.multiply(Matrix.perspective(object.camera.perspective),matrika);
            console.log(matrika);
            //M = Matrix.multiply(Matrix.perspective(object.camera.perspective),M);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAll(object.indices,matrika);
            

        }else{
            document.querySelector("#warn").hidden = false;
        }
    }

    function draw(x1,y1,x2,y2,x3,y3){
        ctx.beginPath();
        ctx.moveTo(x1 + 400, y1+ 300);
        ctx.lineTo(x2 + 400, y2+ 300);
        ctx.lineTo(x3 + 400, y3+ 300);
        ctx.closePath();
        ctx.stroke();
    }

    function drawAll(obj,arr){
        for(let i = 0; i < obj.length; i+=3){
            let one,two,three;
            one = obj[i]-1;
            two = obj[i+1]-1;
            three = obj[i+2]-1;
            draw(arr[0][one]/arr[3][one], arr[1][one]/arr[3][one], arr[0][two]/arr[3][two], arr[1][two]/arr[3][two], arr[0][three]/arr[3][three], arr[1][three]/arr[3][three]);
        }
    }

    function keypress(e){
        switch (e.code){
            case "ArrowDown":
                movement["My"] -= 1;
                doSomething();
            break;
            case "ArrowUp":
                movement["My"] += 1;
                doSomething();
            break;
            case "ArrowLeft":
                movement["Mx"] -= 1;
                doSomething();
            break;
            case "ArrowRight":
                movement["Mx"] += 1;
                doSomething();
            break;
            case "KeyQ":
                movement["Rz"] += 0.785398;
                doSomething();
            break;
            case "KeyE":
                movement["Rz"] -= 0.785398;
                doSomething();
            break;
            case "KeyI":
                movement["Rx"] -= 0.785398;
                doSomething();
            break;
            case "KeyK":
                movement["Rx"] += 0.785398;
                doSomething();
            break;
            case "KeyJ":
                movement["Ry"] += 0.785398;
                doSomething();
            break;
            case "KeyL":
                movement["Ry"] -= 0.785398;
                doSomething();
            break;

        }
    }




}


 
 

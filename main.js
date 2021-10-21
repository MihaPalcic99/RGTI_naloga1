window.onload = () => {
    console.log("hello");
    const canvas = document.querySelector("#platno");
    const ctx = canvas.getContext("2d");
    const input = document.querySelector("#vnos"); 


    input.addEventListener("input",() =>{

        let object = SceneReader.SceneReader();
        if(object != null){
            document.querySelector("#warn").hidden = true;

            let M = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
            let matrika = Matrix.toMatrix(object.vertices);
            M = Matrix.multiply(Matrix.perspective(object.camera.perspective),M);
            M = Matrix.multiply(Matrix.translate(object.model.translation[0],object.model.translation[1],object.model.translation[2]),M);
            M = Matrix.multiply(Matrix.rotateZ(object.model.rotation[2]),M);
            M = Matrix.multiply(Matrix.rotateY(object.model.rotation[1]),M);
            M = Matrix.multiply(Matrix.rotateX(object.model.rotation[0]),M);
            M = Matrix.multiply(Matrix.scale(object.model.scale[0],object.model.scale[1],object.model.scale[2]),M);
            
            matrika = Matrix.multiply(M,matrika);

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawAll(object.indices,matrika);
            

        }else{
            document.querySelector("#warn").hidden = false;
        }

    });

    function draw(x1,y1,x2,y2,x3,y3){
        ctx.beginPath();
        ctx.moveTo(x1 + 400, y1+ 300);
        ctx.lineTo(x2 + 400, y2+ 300);
        ctx.lineTo(x3 + 400, y3+ 300);
        ctx.closePath();
        ctx.stroke();
    }

    function drawAll(obj,arr){
       /*  console.log(arr);
        console.log(obj); */
        for(let i = 0; i < obj.length; i+=3){
            let one,two,three;
            console.log(obj[i])
            one = obj[i]-1;
            two = obj[i+1]-1;
            three = obj[i+2]-1;
            /* console.log(one ,"+",two,"+",three); */
            draw(arr[0][one],arr[1][one],arr[0][two],arr[1][two],arr[0][three],arr[1][three]);
        }
    }





}


 
 

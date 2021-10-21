class Matrix {

    static hello(){
        console.log("hello, how are you");
    }

    static translate(dx,dy,dz){
        return [
            [1,0,0,dx],
            [0,1,0,dy],
            [0,0,1,dz],
            [0,0,0,1]
        ]
    }

    static scale(sx,sy,sz){
        return [
            [sx,0,0,0],
            [0,sy,0,0],
            [0,0,sz,0],
            [0,0,0,1]
        ]
    }

    static rotateX(rad){
        return [
            [1,0,0,0],
            [0,Math.cos(rad),-Math.sin(rad),0],
            [0,Math.sin(rad),Math.cos(rad),0],
            [0,0,0,1]
        ]
    }

    static rotateY(rad){
        return [
            [Math.cos(rad),0,Math.sin(rad),0],
            [0,1,0,0],
            [-Math.sin(rad),0,Math.cos(rad),0],
            [0,0,0,1]
        ] 
    }

    static rotateZ(rad){
        return [
            [Math.cos(rad),-Math.sin(rad),0,0],
            [Math.sin(rad),Math.cos(rad),0,0],
            [0,0,1,0],
            [0,0,0,1]
        ] 
    }

    static perspective(d){
        return [
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,d,1]
        ]
    }
    
    static toArray(mtx){
        let arr = [];
        for(let i = 0; i < mtx.length; i++){
            for(let j = 0; j < mtx[0].length; j++){
                arr.push(mtx[i][j]);
            }
        }
        return arr;
    }

    static identity(){
        return [
            [1,0,0,0],
            [0,1,0,0],
            [0,0,1,0],
            [0,0,0,1]
        ]
    }
    
    static toMatrix(list){

        let arr = new Array(4);
        arr[0] = [];
        arr[1] = [];
        arr[2] = [];
        arr[3] = [];
        let len = list.length;


        for(let i = 0; i < len; i+=3){
            for(let j = 0; j < 3; j++){
                arr[j].push(list[i+j]);
            } 
            arr[3].push(1);
        }

        return arr;
    }

    static  multiply(a, b) {
        var aNumRows = a.length, aNumCols = a[0].length,bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  
        for (var r = 0; r < aNumRows; ++r) {
          m[r] = new Array(bNumCols); 
          for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             
            for (var i = 0; i < aNumCols; ++i) {
              m[r][c] += a[r][i] * b[i][c];
            }
          }
        }
        return m;
    }

    static finalMultiply(a, b){
        var aNumRows = a.length, aNumCols = a[0].length,bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  
        for (var r = 0; r < aNumRows; ++r) {
          m[r] = new Array(bNumCols); 
          for (var c = 0; c < bNumRows; ++c) {
            m[r][c] = 0;             
            for (var i = 0; i < aNumCols; ++i) {
              m[r][c] += a[r][i] * b[i][c];
            }
          }
        }
        return m;
    }


}
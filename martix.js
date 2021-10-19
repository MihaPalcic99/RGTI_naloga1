class Matrix{

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
            [0,0,0,0]
        ]
    }

    static rotateX(rad){
        return [
            [1,0,0,0],
            [0,Math.cos(rad),Math.sin(rad),0],
            [0,-Math.sin(rad),Math.cos(rad),0],
            [0,0,0,1]
        ]
    }

    static rotateY(rad){
        return [
            [Math.cos(rad),0,-Math.sin(rad),0],
            [0,1,0,0],
            [Math.sin(rad),0,Math.cos(rad),0],
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
            [sx,0,0,0],
            [0,sy,0,0],
            [0,0,sz,0],
            [0,0,0,0]
        ]
    }
}
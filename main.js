
window.onload = () => {

    const canvas = document.querySelector("#platno");
    const ctx = canvas.getContext("2d");

    const input = document.querySelector("#vnos");
    
    input.addEventListener("input",() =>{

        let object = SceneReader.SceneReader();

        if(object != null){
            document.querySelector("#warn").hidden = true;
        }else{
            document.querySelector("#warn").hidden = false;
        }
    });

    Matrix.hello();
}

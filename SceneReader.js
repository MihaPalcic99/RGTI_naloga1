class SceneReader{

    static SceneReader(){
        let x = document.querySelector("#vnos");
        try {
            let object = JSON.parse(x.value);
            return object;
        } catch (e) {
            return null
        }
    }
    
}
function distance(){
    let result;
    if (arguments.length==2) {
        if (Array.isArray(arguments[0]) && Array.isArray(arguments[1])){
            if(arguments[0].length == arguments[1].length) {
                const args0 = arguments[0];
                const args1 = arguments[1];
                let aux = 0;
                for (let i = 0; i < args0.length; i++) {
                    aux = aux + Math.pow((args0[i]-args1[i]),2);
                }
                result = Math.sqrt(aux);
            } else {
                console.log("Error incompatible data");
            }
        }
    } else {
        if (arguments.length==4){
            result = Math.sqrt(Math.pow((arguments[0]-arguments[2]),2)+Math.pow((arguments[1]-arguments[3]),2));
        } else {
            if (arguments.length==6) {
                result = Math.sqrt(Math.pow((arguments[0]-arguments[3]),2)+Math.pow((arguments[1]-arguments[4]),2)+Math.pow((arguments[2]-arguments[5]),2));
            } else {
                console.log("Insufficient arguments");
            }
        }
    }
    return result;
}

console.log(distance (1, 2, 2, 2));
console.log(distance ([1,2], [2,2]));
console.log(distance ([1,2], [2,2,4])); 

  
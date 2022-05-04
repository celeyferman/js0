function distance(){
    let result;
    if (arguments.length==4){
        result = Math.sqrt(Math.pow((arguments[0]-arguments[2]),2)+Math.pow((arguments[1]-arguments[3]),2));
    } else {
        if (arguments.length==6) {
            result = Math.sqrt(Math.pow((arguments[0]-arguments[3]),2)+Math.pow((arguments[1]-arguments[4]),2)+Math.pow((arguments[2]-arguments[5]),2));
        } else {
            console.log("Insufficient arguments");
        }
    }
    return result;
}

const x1 = 1, y1 = 2, z1 = 1;
const x2 = 2, y2 = 2, z2 = 4;

console.log(distance (x1, y1, x2, y2));
console.log(distance (x1, y1, z1, x2, y2, z2));
  
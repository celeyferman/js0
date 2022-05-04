function fibonacci (num) {
    let num1 = 0;
    let num2 = 1;
    let aux;
    
    if (num===0){
        return num1;
    } else {
        if (num===1){
            return num2;
        } else {
            for (let i = 1; i < num; i++) {
                aux = num1+num2;
                num1=num2;
                num2=aux;
            }
        }
    }
    return num2;
}

console.log(fibonacci(4));
console.log(fibonacci(9));

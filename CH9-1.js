function dataParse(entry){
    const newObj = JSON.parse(entry);
    newObj.myFn = eval("("+newObj.myFn+")");
    return newObj;
}

const str = '{"prop1": 42, "myFn": "function(a, b) { return a+b+this.prop1;}"}';
const obj = dataParse(str);
console.log(obj.myFn(3,4));
  
function printObjProp(obj, status) {
    for (let i in obj) {
        if (status) {
            if (obj.hasOwnProperty(i)) {
                console.log(i);
            }
        } else {
            console.log(i);
        }
    }
}

function CustomObject (a, b) {
    this.a = a;
    this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };
var obj = new CustomObject (1, 2);
printObjProp (obj);
printObjProp (obj, false);
printObjProp (obj, true);


class newObj {
    constructor(entry) {
        this.setId(entry);
    }
    getId() {
        return this.id;
    }
    setId(newId){
        if (/\D/.test(newId)){
            /*throw "Id cannot contain alphanumeric characters!";*/
            console.log("Id cannot contain alphanumeric characters!");
        } else {
            this.id = newId;
        }
    }
}

const bObj = new newObj("Hello");
console.log(bObj.id);

const gObj = new newObj(23);
console.log(gObj.id);
  
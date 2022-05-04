class Image {
    constructor (data, width, height, name) {
        this.data = data;
        this.width = width;
        this.height = height;
        this.name = name;
    }
    pixelData(row, column) {
        let search = row + column;
        if (search < this.data.length) {
            console.log(this.data[search]);
        } else {
            console.log("Out of bounds");
        }
    }
}

const data = new Array (1600);
const img = new Image (data, 40, 40, "myImage");
console.log(img.width);
console.log(img.height);
console.log(img.name);
console.log(img.pixelData (20, 4));


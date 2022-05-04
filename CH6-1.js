class shape {
    constructor(edges) {
        this.edges = new Array(edges);
    }
    edgedefinition() {
        for (let i = 0; i < this.edges.length; i++) {
            this.edges[i] = arguments[i];
        }
    }
    display() {
        console.log("This shape has " + this.edges.length + " edges");
    }
}

class quadrilateral extends shape {
    constructor() {
        super(4);
    }
    area() {
        let totalArea = 0;
        for (const x of this.edges) {
            totalArea = totalArea + x;
        }
        totalArea = (totalArea/4);
        //this calculation is wrong, but I couldn't find a general way to calculate the area of a quadrilateral
        return totalArea;
    }
    perimeter() {
        let totalPerimeter = 0;
        for (const x of this.edges) {
            totalPerimeter += x;
        }
        return totalPerimeter;
    }
}

class square extends quadrilateral {
    constructor() {
        super();
    }
    edgedefinition(edge) {
        for (let i = 0; i < this.edges.length; i++) {
            this.edges[i] = edge;
        }
    }
    area() {
        let totalArea = 0;
        totalArea = Math.pow(this.edges[0],2);
        return totalArea;
    }
}

class triangle extends shape {
    constructor() {
        super(3);
    }
    defineHeight(height) {
        triangle.height = height;
        triangle.base = this.edges[1];
    }
    area() {
        if(this.height && this.base) {
            let totalArea = (base*height)/2;
            return totalArea;
        } else {
            console.log("Height or base are unknown please use defineHeight function first.")
            return;
        }
    }
}

class rectangle extends quadrilateral {
    constructor() {
        super();
    }
    edgedefinition(edgeb, edgeh) {
        this.edges[0] = edgeh;
        this.edges[2] = edgeh;
        this.edges[1] = edgeb;
        this.edges[3] = edgeb;
    }
    area() {
        let totalArea = 0;
        totalArea = this.edges[0] * this.edges[1];
        return totalArea;
    }
}

let quad1 = new quadrilateral();
quad1.edgedefinition(1,2,3,4);
console.log(quad1.area());
console.log(quad1.perimeter());

let squ1= new square()
squ1.edgedefinition(2);
console.log(squ1.area());
console.log(squ1.perimeter());

let rect1 = new rectangle();
rect1.edgedefinition(4,2);
console.log(rect1.area);
console.log(rect1.perimeter);
  
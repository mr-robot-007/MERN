class Shape {
    getInfo = () => {
        console.log("I am of generic shape");
    }
}

class Circle extends Shape {
    getInfo = () => {
        console.log("I am a circular shape");
    }
}
class Square extends Shape {
    getInfo = () => {
        console.log("I am a square shape");
    }
}

class ShapeFactory {
    static create = (shape? : string ) : Shape => {
        if(shape === "square"){
            return new Square();
        }
        else if( shape === "circle") {
            return new Circle();
        }
        return new Shape();
    }
}

// let s1 = new Shape();
// let s2 = new Circle();
// let s3 = new Square();

//with factory
let s1 = ShapeFactory.create();
let s2 = ShapeFactory.create("circle");
let s3 = ShapeFactory.create("square");

s1.getInfo();
s2.getInfo();
s3.getInfo();
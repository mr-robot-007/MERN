// Parameter type annotation
function greet(id : number | string) {
    console.log(id);
  }
greet("hello");

type Point = {
    x : number;
    y? : number;
}


let some: Point = {
    x : 80,
} 
import p5 from "p5";
import Brush from "./brush";

// these are the variables you can use as inputs to your algorithms
console.log(fxhash)   // the 64 chars hex number fed to your algorithm
console.log(fxrand()) // deterministic PRNG function, use it instead of Math.random()

let s;

window.$fxhashFeatures = {}


// this code writes the values to the DOM as an example

let sketch = function (p5) {
    let brush;

    p5.setup = function () {
        p5.createCanvas(WIDTH, WIDTH); // Size must be the first statement
        p5.frameRate(30);
        p5.background("#f1f1e6");
    };

    p5.draw = function () {
        p5.background("#f1f1e6");
    };

}

let myp5 = new p5(sketch, window.document.body);

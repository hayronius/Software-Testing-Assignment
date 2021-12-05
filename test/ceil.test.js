import chai from "chai"
import ceil from "../src/ceil.js"
const expect = chai.expect

describe("Ceil, rounding numbers into integers", () => {
    it("Zero", () =>{
        expect(ceil(0)).to.equal(0)
    });

    it("Integer", () =>{
        expect(ceil(5)).to.equal(5)
    });

    it("Decimals", () =>{
        expect(ceil(0.001)).to.equal(1)
    });

    it("Negative integer", () =>{
        expect(ceil(-5)).to.equal(-5)
    });

    it("Negative with decimals", () =>{
        expect(ceil(-5.555)).to.equal(-5)
    });

    it("Larger number", () =>{
        expect(ceil(1005.5001)).to.equal(1006)
    });

    it("Past integer max value", () =>{
        expect(ceil(2147483647.1)).to.equal(2147483648) // 2147483647 is max
    });

    it("Past integer min value", () =>{
        expect(ceil(-2147483649.1)).to.equal(-2147483649) // -2147483648 is min
    });
})

describe("Ceil, rounding numbers using precision parameter", () => {
    it("Precision is zero (default)", () =>{
        expect(ceil(55.5,0)).to.equal(56)
    });

    // Precision parameter being positive means how many decimals the answer has
    // ceil(5.0005, 2)
    // => 5.01
    it("Precision is positive", () =>{
        expect(ceil(5.0005, 2)).to.equal(5.01)
    });

    it("Zero with positive precision", () =>{
        expect(ceil(0, 3)).to.equal(0.000)
    });

    it("Input has less decimals than wanted precision", () =>{
        expect(ceil(5.5, 3)).to.equal(5.500)
    });

    it("Every digit is 9", () =>{
        expect(ceil(99.999999, 2)).to.equal(100.00)
    });

    it("Negative with positive precision", () =>{
        expect(ceil(-5.1111, 2)).to.equal(-5.11)
    });

    // Precision parameter being negative means how many digits are rounded in an integer
    // ceil(5555, -2)
    // => 5600
    it("Precision is negative", () =>{
        expect(ceil(5555, -2)).to.equal(5600)
    });

    it("Input has decimals", () =>{
        expect(ceil(5123.321, -2)).to.equal(5200)
    });

    it("Zero with negative precision", () =>{
        expect(ceil(0, -2)).to.equal(0)
    });

    it("Input has less digits than wanted precision", () =>{
        expect(ceil(5, -3)).to.equal(1000)
    });

    it("Every digit is 9", () =>{
        expect(ceil(999999, -2)).to.equal(1000000)
    });

    it("Negative with negative precision", () =>{
        expect(ceil(-25, -1)).to.equal(-20)
    });
})

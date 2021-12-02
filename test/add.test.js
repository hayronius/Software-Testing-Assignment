import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

describe("Add", () => {
    it("adds two numbers", () =>{
        expect(add(3,6)).to.equal(9)
    });

    it("Giving one number returns the number itself", () =>{
        expect(add(5)).to.equal(5)
    });

    it("Adding with decimals", () =>{
        expect(add(3.4,5.7)).to.equal(9.1)
    });

    it("Augend is zero", () =>{
        expect(add(0,5)).to.equal(5)
    });

    it("Addend is zero", () =>{
        expect(add(5,0)).to.equal(5)
    });

    it("Total is zero", () =>{
        expect(add(5,-5)).to.equal(0)
    });

    it("Augend is negative", () =>{
        expect(add(-3,5)).to.equal(2)
    });

    it("Addend is negative", () =>{
        expect(add(5,-3)).to.equal(2)
    });

    it("Total is negative", () =>{
        expect(add(3,-5)).to.equal(-2)
    });

    it("Adding past integer max value", () =>{
        expect(add(2147483647,10)).to.equal(2147483657) // 2147483647 is max
    });

    it("Adding past integer min value", () =>{
        expect(add(-2147483648,-10)).to.equal(-2147483658) // -2147483648 is min
    });
})
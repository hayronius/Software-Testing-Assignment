import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect

describe("isEmpty", () => {
    it("Null", () =>{
        expect(isEmpty(null)).to.equal(true)
    });

    it("Undefined", () =>{
        expect(isEmpty(undefined)).to.equal(true)
    });

    it("Boolean", () =>{
        expect(isEmpty(true)).to.equal(true)
    });

    it("Numeric value", () =>{
        expect(isEmpty(5)).to.equal(true)
    });

    //Collections are considered empty if their size/length is zero
    it("String", () =>{
        expect(isEmpty("blob")).to.equal(false)
    });

    it("Empty string", () =>{
        expect(isEmpty("")).to.equal(true)
    });

    it("Array", () =>{
        expect(isEmpty([1,2])).to.equal(false)
    });

    it("Empty array", () =>{
        expect(isEmpty([])).to.equal(true)
    });

    it("Map", () =>{
        expect(isEmpty({1 : "a"})).to.equal(false)
    });

    it("Empty map", () =>{
        expect(isEmpty({})).to.equal(true)
    });
})

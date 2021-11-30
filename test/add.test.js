import chai from "chai"
import add from "../src/add.js"
const expect = chai.expect

describe("Add", () => {
    it("adds two numbers", () =>{
        expect(add(3,6)).to.equal(9)
    });
})
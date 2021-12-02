import chai from "chai"
import capitalize from "../src/capitalize.js"
const expect = chai.expect

describe("Capitalize", () => {
    it("Single uppercase character", () =>{
        expect(capitalize("A")).to.equal("A")
    });

    it("Single lowercase character", () =>{
        expect(capitalize("a")).to.equal("A")
    });

    it("Longer already capitalized word", () =>{
        expect(capitalize("Blob")).to.equal("Blob")
    });

    it("All lowercase", () =>{
        expect(capitalize("blob")).to.equal("Blob")
    });

    it("All uppercase", () =>{
        expect(capitalize("BLOB")).to.equal("Blob")
    });

    it("Mixed cases", () =>{
        expect(capitalize("bLoB")).to.equal("Blob")
    });

    it("Fully reversed capitalization", () =>{
        expect(capitalize("bLOB")).to.equal("Blob")
    });

    it("Number in a string", () =>{
        expect(capitalize("10")).to.equal("10")
    });

    it("Number that isn't a string", () =>{
        expect(capitalize(10)).to.equal("10")
    });

    it("Word in an array", () =>{
        expect(capitalize(["blob"])).to.equal("Blob")
    });

    it("Null", () =>{
        expect(capitalize(null)).to.equal("")
    });

    it("Multiple words", () =>{
        expect(capitalize("blob is bouncy")).to.equal("Blob is bouncy")
    });
})

import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("Filter", () => {
    it("Test based on function use case example", () =>{
        expect(filter([{ "user": "barney", "active": true },
                       { "user": "fred",   "active": false }],
                        ({ active }) => active)).to.deep.equal([{ "user": "barney", "active": true }])
    });
    it("Test based on string", () =>{
        expect(filter([{ "user": "barney", "active": "true" },
                       { "user": "fred",   "active": "false" }],
                        ({ active }) => active=="true")).to.deep.equal([{ "user": "barney", "active": "true" }])
    });
    it("Numeric value", () =>{
        expect(filter([{ "user": "barney", "active": 10 },
                       { "user": "fred",   "active": 5 }],
                        ({ active }) => active>5)).to.deep.equal([{ "user": "barney", "active": 10 }])
    });
    it("Numeric range", () =>{
        expect(filter([{ "user": "barney", "active": 10 },
                       { "user": "fred",   "active": 5 }],
                        ({ active }) => active>4 && active<10)).to.deep.equal([{ "user": "fred", "active": 5 }])
    });
    it("Multiple criteria", () =>{
        expect(filter([{ "user": "barney", "active": 5 },
                       { "user": "fred",   "active": 5 }],
                        ({ active, user }) => active==5 && user=="barney")).to.deep.equal([{ "user": "barney", "active": 5 }])
    });
    it("Partial matching", () =>{
        expect(filter([{ "user": "barney", "active": 5 },
                       { "user": "fred",   "active": 5 }],
                        ({ user }) => user.includes("bar"))).to.deep.equal([{ "user": "barney", "active": 5 }])
    });
})

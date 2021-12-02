import chai from "chai"
import filter from "../src/filter.js"
const expect = chai.expect

describe("Filter", () => {
    it("Test based on function use case example", () =>{
        expect(filter([{ 'user': 'barney', 'active': true },
                       { 'user': 'fred',   'active': false }],
                        ({ active }) => active)).to.equal([{ 'user': 'barney', 'active': true }])
    });
})

import chai from "chai"
import add from "../src/add.js"
import get from "../src/get.js"
import memoize from "../src/memoize.js"
const expect = chai.expect

describe("Shopping Cart", () => {
    it("Integration test", () =>{
        const object = { 'a': 1, 'b': 2 }
 
        const values = memoize(array => {
            var result = []
            for(let element of Object.keys(array)) {
                result.push(array[element])
            }
            return result
        });
        values(object)

        var a = get(object, "a")
        var b = get(object, "b")

        values.cache.set(object, add(a, b))
        expect(values(object)).to.deep.equal(3)
    });

})
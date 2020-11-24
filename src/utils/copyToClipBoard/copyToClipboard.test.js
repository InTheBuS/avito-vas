const {getJSOFromArray, getHTMLofRef} = require("./copyToClipboard")

describe("Testing getHTMLOfRef function", () => {

    let testObject

    beforeEach(() => {
        testObject = {current: {outerHTML: "test text"}}
    })

    it("Copy HTML should return from ref current outerHTML", () => {
        expect(getHTMLofRef(testObject)).toContain("test text")
    })
    it("Copy HTML should return type string", () => {
        expect(typeof getHTMLofRef(testObject)).toBe("string")
    })

})

describe("Testing getJSONFromArray function", () => {

    let testArray

    beforeEach(() => {
        testArray = [{name: "name", value: "Zaven"}, {name: "type", value: "string"}]
    })

    it("should return from Array an Object equal result[item.name] = item.value", () => {
        expect(getJSOFromArray(testArray)).toEqual('{"name":"Zaven","type":"string"}')
    })

    it("should return type string", () => {
        expect(typeof getJSOFromArray(testArray)).toBe("string")
    })
})

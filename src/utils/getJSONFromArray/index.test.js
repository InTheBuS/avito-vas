import {getJSOFromArray} from "./index";

describe("Testing getJSONFromArray function", () => {

    it("simple JSON structure", () => {
        let testFieldArray = [{
            id: "body",
            component: "input",
            params: {
                value: "This is the body text",
                name: "body",
                type: "text",
                label: "some text",
                placeholder: "some placeholder",
            }}]
        let testJSONFromArray = getJSOFromArray(testFieldArray)
        expect(testJSONFromArray).toBe('{"body":"This is the body text"}')
        expect(typeof testJSONFromArray).toBe("string")
    })

    it("empty JSON structure", () => {
        let testEmptyArray = []
        let testJSONFromArray = getJSOFromArray(testEmptyArray)
        expect(testJSONFromArray).toBe('{}')
        expect(typeof testJSONFromArray).toBe("string")
    })
})

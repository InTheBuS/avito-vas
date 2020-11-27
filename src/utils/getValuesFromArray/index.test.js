import {getValuesFromArray} from "./index";

describe("Testing getValuesFromArray function", () => {
    it("returning params from Array of objects", () => {
        let testingArray = [{
                id: "body",
                component: "input",
                params: {
                    value: "This is the body text",
                    name: "body",
                    type: "text",
                    label: "some text",
                    placeholder: "some placeholder",
                }}]

        let result = getValuesFromArray(testingArray)
        expect(result).toEqual({"body": "This is the body text"})
        expect(typeof result).toBe("object")
    })

    it("testing function with empty array", () => {
        let testingArray = []
        let result = getValuesFromArray(testingArray)
        expect(result).toEqual({})
        expect(typeof result).toBe("object")
    })
})
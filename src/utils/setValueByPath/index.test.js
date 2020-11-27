import {setValueByPath} from "./index";

describe("Testing getValuesFromArray function", () => {
    it("returning params from Array of objects", () => {
        let value = "another text"
        let path = "value"
        let testingObject = {
                value: "This is the body text",
                name: "body",
                type: "text",
                label: "some text",
                placeholder: "some placeholder",
            }
            let resultObject = {
                    value: value,
                    name: "body",
                    type: "text",
                    label: "some text",
                    placeholder: "some placeholder",
                }
        let result = setValueByPath(testingObject, value, path)
        expect(result).toEqual(resultObject)
        expect(typeof result).toBe("object")
    })

})
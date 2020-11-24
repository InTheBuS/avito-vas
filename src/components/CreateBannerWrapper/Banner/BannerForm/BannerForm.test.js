import React from "react"
import renderer from "react-test-renderer"

import {BannerForm} from "./BannerForm";

describe("Testing BannerForm component", () => {

    let testArrayWithOneElem
    let testArrayWithMultipleElements

    beforeEach(() => {
        testArrayWithOneElem = [{name: "body", value: "This is the body text", type: "text", label: "test label", placeholder: "test placeholder"},]

        testArrayWithMultipleElements = [
            {name: "body", value: "This is the body text", type: "text", label: "test label", placeholder: "test placeholder"},
            {name: "color", value: "#646464", type: "color", label: "test label", placeholder: "test placeholder"},
            {name: "image", value: "", type: "text", label: "test label", placeholder: "test placeholder"},
        ]
    })

    it("rendering when array of inputs empty", () => {
        const tree = renderer.create(<BannerForm fields={testArrayWithOneElem}/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("rendering when array has one object", () => {
        const tree = renderer.create(<BannerForm fields={testArrayWithMultipleElements}/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("rendering when array has multiple objects", () => {
        const tree = renderer.create(<BannerForm />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
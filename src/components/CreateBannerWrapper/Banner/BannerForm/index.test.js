import React from "react"
import renderer from "react-test-renderer"

import {BannerForm} from "./index";

describe("Testing BannerForm component", () => {

    it("rendering when array has one object", () => {
        let testArrayWithOneElem = [{name: "body", value: "This is the body text", type: "text", label: "test label", placeholder: "test placeholder"},]
        const tree = renderer.create(<BannerForm fields={testArrayWithOneElem}/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("rendering when array has multiple objects", () => {
        let testArrayWithMultipleElements = [
            {name: "body", value: "This is the body text", type: "text", label: "test label", placeholder: "test placeholder"},
            {name: "color", value: "#646464", type: "color", label: "test label", placeholder: "test placeholder"},
            {name: "image", value: "", type: "text", label: "test label", placeholder: "test placeholder"},
        ]
        const tree = renderer.create(<BannerForm fields={testArrayWithMultipleElements}/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

    it("rendering when array of inputs empty", () => {
        const tree = renderer.create(<BannerForm />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})
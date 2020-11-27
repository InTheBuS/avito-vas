import React from "react"
import className from "./index.module.css"
import FieldGenerator from "../../../FieldGenerator";

export const BannerForm = ({fields = [], changeHandler}) => {

    const inputs = fields.length > 0
        ? fields.map((field, index) => {
            return FieldGenerator(field, index, changeHandler)
        })
        : null

    return (
        <div className={className.formWrapper}>
            {inputs}
        </div>
    )
}
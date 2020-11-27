import React from "react"
import className from "../CreateBannerWrapper/Banner/BannerForm/Fields/ColorPicker/index.module.css"

export const InputItem = (props) => {
    const itemField = props.field.params
    const handler = (e) => {
        props.handler(e.target.value, props.index, "params.value")
    }

    return (
        <label className={className.name}> {itemField.label}
            <input className={className.input} type={itemField.type} name={itemField.name} value={itemField.value}
                   onChange={handler}/>

        </label>
    )
}
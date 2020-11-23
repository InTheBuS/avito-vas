import React from "react"
import className from "./BannerInputItem.module.css"

export const InputItem = (props) => {
    const itemField = props.field
    return (
        <label className={className.name}> {`${itemField.label}:`}
            <input className={className.input} type={itemField.type} name={itemField.name} value={itemField.value}
                   onChange={(e) => {props.changeHandler(e, props.index)}} placeholder={itemField.placeholder}/>
        </label>
    )
}
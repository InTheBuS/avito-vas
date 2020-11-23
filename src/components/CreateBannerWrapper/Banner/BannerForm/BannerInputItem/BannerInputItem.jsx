import React from "react"
import s from "./BannerInputItem.module.css"

export const InputItem = (props) => {
    return (
        <label className={s.name}> {`${props.field.label}:`}
            <input className={s.input} type={props.field.type} name={props.field.name} value={props.field.value} onChange={(e)=> {props.changeHandler(e, props.index)}} />
        </label>
    )
}
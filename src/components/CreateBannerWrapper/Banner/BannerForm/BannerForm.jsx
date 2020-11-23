import React from "react"
import {InputItem} from "./BannerInputItem/BannerInputItem";
import className from "./BannerForm.module.css"

export const BannerForm = ({fields, changeHandler}) => {

    const inputs = fields.map((field, index) => {
        return (
            <InputItem key={index} field={field} changeHandler={changeHandler} index={index}/>
        )
    })

    return (
        <div className={className.formWrapper}>
            {inputs}
        </div>
    )
}
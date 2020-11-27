import React from "react"
import className from "./index.module.css"
import {Button} from "../../../Button";

export const BannerButtons = (props) => {
    const buttonFields = props.buttonState.map((buttonField, index) => {
            return <Button onClickMethod={buttonField.onClickMethod} value={buttonField.name} key={index}/>
        })

    return (
        <div className={className.buttonsWrapper}>
            {buttonFields}
        </div>
    )
}



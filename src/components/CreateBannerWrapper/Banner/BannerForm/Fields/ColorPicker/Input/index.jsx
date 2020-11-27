import React from "react"
import {Button} from "../../../../../../Button";
import className from "../index.module.css";

export const ColorInput = ({colorIndex, colorOptions, deleteHandler, colorParamsHandler, inputOptions}) => {
    const mapperInputs = inputOptions.map((field, index) => {
        return (
            <label key={field.name}>
                {field.text}
                <input name={field.name}
                       className={field.className}
                       type={field.type}
                       value={colorOptions[field.name]}
                       key={index}
                       onChange={(e) => {
                           colorParamsHandler(e.target.value, field.name, colorIndex)
                       }}/>
            </label>
        )
    })

    return (
        <div key={colorIndex} className={className.colorOptionsWrapper}>
            {mapperInputs}
            <Button onClickMethod={() => {
                deleteHandler(colorIndex)
            }}
                    className={`${className.colorButtonsDefault} ${className.deleteButton}`} value={"x"}/>
        </div>
    )
}
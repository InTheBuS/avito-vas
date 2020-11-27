import React from "react"
import {ColorInput} from "./Input";
import {Button} from "../../../../../Button";
import className from "./index.module.css"

const defaultColorInputOptions = {color: "#123456", start: "", end: ""}

export const ColorInputItem = (props) => {
    const fieldParams = props.field.params

    const arrayOfColorInputs = [
        {
            name: "color",
            className: className.input,
            type: "color",
            text: fieldParams.colorText
        },
        {
            name: "start",
            className: "",
            type: "text",
            text: fieldParams.percentTextStart
        },
        {
            name: "end",
            className: "",
            type: "text",
            text: fieldParams.percentTextEnd
        }
    ]


    const colorParamsHandler = (value, name, colorIndex) => {
        const newField = {...props.field, params: {...props.field.params, colors: [...props.field.params.colors]}}
        newField.params.colors[colorIndex][name] = value
        props.handler(value, props.index, `params.colors[${colorIndex}]`)
    }

    const angleHandler = (value) => {
        props.handler(value, props.index, "params.angle")
    }

    const activeGradientHandler = (type, length) => {
        if (type === "add" && length > 1) {
            props.handler(true, props.index, "params.activeGradient")
        }
        if (type === "delete" && length <= 1) {
            props.handler(false, props.index, "params.activeGradient")
        }
    }

    const addHandler = () => {
        const newColorsArray = props.field.params.colors
        newColorsArray.push({...defaultColorInputOptions})
        activeGradientHandler("add", newColorsArray.length)
        props.handler(newColorsArray, props.index, "params.colors")
    }

    const deleteHandler = (colorIndex) => {
        const newColorsArray = props.field.params.colors
        newColorsArray.splice(colorIndex, 1)
        activeGradientHandler("delete", newColorsArray.length)
        props.handler(newColorsArray, props.index, "params.colors")
    }

    const arrayOfInputs = fieldParams.colors.map((colorOptions, index) => {
        const inputOptions = arrayOfColorInputs.map(field => field)
        return (
            <ColorInput
                inputOptions={inputOptions}
                colorOptions={colorOptions}
                colorIndex={index}
                deleteHandler={deleteHandler}
                colorParamsHandler={colorParamsHandler}
                key={index}/>
        )
    })

    return (
        <div className={className.colorWrapper}>
            <div className={className.colorStatic}>
                <div className={className.colorLabel}>{fieldParams.label}</div>
                <div className={className.colorAngle}>
                    <div>{fieldParams.angleText}</div>
                    <input className={className.numberInput}
                           type={"text"}
                           value={fieldParams.value}
                           onChange={(e) => {
                               angleHandler(e.target.value)
                           }}/>
                </div>
                <Button
                    className={`${className.colorButtonsDefault} ${className.addColorButton}`}
                    onClickMethod={addHandler}
                    value={"Добавить цвет"}/>
            </div>
            <div className={className.colorsOptions}>
                {arrayOfInputs}
            </div>
        </div>
    )
}
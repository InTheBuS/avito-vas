import React, {useRef, useState} from "react"
import {BannerPreview} from "./Banner/BannerPrewiev";
import {BannerForm} from "./Banner/BannerForm";
import {BannerButtons} from "./Banner/BannerButtons";
import {copyToClipboard} from "../../utils/copyToClipBoard";
import {getValuesFromArray} from "../../utils/getValuesFromArray";
import {getJSOFromArray} from "./../../utils/getJSONFromArray/index"
import {setValueByPath} from "../../utils/setValueByPath";
import {savePNG} from "../../utils/saveAsPng";
import className from "./index.module.css"

export const CreateBannerWrapper = ({t}) => {

    const bannerViewRef = useRef(null)

    const changeHandler = (value, index, path) => {
        const values = [...fields]
        values[index].params = setValueByPath(values[index], value, path)
        setFields(values)
    };

    const [fields, setFields] = useState([
        {
            id: "body",
            component: "input",
            params: {
                value: "This is the body text",
                name: "body",
                type: "text",
                label: t("formInputs.bodyInput.label"),
                placeholder: t("formInputs.bodyInput.placeholder"),
            }
        },
        {
            id: "image",
            component: "input",
            params: {
                value: "",
                name: "image",
                type: "text",
                label: t("formInputs.imageLinkInput.label"),
                placeholder: t("formInputs.imageLinkInput.placeholder"),
            }
        },
        {
            id: "link",
            component: "input",
            params: {
                value: "",
                name: "link",
                type: "text",
                label: t("formInputs.siteLinkInput.label"),
                placeholder: t("formInputs.siteLinkInput.placeholder"),
            }
        },
        {
            id: "color",
            component: "colorPicker",
            params:
                {
                    activeGradient: false,
                    angle: "",
                    angleText: t("formInputs.colorInput.angle"),
                    colorText: t("formInputs.colorInput.color"),
                    percentTextStart: t("formInputs.colorInput.lineStart"),
                    percentTextEnd: t("formInputs.colorInput.lineEnd"),
                    colors: [
                        {
                            color: "#125234",
                            start: "12",
                            end: "23"
                        }
                    ],
                    label: t("formInputs.colorInput.label"),
                }
        },
    ])

    const buttonState = [
        {onClickMethod: () => copyToClipboard(bannerViewRef.current.outerHTML), name: t("exportButtons.copyHTMLButton")},
        {onClickMethod:() => copyToClipboard(getJSOFromArray(fields)), name: t("exportButtons.copyJSONButton")},
        {onClickMethod: () => savePNG(bannerViewRef.current), name: t("exportButtons.savePNGButton")}
    ]

    return (
        <div className={className.bannerWrapper}>
            <BannerPreview fields={getValuesFromArray(fields)}
                           ref={bannerViewRef}/>
            <BannerForm fields={fields}
                        changeHandler={changeHandler} />
            <BannerButtons buttonState={buttonState}/>
        </div>
    )
}
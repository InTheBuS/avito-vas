import React, {useRef, useState} from "react"
import {BannerPreview} from "./Banner/BannerPrewiev/BannerPrewiev";
import {BannerForm} from "./Banner/BannerForm/BannerForm";
import {BannerButtons} from "./Banner/BannerButtons/BannerButtons";
import {copyToClipboard, getHTMLofRef, getJSOFromArray} from "../../utils/copyToClipBoard/copyToClipboard";
import {savePNG} from "../../utils/saveAsPng/saveAsPng";
import className from "./CreateBannerWrapper.module.css"

export const CreateBannerWrapper = ({t}) => {

    const bannerViewRef = useRef(null)

    const [fields, setFields] = useState([
        {name: "body", value: "This is the body text", type: "text", label: t("formInputs.bodyInput.label"), placeholder: t("formInputs.bodyInput.placeholder")},
        {name: "color", value: "#646464", type: "color", label: t("formInputs.colorInput.label"), placeholder: t("formInputs.colorInput.placeholder")},
        {name: "image", value: "", type: "text", label: t("formInputs.imageLinkInput.label"), placeholder: t("formInputs.imageLinkInput.placeholder")},
        {name: "link", value: "", type: "text", label: t("formInputs.siteLinkInput.label"), placeholder: t("formInputs.siteLinkInput.placeholder")},
    ])
    const changeHandler = (field, index) => {
        const values = [...fields]
        values[index].value = field.target.value
        setFields(values)
    };

    const getValuesForPreview = () => {
        return fields.reduce((res, next) => {
            res[next.name] = next.value
            return res
        }, {})
    }

    return (
        <div className={className.bannerWrapper}>
            <BannerPreview fields={getValuesForPreview} ref={bannerViewRef}/>
            <BannerForm fields={fields} changeHandler={changeHandler}/>
            <BannerButtons
                fields={fields}
                copyToClipboard={copyToClipboard}
                getHTMLofRef={getHTMLofRef}
                getJSOFromArray={getJSOFromArray}
                savePNG={savePNG}
                bannerRef={bannerViewRef} t={t}/>
        </div>
    )
}
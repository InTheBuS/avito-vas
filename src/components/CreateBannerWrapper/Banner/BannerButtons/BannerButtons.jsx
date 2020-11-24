import React from "react"
import className from "./BannerButtons.module.css"

export const BannerButtons = (props) => {
    return (
        <div className={className.buttonsWrapper}>
            <button onClick={() => props.copyToClipboard(props.getHTMLofRef(props.bannerRef))}>{props.t("exportButtons.copyHTMLButton")}</button>
            <button onClick={() => props.copyToClipboard(props.getJSOFromArray(props.fields))}>{props.t("exportButtons.copyJSONButton")}</button>
            <button onClick={() => {props.savePNG(props.bannerRef.current)}}>{props.t("exportButtons.savePNGButton")}</button>
        </div>
    )
}



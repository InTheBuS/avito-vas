import React from "react"
import className from "./BannerExports.module.css"

export const BannerExports = (props) => {
    return (
        <div className={className.buttonsWrapper}>
            <button onClick={() => props.copyToClipboard(props.getHTMLofRef(props.bannerRef))}>copy HTML</button>
            <button onClick={() => props.copyToClipboard(props.getJSOFromArray(props.fields))}>copy JSON</button>
            <button onClick={() => {props.savePNG(props.bannerRef.current)}}>save PNG</button>
        </div>
    )
}



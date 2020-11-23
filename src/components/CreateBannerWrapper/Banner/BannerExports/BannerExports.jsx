import React from "react"
import s from "./BannerExports.module.css"

export const BannerExports = (props) => {

    return (
        <div className={s.buttonsWrapper}>
            <button onClick={() => {props.copyToClipboard('html', props.bannerRef)}}>copy HTML</button>
            <button onClick={() => {props.copyToClipboard('json', props.fields)}}>copy JSON</button>
            <button onClick={() => {props.savePNG(props.bannerRef)}}>save PNG</button>
        </div>
    )
}
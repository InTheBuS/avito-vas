import React from "react"
import className from "./index.module.css"

function formatToLinearGradient(color) {
    return `${color.color} ${color.start ? `${color.start}%` : ''} ${color.end ? `${color.end}%` : ''}`
}

const ForwardBannerPreview = ({fields}, ref) => {
    const data = fields
    const siteLink = data.link
    const previewText = data.body
    const angle = parseInt(data.angle) ? data.angle + "deg, " : "180deg, "
    const mappedColors = data.color.length <= 1
        ? data.color.map(color => color.color).join(", ")
        : data.color.map(formatToLinearGradient).join(", ")
    const linearGradient = angle + mappedColors

    const backgroundAllow = data.color.length > 1
        ? `linear-gradient(${linearGradient})`
        : mappedColors

    const previewBackground = {
        background: backgroundAllow
    }
    const getImg = () => {
        return data.image
            ? <img className={className.image} src={data.image}/>
            : ""
    }

    return (
        <a href={siteLink}
           className={className.banner}
           style={previewBackground}
           id={"prevId"} ref={ref}
           target="_blank"
           rel="noreferrer">
            {getImg()}
            <div className={className.tittle} onClick={() => {
            }}>{previewText} </div>
        </a>
    )
}

export const BannerPreview = React.forwardRef(ForwardBannerPreview)
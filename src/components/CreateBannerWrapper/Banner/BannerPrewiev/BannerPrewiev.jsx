import React from "react"
import className from "./BannerPrewiev.module.css"

const ForwardBannerPreview = ({fields}, ref) => {
    const data = fields()
    const siteLink = data.link
    const previewText = data.body
    const previewBackground = {
        backgroundColor: data.color,
    }

    const getImg = () => {
       return data.image
           ? <img className={className.image}  src={data.image}/>
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
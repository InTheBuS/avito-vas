import React from "react"
import b from "./BannerPrewiev.module.css"

const BannerPreview = ({fields}, ref) => {
    const data = fields()
    const siteLink = data.link
    const previewText = data.body
    const previewBackground = {
        backgroundColor: data.color,
    }

    const pngLink = () => {
       if (data.image) return <img className={b.image} src={data.image}  alt={'banner'} onError={(e) => {errorImgSrc(e)}
       }/>
    }

    const errorImgSrc = (e) => {
        e.target.onError = null
        e.target.src = ''
    }

    return (
        <a href={siteLink} className={b.banner} style={previewBackground} id={'prevId'} ref={ref}>
            {pngLink()}
            <div className={b.tittle} onClick={() => {
                console.log(ref)
            }}>{previewText} </div>
        </a>
    )
}

export const ForwardBannerView = React.forwardRef(BannerPreview)
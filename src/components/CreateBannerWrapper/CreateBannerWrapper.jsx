import React, {useRef, useState} from "react"
import {ForwardBannerView} from "./Banner/BannerPrewiev/BannerPrewiev";
import {BannerForm} from "./Banner/BannerForm/BannerForm";
import {BannerExports} from "./Banner/BannerExports/BannerExports";
import {copyToClipboard} from "../../utils/copyToClipboard";
import {savePNG} from "../../utils/saveAsPng";
import b from "./CreateBannerWrapper.module.css"

export const CreateBannerWrapper = () => {

    const bannerViewRef = useRef(null)

    const [fields, setFields] = useState([
        {name: 'body', value: 'This is the body text', type: "text", label: 'Введите текст'},
        {name: 'color', value: '#646464', type: "color", label: 'Выберите цвет'},
        {name: 'image', value: '', type: "text", label: 'Вставьте ссылку на картинку'},
        {name: 'link', value: '', type: "text", label: 'Вставьте ссылку на страницу'},
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
        <div className={b.bannerWrapper}>
            <ForwardBannerView fields={getValuesForPreview} ref={bannerViewRef}/>
            <BannerForm fields={fields} changeHandler={changeHandler}/>
            <BannerExports copyToClipboard={copyToClipboard} savePNG={savePNG} bannerRef={bannerViewRef}
                           fields={fields}/>
        </div>
    )
}
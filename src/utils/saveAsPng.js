import html12canvas from "html2canvas";
import {saveAs} from "file-saver"

export const savePNG = (ref) => {
    html12canvas(ref.current, {allowTaint: true, useCORS: true, proxy: true})
        .then((canvas) => {
            try {
                canvas.toBlob(function (blob) {
                    saveAs(blob, "pretty image.png")
                })
            } catch (err) {
                throw new Error(err)
            }
        })
}
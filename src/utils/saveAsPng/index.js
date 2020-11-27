import html12canvas from "html2canvas";
import {saveAs} from "file-saver"

export const savePNG = (HTMLElement) => {
    html12canvas(HTMLElement, {allowTaint: true, useCORS: true})
        .then((canvas) => {
            try {
                canvas.toBlob(function (blob) {
                    saveAs(blob, "pretty image.png")
                }, "image/png")
            } catch (err) {
                throw new Error(err)
            }
        })
}
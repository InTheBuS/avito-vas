export const copyToClipboard = (text) => {
    const textField = document.createElement("textarea")
    textField.innerText = text;

    document.body.appendChild(textField)
    textField.select()
    document.execCommand("copy")
    textField.remove()
}

export function getHTMLofRef(ref) {
    return ref.current.outerHTML
}

export function getJSOFromArray(fields) {
    const formatted = fields.reduce((res, next) => {
        res[next.name] = next.value
        return res
    }, {})
    return JSON.stringify( {...formatted})
}
export const copyToClipboard = (type, ref) => {
    const textField = document.createElement('textarea')

    if (type === 'html') {
        textField.innerText = ref.current.outerHTML
    }

    if (type === 'json') {
        const jsonFormat = ref.reduce((res, next) => {
            res[next.name] = next.value
            return res
        }, {})
        textField.innerText = JSON.stringify({Banner: {...jsonFormat}})
    }

    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
}
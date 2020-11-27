export function getValuesFromArray(fields) {
    return fields.reduce((res, next) => {
        if (next.params)
        if (next.params.hasOwnProperty("colors")) {
            res[next.id] = next.params.colors
            res["angle"] = next.params.angle
        } else res[next.id] = next.params.value
        return res
    }, {})
}
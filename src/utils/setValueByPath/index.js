export function setValueByPath(obj, value, path) {
    let i;
    path = path.split('.', );
    for (i = 0; i < path.length - 1; i++)
        obj = obj[path[i]];

    obj[path[i]] = value
    console.log(obj)
    return obj;
}
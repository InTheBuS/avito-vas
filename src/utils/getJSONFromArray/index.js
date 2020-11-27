import {getValuesFromArray} from "../getValuesFromArray";

export function getJSOFromArray(fields) {
    return JSON.stringify( {...getValuesFromArray(fields)})
}
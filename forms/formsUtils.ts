import { type FieldNamesMarkedBoolean, } from "react-hook-form"

export function getDataToUpdate<T>(data: T, dirtyFields:Partial<Readonly<any>>, fieldsToIgnore:string[]=[] ) {
    return Object.keys(dirtyFields)
            .filter(field =>!fieldsToIgnore.includes(field))
            .reduce((acc, curr) => {
                return { ...acc, [curr]: data[curr as keyof T] }
                }, {})
}
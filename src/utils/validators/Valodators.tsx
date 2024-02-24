export const required = (value: any) => {
    if (value) return undefined;
    return 'Field is required';

}

export const maxLengthСreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined;
}

export const minLength3 = (value: any) => {
    if (value && value.length < 3) return 'Min length is 3 symbols'

    return undefined;
}
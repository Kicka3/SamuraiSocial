
export const required = (value: string) => {
    if (value) return undefined;
    return 'Field is required';

}

export const maxLength = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`

    return undefined;
}

export const minLength = (minLength: number) => (value: string) => {
    if (value && value.length < minLength) return `Min length is ${minLength} symbols`

    return undefined;
}




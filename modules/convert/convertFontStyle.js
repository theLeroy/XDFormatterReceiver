

export const convertFontStyle = (value, prefix) => {
    switch (value) {
        case "Bold":
            return `${prefix}font-bold`;
        case "Book":
            return `${prefix}font-normal`;
        case "Regular":
            return `${prefix}font-normal`;
        case "Italic":
            return `${prefix}font-italic`;
        case "Medium":
            return `${prefix}font-medium`;
        case "SemiBold":
            return `${prefix}font-semibold`;
        case "Thin":
            return `${prefix}font-thin`;
        default:
            return `${prefix}font-normal`;
    }

};


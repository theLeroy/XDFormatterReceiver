

export const convertFontStyle = (value, prefix) => {
    let retrn = '';
    switch (value) {
        case "Bold":
            retrn = `${prefix}font-bold`;
            break;
        case "Book":
            retrn = `${prefix}font-normal`;
            break;
        case "Regular":
            retrn = `${prefix}font-normal`;
            break;
        case "Italic":
            retrn = `${prefix}font-italic`;
            break;
        case "Medium":
            retrn = `${prefix}font-medium`;
            break;
        case "SemiBold":
            retrn = `${prefix}font-semibold`;
            break;
        case "Thin":
            retrn = `${prefix}font-thin`;
            break;
        default:
            retrn = `${prefix}font-normal`;
    }

    return retrn;
};


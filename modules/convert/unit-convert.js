// https://github.com/stevezease/tailwind-converter/blob/master/src/scripts/parser/unit-convert.js
// Attempts to round the units if possible to fit tailwind otherwise gives back the original value;




export const convertUnit = (
    remArray,
    value,
    conversionFactor = 16,
    stripLeadingZeros = false
) => {
    let converted = value;
    // if (value.endsWith('rem')) {
    // converted = `${roundToNearestRem(remArray, value)}rem`;
    // } else if (value.endsWith('px')) {
    converted = convertPxToRem(remArray, value, conversionFactor);
    // }
    console.warn(converted);
    if (stripLeadingZeros && isNaN(converted)) {
        converted = converted.replace(/^[0.]+/, '.');
    }
    return converted;
};

const convertPxToRem = (remArray, value, conversionFactor = 16) => {
    const numericVal = parseInt(value);
    const min = Math.min(...remArray);
    const max = Math.max(...remArray);
    if (
        numericVal &&
        numericVal <= conversionFactor * max &&
        numericVal >= conversionFactor * min
    ) {
        let rem = numericVal / conversionFactor;
        const closest = roundToNearestRem(remArray, rem);
        if (closest === 0) {
            return 0;
        } else {
            return `${closest}rem`;
        }
    } else {
        // return value if not in round range of remArray
        value = value / conversionFactor
        return `${Math.round(value * 10) / 10}rem`;
    }
};

const roundToNearestRem = (remArray, num) => {
    return remArray.reduce((prev, curr) => {
        return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
    });
};
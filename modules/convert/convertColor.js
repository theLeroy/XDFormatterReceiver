
export const convertColor = (color, settings, TailwindColors = []) => {
    color = switchToHex(color)
    if (!settings.autoConvertColor || !isColor(color)) {
        return color;
    }
    try {

        let TColorsConverted = {}
        // Convert Tailwind data do plugin useble format
        for (let index = 0; index < TailwindColors.length; index++) {

            // loop through Tailwind colors and get the Color Value and the Class name 
            let ColorName = Object.keys(TailwindColors[index])[0]
            let ColorVal = TailwindColors[index][Object.keys(TailwindColors[index])[0]]
            // Convert To hex values
            ColorVal = switchToHex(ColorVal)
            TColorsConverted[`${ColorVal}`] = `.text-${ColorName}`
        }

        // Move new Classes witch come form Tailwind Config to the color array and rewrite if it already exist
        Object.keys(TColorsConverted).forEach(function (key) {
            Colors[`${key}`] = TColorsConverted[key];
        });

        // Retrun 
        if (
            Colors[color]
        ) {
            //If in tailwind system
            return [true, `${Colors[color].substring(1)}`]
        } else {
            // if not in tailwind system
            return [false, color];
        }

    } catch (e) {
        console.error('error converting color', e);
        return color;
    }
};

const switchToHex = (color) => {
    return color.length == 8 ? color.substring(0, color.length - 2) : color
}

// Only checks names and Hexes - Need to improve
export const isColor = (strColor) => {
    var s = new Option().style;
    s.color = strColor;
    var test1 = s.color == strColor;

    if (/^#[0-9A-F]{6}$/i.test(strColor) == true) {
        return true;
    } else {
        return false;
    }
};


var Colors = {
    '#000000': '.text-black',
    '#ffffff': '.text-white',
    '#f7fafc': '.text-gray-100',
    '#edf2f7': '.text-gray-200',
    '#e2e8f0': '.text-gray-300',
    '#cbd5e0': '.text-gray-400',
    '#a0aec0': '.text-gray-500',
    '#718096': '.text-gray-600',
    '#4a5568': '.text-gray-700',
    '#2d3748': '.text-gray-800',
    '#1a202c': '.text-gray-900',
    '#fff5f5': '.text-red-100',
    '#fed7d7': '.text-red-200',
    '#feb2b2': '.text-red-300',
    '#fc8181': '.text-red-400',
    '#f56565': '.text-red-500',
    '#e53e3e': '.text-red-600',
    '#c53030': '.text-red-700',
    '#9b2c2c': '.text-red-800',
    '#742a2a': '.text-red-900',
    '#fffaf0': '.text-orange-100',
    '#feebc8': '.text-orange-200',
    '#fbd38d': '.text-orange-300',
    '#f6ad55': '.text-orange-400',
    '#ed8936': '.text-orange-500',
    '#dd6b20': '.text-orange-600',
    '#c05621': '.text-orange-700',
    '#9c4221': '.text-orange-800',
    '#7b341e': '.text-orange-900',
    '#fffff0': '.text-yellow-100',
    '#fefcbf': '.text-yellow-200',
    '#faf089': '.text-yellow-300',
    '#f6e05e': '.text-yellow-400',
    '#ecc94b': '.text-yellow-500',
    '#d69e2e': '.text-yellow-600',
    '#b7791f': '.text-yellow-700',
    '#975a16': '.text-yellow-800',
    '#744210': '.text-yellow-900',
    '#f0fff4': '.text-green-100',
    '#c6f6d5': '.text-green-200',
    '#9ae6b4': '.text-green-300',
    '#68d391': '.text-green-400',
    '#48bb78': '.text-green-500',
    '#38a169': '.text-green-600',
    '#2f855a': '.text-green-700',
    '#276749': '.text-green-800',
    '#22543d': '.text-green-900',
    '#e6fffa': '.text-teal-100',
    '#b2f5ea': '.text-teal-200',
    '#81e6d9': '.text-teal-300',
    '#4fd1c5': '.text-teal-400',
    '#38b2ac': '.text-teal-500',
    '#319795': '.text-teal-600',
    '#2c7a7b': '.text-teal-700',
    '#285e61': '.text-teal-800',
    '#234e52': '.text-teal-900',
    '#ebf8ff': '.text-blue-100',
    '#bee3f8': '.text-blue-200',
    '#90cdf4': '.text-blue-300',
    '#63b3ed': '.text-blue-400',
    '#4299e1': '.text-blue-500',
    '#3182ce': '.text-blue-600',
    '#2b6cb0': '.text-blue-700',
    '#2c5282': '.text-blue-800',
    '#2a4365': '.text-blue-900',
    '#ebf4ff': '.text-indigo-100',
    '#c3dafe': '.text-indigo-200',
    '#a3bffa': '.text-indigo-300',
    '#7f9cf5': '.text-indigo-400',
    '#667eea': '.text-indigo-500',
    '#5a67d8': '.text-indigo-600',
    '#4c51bf': '.text-indigo-700',
    '#434190': '.text-indigo-800',
    '#3c366b': '.text-indigo-900',
    '#faf5ff': '.text-purple-100',
    '#e9d8fd': '.text-purple-200',
    '#d6bcfa': '.text-purple-300',
    '#b794f4': '.text-purple-400',
    '#9f7aea': '.text-purple-500',
    '#805ad5': '.text-purple-600',
    '#6b46c1': '.text-purple-700',
    '#553c9a': '.text-purple-800',
    '#44337a': '.text-purple-900',
    '#fff5f7': '.text-pink-100',
    '#fed7e2': '.text-pink-200',
    '#fbb6ce': '.text-pink-300',
    '#f687b3': '.text-pink-400',
    '#ed64a6': '.text-pink-500',
    '#d53f8c': '.text-pink-600',
    '#b83280': '.text-pink-700',
    '#97266d': '.text-pink-800',
    '#702459': '.text-pink-900',
}
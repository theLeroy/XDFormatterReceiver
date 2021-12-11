
import { convertUnit } from './unit-convert';

export const convertFontSize = (fontSize, settings) => {
    let processedValue = convertUnit(fontSizeArray, fontSize, settings);
    if (
        tailwindcssFontSize[processedValue]
    ) {
        //If in tailwind system

        return [true, `${tailwindcssFontSize[processedValue].substring(1)}`]
    } else {
        // if not in tailwind system
        return [false, processedValue];
        // console.log('fontSize could not be Converted');
    }
};

const fontSizeArray = [
    0.75,
    0.875,
    1,
    1.125,
    1.25,
    1.5,
    1.875,
    2.25,
    2.5,
    3,
    4,
];

var tailwindcssFontSize = {
    '.75rem': '.text-xs',
    '.875rem': '.text-sm',
    '1rem': '.text-base',
    '1.125rem': '.text-lg',
    '1.25rem': '.text-xl',
    '1.5rem': '.text-2xl',
    '1.875rem': '.text-3xl',
    '2.25rem': '.text-4xl',
    '3rem': '.text-5xl',
    '4rem': '.text-6xl',
}
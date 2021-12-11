
import { convertUnit } from './unit-convert';

// !! line height uses pt as unit
// https://community.adobe.com/t5/adobe-xd-discussions/unit-of-letter-spacing-and-line-height/m-p/10478194


export const convertLineHeight = (LineHeight, settings) => {
    let processedValue = convertUnit(lineHeightArray, LineHeight, settings);
    if (
        tailwindcssLineHeight[processedValue]
    ) {
        //If in tailwind system
        return [true, `${tailwindcssLineHeight[processedValue].substring(1)}`]
    } else {
        // if not in tailwind system
        return [false, processedValue];
        // console.log('fontSize could not be Converted');
    }
};

//Rounded Because of rounding in convertUnit
var tailwindcssLineHeight = {
    '0': '.leading-normal',
    '0rem': '.leading-normal',
    '1': '.leading-none',
    '2': '.leading-loose',
    '1.25': '.leading-tight',
    '1.375': '.leading-snug',
    '1.5': '.leading-normal',
    '1.625': '.leading-relaxed',
    '.75rem': '.leading-3',
    '1rem': '.leading-4',
    '1.25rem': '.leading-5',
    '1.5rem': '.leading-6',
    '1.75rem': '.leading-7',
    '2rem': '.leading-8',
    '2.25rem': '.leading-9',
    '2.5rem': '.leading-10',
}

const lineHeightArray = [0, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.25, 2.5];

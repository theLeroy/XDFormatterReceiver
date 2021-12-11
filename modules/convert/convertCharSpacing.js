
import { convertUnit } from './unit-convert';

// !! Char spacing uses mili ems 
// https://community.adobe.com/t5/adobe-xd-discussions/units-for-character-spacing/td-p/8835008


export const convertCharSpacing = (CharSpacing, settings) => {
    let processedValue = convertUnit(LetterSpacingArray, CharSpacing, settings);
    // / 100 Because of mili ems unit
    processedValue = processedValue.substr(0, processedValue.length - 3);
    processedValue = processedValue / 100;
    if (
        tailwindcssLetterSpacing[processedValue]
    ) {
        //If in tailwind system
        return [true, `${tailwindcssLetterSpacing[processedValue].substring(1)}`]
    } else {
        // if not in tailwind system
        return [false, processedValue];
        // console.log('fontSize could not be Converted');
    }
};

//Rounded Because of rounding in convertUnit
var tailwindcssLetterSpacing = {
    '0': '.tracking-normal',
    '-0.05': '.tracking-tighter',
    '-0.025': '.tracking-tight',
    '0.025': '.tracking-wide',
    '0.05': '.tracking-wider',
    '0.1': '.tracking-widest',
}


const LetterSpacingArray = [
    0,
    -0.05,
    -0.025,
    0.025,
    0.05,
    0.1,
];
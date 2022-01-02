
import { convertUnit } from './unit-convert';

// !! Char spacing uses mili ems 
// https://community.adobe.com/t5/adobe-xd-discussions/units-for-character-spacing/td-p/8835008


export const convertCharSpacing = (CharSpacing) => {


    // / 1000 Because of mili ems unit
    let processedValue = CharSpacing / 1000
    //Strip zeros at the end
    processedValue = parseFloat(processedValue).toFixed(3);

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
    '0.000': '.tracking-normal',
    '-0.050': '.tracking-tighter',
    '-0.025': '.tracking-tight',
    '0.0250': '.tracking-wide',
    '0.050': '.tracking-wider',
    '0.100': '.tracking-widest',
}


const LetterSpacingArray = [
    0.000,
    -0.050,
    -0.0250,
    0.0250,
    0.050,
    0.100,
];
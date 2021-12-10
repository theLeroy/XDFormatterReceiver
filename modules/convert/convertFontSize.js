
import { convertUnit } from './unit-convert';

export const convertFontSize = (fontSize, settings) => {
    return convertUnit(fontSizeArray, fontSize, settings, true);
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

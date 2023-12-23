import { readFileSync } from 'fs';
const OnestBlack = Buffer.from(readFileSync('./assets/fonts/Onest-Black.ttf', { encoding: 'binary' }), 'binary'), OnestMedium = Buffer.from(readFileSync('./assets/fonts/Onest-Medium.ttf', { encoding: 'binary' }), 'binary');
export default {
    width: 512,
    height: 512,
    fonts: [
        {
            name: 'Onest',
            data: OnestMedium,
            weight: 500,
        },
        {
            name: 'Onest',
            data: OnestBlack,
            weight: 900,
        }
    ]
};

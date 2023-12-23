import { readFileSync } from 'fs';
const DMSans = Buffer.from(readFileSync('./assets/fonts/DMSans-Regular.ttf', { encoding: 'binary' }), 'binary'), DMSansBlack = Buffer.from(readFileSync('./assets/fonts/DMSans-Black.otf', { encoding: 'binary' }), 'binary');
export default {
    width: 512,
    height: 512,
    fonts: [
        {
            name: 'DM Sans',
            data: DMSans,
            weight: 400,
        },
        {
            name: 'DM Sans',
            data: DMSansBlack,
            weight: 900,
        }
    ]
};

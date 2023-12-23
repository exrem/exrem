import React from 'react';
import { writeFileSync } from 'fs';
import satori from 'satori';
import { default as i18n, locales } from './i18n.js';
import options from './options.js';
async function GenerateSVG(locale) {
    const dictionary = i18n[locale], Header = () => (React.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            padding: '16px',
            backgroundColor: 'white',
            backgroundImage: 'url(https://play.tailwindcss.com/img/grid.svg)',
            minWidth: 480,
            fontWeight: 900,
            boxShadow: '0 0 8px black'
        } },
        React.createElement("span", { style: {
                display: 'flex',
                gap: '18px',
                fontSize: '64px'
            } },
            React.createElement("img", { src: 'https://em-content.zobj.net/source/apple/354/waving-hand_1f44b.png', width: 80 }),
            dictionary.hello),
        React.createElement("span", { style: {
                fontSize: '24px'
            } }, dictionary.welcome))), svg = await satori(React.createElement("div", { style: {
            display: 'flex',
            padding: '16px'
        } },
        React.createElement(Header, null)), options);
    writeFileSync(locale == 'en' ? 'README.svg' : `README-${locale}.svg`, svg);
}
for (const locale of locales) {
    GenerateSVG(locale);
}

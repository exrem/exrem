import React from 'react';
import { writeFileSync } from 'fs';
import satori from 'satori';
import { Dictionary, Locales } from './i18n.js';
import options from './options.js';
async function GenerateSVG(locale) {
    const dictionary = Dictionary[locale], Header = () => (React.createElement("div", { style: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            padding: '24px 16px',
            backgroundColor: 'white',
            backgroundImage: 'url(https://play.tailwindcss.com/img/grid.svg)',
            minWidth: 608,
            maxWidth: 640,
            fontWeight: 700,
            boxShadow: '0 0 8px black'
        } },
        React.createElement("span", { style: {
                display: 'flex',
                gap: '20px',
                fontWeight: 900,
                fontSize: '48px'
            } },
            React.createElement("img", { src: 'https://em-content.zobj.net/source/apple/354/waving-hand_1f44b.png', width: 64 }),
            dictionary.hello),
        React.createElement("span", { style: {
                fontSize: '16px'
            } }, dictionary.welcome))), svg = await satori(React.createElement("div", { style: {
            display: 'flex',
            padding: '16px',
            fontFamily: locale === 'ja' ? 'Noto Serif JP' : 'Unbounded'
        } },
        React.createElement(Header, null)), options);
    writeFileSync(locale === 'en' ? 'README.svg' : `README-${locale}.svg`, svg);
}
for (const locale of Locales) {
    GenerateSVG(locale);
}

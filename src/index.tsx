import React from 'react'
import { writeFileSync } from 'fs'
import satori from 'satori'

import { Dictionary, Locale, Locales } from './i18n.js'
import options from './options.js'

async function GenerateSVG(locale: Locale) {
  const dictionary = Dictionary[locale],
    Header = () => (
      <div style={{
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
      }}>
        <span style={{
          display: 'flex',
          gap: '18px',
          fontSize: '64px'
        }}>
          <img src='https://em-content.zobj.net/source/apple/354/waving-hand_1f44b.png' width={80} />
          {dictionary.hello}
        </span>
        <span style={{
          fontSize: '24px'
        }}>{dictionary.welcome}</span>
      </div>
    ),
    svg = await satori(
      <div style={{
        display: 'flex',
        padding: '16px'
      }}>
        <Header />
      </div>,
      options
    )

  writeFileSync(locale === 'en' ? 'README.svg' : `README-${locale}.svg`, svg)
}

for (const locale of Locales) {
  GenerateSVG(locale)
}
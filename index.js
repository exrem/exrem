import satori from 'satori'
import { readFileSync, writeFileSync } from 'fs'

const Onest = Buffer.from(readFileSync('./assets/fonts/Onest-Medium.ttf', { encoding: 'binary' }), 'binary'),
  svg = await satori(
    {
      type: 'div',
      props: {
        children: 'hello, world',
        style: {
          color: 'white',
          background: 'linear-gradient(to right, white, #ffffff00)',
          border: '1px solid white'
        },
      },
    },
    {
      width: 400,
      height: 400,
      fonts: [{
        name: 'Onest',
        data: Onest,
        weight: 500,
        style: 'normal'
      }]
    }
  )

writeFileSync('./test.svg', svg)
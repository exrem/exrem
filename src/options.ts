import { readFileSync } from 'fs'
import { SatoriOptions } from 'satori'

const Unbounded = Buffer.from(readFileSync('./assets/fonts/Unbounded-Regular.ttf', { encoding: 'binary' }), 'binary'),
  UnboundedBold = Buffer.from(readFileSync('./assets/fonts/Unbounded-Bold.ttf', { encoding: 'binary' }), 'binary'),
  UnboundedBlack = Buffer.from(readFileSync('./assets/fonts/Unbounded-Black.ttf', { encoding: 'binary' }), 'binary')

const NotoSerifJP = Buffer.from(readFileSync('./assets/fonts/NotoSerifJP-Regular.otf', { encoding: 'binary' }), 'binary'),
  NotoSerifJPBold = Buffer.from(readFileSync('./assets/fonts/NotoSerifJP-Bold.otf', { encoding: 'binary' }), 'binary'),
  NotoSerifJPBlack = Buffer.from(readFileSync('./assets/fonts/NotoSerifJP-Black.otf', { encoding: 'binary' }), 'binary')

export default {
  width: 640,
  height: 640,
  fonts: [
    {
      name: 'Unbounded',
      data: Unbounded,
      weight: 400,
    },
    {
      name: 'Unbounded',
      data: UnboundedBold,
      weight: 700,
    },
    {
      name: 'Unbounded',
      data: UnboundedBlack,
      weight: 900,
    },
    {
      name: 'Noto Serif JP',
      data: NotoSerifJP,
      weight: 400,
    },
    {
      name: 'Noto Serif JP',
      data: NotoSerifJPBold,
      weight: 700,
    },
    {
      name: 'Noto Serif JP',
      data: NotoSerifJPBlack,
      weight: 900,
    }
  ]
} satisfies SatoriOptions
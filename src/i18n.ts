type Template = {
  hello: string,
  welcome: string
}

export const locales = ['en']
export type Locale = typeof locales[number]
export default {
  en: {
    hello: 'Hello!',
    welcome: 'and welcome to my github page! ^^'
  }
} as Record<Locale, Template>
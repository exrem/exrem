type Template = {
  hello: string,
  welcome: string
}

export const locales = ['az', 'en', 'tr'] as const
export type Locale = typeof locales[number]
export default {
  en: {
    hello: 'Hello!',
    welcome: 'and welcome to my github page! ^^'
  },
  az: {
    hello: 'Salam!',
    welcome: 'github səhifəmə xoş gəlmişsiniz! ^^'
  },
  tr: {
    hello: 'Merhaba!',
    welcome: 'github sayfama hoş geldiniz!'
  }
} as Record<Locale, Template>
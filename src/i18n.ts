export default const Dictionary = {
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
} as const
export type Locale = keyof typeof Dictionary
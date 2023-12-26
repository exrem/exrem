type DictionaryEntry = {
  hello: string
  welcome: string
}

export const Locales = ['az', 'en', 'ru', 'tr'] as const
export type Locale = typeof Locales[number]

export const Dictionary: Record<Locale, DictionaryEntry> = {
  az: {
    hello: 'Salam!',
    welcome: 'github səhifəmə xoş gəlmişsiniz! ^^'
  },
  en: {
    hello: 'Hello!',
    welcome: 'and welcome to my github page! ^^'
  },
  ru: {
    hello: 'Здравствуйте!',
    welcome: 'добро пожаловать в мою страницу гитхаба! ^^'
  },
  tr: {
    hello: 'Merhaba!',
    welcome: 'github sayfama hoş geldiniz!'
  }
}
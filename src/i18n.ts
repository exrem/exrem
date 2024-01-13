type DictionaryEntry = {
  hello: string
  welcome: string
}

export const Locales = ['az', 'en', 'ja', 'ru', 'tr'] as const
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
  ja: {
    hello: '今日は',
    welcome: '私のギットハブページへようこそ! ^^'
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
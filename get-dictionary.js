import 'server-only'

const dictionaries = {
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default)
}

export const getDictionary = async (locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()

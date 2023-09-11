import type { AppInfo } from '@/types/app'
export const APP_ID = '982927e4-9975-4bb3-a7b2-62458c840991'
export const API_KEY = 'app-FKeW4tWzosImRA7WmSflyDyA'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Онлайн-чат',
  description: 'Онлайн чат с оператором',
  copyright: '(c) PYRAMIDGROUP.KZ',
  privacy_policy: '',
  default_language: 'ru-RU',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

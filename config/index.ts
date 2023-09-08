import type { AppInfo } from '@/types/app'
export const APP_ID = 'e1acb5fd-4e07-4925-b8f4-6402546598ef'
export const API_KEY = 'app-WtCOafHKXmnsig8IwTDg6PWY'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Chat APP',
  description: '',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48

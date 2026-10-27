'use client'

import { useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { getMessages, localeOptions, type Locale } from '@/data/i18n'

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()
  const search = useSearchParams()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  function changeLanguage(nextLocale: Locale) {
    const params = new URLSearchParams(search.toString())
    params.set('lang', nextLocale)
    router.replace(`${pathname}?${params.toString()}${window.location.hash}`, { scroll: false })
  }

  return <label className="language-switch" aria-label={getMessages(locale).language}>
    <span aria-hidden="true">文</span>
    <select value={locale} onChange={(event) => changeLanguage(event.target.value as Locale)} aria-label={getMessages(locale).language}>
      {localeOptions.map((option) => <option key={option.code} value={option.code}>{option.label}</option>)}
    </select>
  </label>
}

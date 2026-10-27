import Link from 'next/link'
import { getMessages, type Locale } from '@/data/i18n'

type Track = 'sales' | 'admin' | 'all'
export function TrackSwitch({ track, locale }: { track: Track; locale: Locale }) {
  const text = getMessages(locale)
  return <nav className="track-switch" aria-label={text.chooseTrack}>
    <Link role="tab" aria-selected={track === 'sales'} className={track === 'sales' ? 'active' : ''} href={`/?jalur=sales&lang=${locale}`} scroll={false}>{text.sales}</Link>
    <Link role="tab" aria-selected={track === 'admin'} className={track === 'admin' ? 'active' : ''} href={`/?jalur=admin&lang=${locale}`} scroll={false}>{text.admin}</Link>
  </nav>
}

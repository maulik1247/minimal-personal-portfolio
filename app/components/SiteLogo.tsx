import Link from 'next/link'

type SiteLogoProps = {
  className?: string
  onClick?: () => void
}

export default function SiteLogo({ className = '', onClick }: SiteLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Maulik Tanna home"
      className={`inline-flex shrink-0 items-center ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D4F7D4] text-sm font-bold tracking-tight text-black ring-1 ring-black/5 transition-transform duration-300 ease-smooth active:scale-95">
        MT
      </span>
    </Link>
  )
}

export function FacebookIcon({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16.4V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7h3z" />
    </svg>
  )
}

export function InstagramIcon({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function LinkedInIcon({ size = 24, className = '' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
      <path d="M6.5 21v-11h-3v11h3zm-1.5-12.5c1 0 1.7-.7 1.7-1.7S6 5.1 5 5.1s-1.7.7-1.7 1.7.7 1.7 1.7 1.7zM10 21h3v-6c0-1.5.6-2.4 2-2.4s1.8 1 1.8 2.4v6h3v-6.6c0-3-1.6-4.4-3.8-4.4-1.7 0-2.5.9-3 1.6v-1.3h-3V21z" />
    </svg>
  )
}
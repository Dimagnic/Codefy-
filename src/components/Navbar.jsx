import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#acerca' },
  { label: 'Productos', href: '#productos' },
  { label: '¿Por qué Cero+?', href: '#porque' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo}>
        Cer<span>o+</span>
      </a>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {LINKS.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a
            href="https://wa.me/52TUNUMERO"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos →
          </a>
        </li>
      </ul>

      <button
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Menú"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}

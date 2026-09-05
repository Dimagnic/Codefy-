import styles from './Productos.module.css'

const PILLS = [
  { icon: '🤖', label: 'ClienteAI.site', href: 'https://clienteai.site' },
  { icon: '🛍️', label: 'E-commerce Engine', href: '#' },
  { icon: '📋', label: 'POS Inteligente', href: '#' },
  { icon: '📈', label: 'Dashboard Analítico', href: '#' },
  { icon: '💬', label: 'CRM WhatsApp', href: '#' },
  { icon: '🌐', label: 'Web Builder', href: '#' },
]

export default function Productos() {
  return (
    <section id="productos" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.label}>Productos propios</span>
        <h2 className={styles.title}>Plataformas que ya construimos</h2>
        <p className={styles.sub}>
          Además de proyectos a medida, desarrollamos nuestros propios productos SaaS que puedes adoptar hoy.
        </p>
      </div>
      <div className={styles.row}>
        {PILLS.map(p => (
          <a key={p.label} href={p.href} className={styles.pill}
            target={p.href !== '#' ? '_blank' : undefined}
            rel="noopener noreferrer">
            <div className={styles.pillIcon}>{p.icon}</div>
            <span className={styles.pillLabel}>{p.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

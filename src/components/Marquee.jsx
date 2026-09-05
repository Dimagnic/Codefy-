import styles from './Marquee.module.css'

const ITEMS = [
  'SaaS', 'E-commerce', 'POS', 'CRM', 'ERP', 'Dashboards',
  'Integraciones API', 'Páginas Web', 'Logotipos', 'Banners',
  'Automatizaciones', 'IA', 'React', 'Node.js', 'Supabase',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item} <span className={styles.star}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

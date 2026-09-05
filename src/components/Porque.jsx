import styles from './Porque.module.css'

const ITEMS = [
  { n:'01', title:'Ingeniería real', desc:'Detrás de cada proyecto hay un Ingeniero Electrónico y de Software con experiencia técnica profunda.' },
  { n:'02', title:'Todo en un lugar', desc:'Web, sistema, identidad visual, automatización. No necesitas 5 proveedores distintos.' },
  { n:'03', title:'A medida siempre', desc:'No usamos soluciones genéricas. Cada proyecto se diseña específicamente para tu negocio.' },
  { n:'04', title:'Entrega ágil', desc:'Sin burocracia ni procesos lentos. Trabajamos rápido, con comunicación directa y resultados concretos.' },
  { n:'05', title:'Soporte continuo', desc:'La relación no termina al entregar. Estamos contigo para mejoras, ajustes y evolución.' },
  { n:'06', title:'Precio justo', desc:'Calidad de agencia grande, trato y precio de socio tecnológico. Tu presupuesto rinde más.' },
]

export default function Porque() {
  return (
    <section id="porque" className={styles.section}>
      <div className={styles.intro}>
        <span className={styles.label}>Nuestra diferencia</span>
        <h2 className={styles.title}>¿Por qué elegir Cero+?</h2>
        <p className={styles.sub}>No vendemos plantillas. Construimos lo que tu negocio realmente necesita.</p>
      </div>
      <div className={styles.grid}>
        {ITEMS.map(item => (
          <div key={item.n} className={styles.item}>
            <div className={styles.num}>{item.n}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

import useScrollReveal from '../hooks/useScrollReveal'
import styles from './Servicios.module.css'

const CARDS = [
  { icon: '⚡', title: 'SaaS a Medida', desc: 'Plataformas software como servicio construidas desde cero. Tu visión, nuestra arquitectura, resultados reales.', featured: true },
  { icon: '🛒', title: 'E-commerce', desc: 'Tiendas online que convierten visitas en ventas. Catálogo, pagos, inventario y experiencia de usuario impecable.' },
  { icon: '🖥️', title: 'POS · CRM · ERP', desc: 'Sistemas de gestión empresarial adaptados a tu operación. Punto de venta, relación con clientes y planificación integrados.' },
  { icon: '🌐', title: 'Páginas Web Autogestionables', desc: 'Sitios modernos que tú mismo puedes actualizar. Sin depender de nadie, siempre al día.' },
  { icon: '🔌', title: 'Integraciones API', desc: 'Conectamos tus sistemas con cualquier plataforma. Stripe, WhatsApp, MercadoPago, Google, Meta y más.' },
  { icon: '📊', title: 'Dashboards & Reportes', desc: 'Visualización de datos en tiempo real. Toma decisiones basadas en información, no en suposiciones.' },
  { icon: '🎨', title: 'Identidad Digital', desc: 'Logotipos, banners, anuncios y todo tu material visual. Diseño que comunica y vende.' },
  { icon: '🤖', title: 'Automatizaciones & IA', desc: 'Flujos automáticos, chatbots y asistentes con inteligencia artificial. Tu negocio trabaja, incluso cuando tú no.' },
]

export default function Servicios() {
  const ref = useScrollReveal()
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.label}>Lo que hacemos</span>
          <h2 className={styles.title}>Servicios<br />que transforman</h2>
        </div>
        <p className={styles.sub}>Desde la identidad visual hasta sistemas empresariales completos. Un solo equipo, cero límites.</p>
      </div>
      <div className={styles.grid} ref={ref}>
        {CARDS.map((c) => (
          <div key={c.title} className={`${styles.card} ${c.featured ? styles.featured : ''}`}>
            <div className={styles.icon}>{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

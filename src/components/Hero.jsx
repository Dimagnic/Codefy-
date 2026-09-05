import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Soluciones Digitales · México
        </div>
        <h1 className={styles.title}>
          Tu negocio<br />
          empieza en <span className={styles.accent}>cero.</span>
          <span className={styles.dim}> Nosotros lo<br />llevamos más allá.</span>
        </h1>
        <p className={styles.sub}>
          Desarrollamos software a medida, identidad digital, automatizaciones
          y plataformas SaaS. Todo lo que tu empresa necesita para crecer
          en el mundo digital.
        </p>
        <div className={styles.actions}>
          <a href="#servicios" className={styles.btnPrimary}>
            Ver servicios
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="https://wa.me/52TUNUMERO?text=Hola%20Cero%2B%2C%20tengo%20un%20proyecto."
            className={styles.btnGhost}
            target="_blank"
            rel="noopener noreferrer"
          >
            ¿Tienes un proyecto? →
          </a>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>100<em>%</em></span>
          <span className={styles.statLabel}>Digital</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>1<em>er</em></span>
          <span className={styles.statLabel}>Ing. Electrónico</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>∞</span>
          <span className={styles.statLabel}>Posibilidades</span>
        </div>
      </div>
    </section>
  )
}

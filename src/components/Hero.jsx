import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.orbitWrap} aria-hidden="true">
        <svg className={styles.orbitSvg} viewBox="0 0 400 400" fill="none">
          <circle cx="200" cy="200" r="164" stroke="rgba(212,175,55,0.22)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="112" stroke="rgba(14,165,233,0.24)" strokeWidth="1"/>
          <circle cx="200" cy="200" r="62" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <g className={styles.orbitSpinSlow}>
            <line x1="200" y1="200" x2="200" y2="36" stroke="rgba(212,175,55,0.18)" strokeWidth="1"/>
            <circle cx="200" cy="36" r="6" fill="var(--dorado-light)"/>
          </g>
          <g className={styles.orbitSpinReverse}>
            <line x1="200" y1="200" x2="312" y2="200" stroke="rgba(14,165,233,0.2)" strokeWidth="1"/>
            <circle cx="312" cy="200" r="5" fill="var(--azul-light)"/>
          </g>
          <g className={styles.orbitSpinFast}>
            <circle cx="200" cy="138" r="4" fill="var(--blanco)" fillOpacity="0.8"/>
          </g>
          <circle cx="200" cy="200" r="18" fill="url(#coreGlow)"/>
          <defs>
            <radialGradient id="coreGlow" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="var(--dorado-light)" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="var(--dorado)" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          Soluciones Digitales · México
        </div>
        <h1 className={styles.title}>
          <span className={styles.shineLayer}>Tu negocio<br /></span>
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
            href="https://wa.me/522219663226?text=Hola%20Cero%2B%2C%20tengo%20un%20proyecto."
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

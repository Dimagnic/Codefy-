import styles from './Acerca.module.css'

const TECH = [
  'React / Next.js','Node.js','Supabase','Python',
  'IA / OpenAI','Vercel','API REST','Figma','WhatsApp API','Vite'
]

export default function Acerca() {
  return (
    <section id="acerca" className={styles.section}>
      <div className={styles.visual}>
        <div className={styles.card}>
          <div className={styles.orb} />
          <div className={styles.name}>Nicolás Gontaro</div>
          <div className={styles.role}>Ing. Electrónico & de Software · Fundador</div>
          <p className={styles.bio}>
            Formado como Ingeniero Electrónico y de Software, Nicolás combina el
            pensamiento sistémico con la creatividad digital para construir soluciones
            que realmente funcionan. Cada proyecto en Cero+ lleva su sello: código
            limpio, diseño intencional y resultados medibles.
          </p>
        </div>
        <div className={styles.badge}>Fundador · CEO</div>
      </div>

      <div className={styles.text}>
        <span className={styles.label}>Quiénes somos</span>
        <h2 className={styles.title}>Tecnología<br />con propósito</h2>
        <p>Cero+ nació de una idea simple: las empresas merecen soluciones digitales de calidad sin importar su tamaño. No somos una agencia genérica. Somos ingenieros que entienden los negocios.</p>
        <p>Cada proyecto lo tratamos como si fuera el nuestro. Desde el primer boceto hasta el lanzamiento, estamos contigo en cada paso.</p>
        <div className={styles.tags}>
          {TECH.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
    </section>
  )
}

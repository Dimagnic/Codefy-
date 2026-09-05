import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>Cer<span>o+</span></div>
          <p>Soluciones digitales a medida para negocios que quieren crecer. México.</p>
        </div>
        <div className={styles.col}>
          <h4>Servicios</h4>
          <ul>
            <li><a href="#servicios">SaaS & Software</a></li>
            <li><a href="#servicios">E-commerce</a></li>
            <li><a href="#servicios">POS · CRM · ERP</a></li>
            <li><a href="#servicios">Diseño Digital</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Empresa</h4>
          <ul>
            <li><a href="#acerca">Nosotros</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="https://clienteai.site" target="_blank" rel="noopener noreferrer">ClienteAI →</a></li>
            <li><a href="#cta">Contacto</a></li>
          </ul>
        </div>
        <div className={styles.col}>
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/52TUNUMERO" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:hola@ceromass.com">hola@ceromass.com</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© 2025 Cero+. Todos los derechos reservados.</span>
        <span>Hecho con ❤️ en México por Nicolás Gontaro</span>
      </div>
    </footer>
  )
}

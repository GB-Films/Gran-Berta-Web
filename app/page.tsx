const socialLinks = [
  {
    name: 'Instagram',
    handle: '@granberta',
    href: 'https://www.instagram.com/granberta',
  },
  {
    name: 'TikTok',
    handle: '@granberta',
    href: 'https://www.tiktok.com/@granberta',
  },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <div className="frame" aria-hidden="true">
        <span>GB / 2026</span>
        <div className="frame-contact">
          <span>BUENOS AIRES</span>
          <nav className="frame-links" aria-label="Sitios de Gran Berta">
            <a href="https://granbertafilms.com/" target="_blank" rel="noreferrer">
              GB FILMS
            </a>
            <a href="https://bani-vfx.com/" target="_blank" rel="noreferrer">
              BANI VFX
            </a>
            <a href="https://gb-films.github.io/Totem/" target="_blank" rel="noreferrer">
              TOTEM
            </a>
            <span className="frame-link frame-link--pending" aria-label="XETUP, enlace próximamente">
              XETUP
            </span>
            <a
              className="frame-mail"
              href="mailto:info@granbertafilms.com,agustin@granberta.com?subject=Contacto%20desde%20Gran%20Berta"
              aria-label="Escribirnos por mail"
              title="Escribirnos por mail"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3.5 5.5h17v13h-17zM4 6l8 6 8-6" />
              </svg>
            </a>
          </nav>
        </div>
      </div>

      <section className="hero" aria-labelledby="brand-title">
        <p className="eyebrow">
          Un universo en el que
          <br />
          sí querés, podés
        </p>

        <picture className="brand-lockup">
          <source
            media="(max-width: 640px)"
            srcSet="/optimized/gran-berta-vertical.webp"
          />
          <img
            src="/optimized/gran-berta-isologo.webp"
            alt="Gran Berta"
            width="1600"
            height="583"
            fetchPriority="high"
          />
        </picture>

        <h1 id="brand-title" className="sr-only">
          Gran Berta
        </h1>
        <nav className="social-grid" aria-label="Redes sociales de Gran Berta">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className="social-link"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Abrir ${link.name} de Gran Berta`}
            >
              <span className="social-copy">
                <span className="social-name">{link.name}</span>
                <span className="social-handle">{link.handle}</span>
              </span>
              <span className="social-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </section>

      <p className="footer-mark">CONTANDO HISTORIAS DESDE 2015</p>
    </main>
  );
}

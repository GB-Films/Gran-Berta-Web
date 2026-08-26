const socialLinks = [
  {
    name: 'Instagram',
    handle: '@granberta',
    href: 'https://www.instagram.com/granberta',
    className: 'social-link social-link--primary',
  },
  {
    name: 'TikTok',
    handle: '@granberta',
    href: 'https://www.tiktok.com/@granberta',
    className: 'social-link social-link--secondary',
  },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="ambient ambient--one" aria-hidden="true" />
      <div className="ambient ambient--two" aria-hidden="true" />

      <div className="frame" aria-hidden="true">
        <span>GB / 2026</span>
        <span>BUENOS AIRES</span>
      </div>

      <section className="hero" aria-labelledby="brand-title">
        <p className="eyebrow">Films · Ideas · Contenido</p>

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
        <p className="intro">Donde las historias encuentran su forma.</p>

        <nav className="social-grid" aria-label="Redes sociales de Gran Berta">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              className={link.className}
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

      <p className="footer-mark">SEGUINOS / FOLLOW THE STORY</p>
    </main>
  );
}

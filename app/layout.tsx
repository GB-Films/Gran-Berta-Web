import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://granberta.com'),
  title: 'Gran Berta | Films, ideas y contenido',
  description:
    'Gran Berta. Historias, ideas y contenido desde Buenos Aires. Encontranos en Instagram y TikTok.',
  applicationName: 'Gran Berta',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Gran Berta',
    title: 'Gran Berta | Films, ideas y contenido',
    description: 'Donde las historias encuentran su forma.',
    images: [
      {
        url: '/optimized/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Gran Berta — Films, ideas y contenido',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gran Berta | Films, ideas y contenido',
    description: 'Donde las historias encuentran su forma.',
    images: ['/optimized/og.jpg'],
  },
  icons: {
    icon: '/optimized/gran-berta-icon.png',
    apple: '/optimized/gran-berta-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

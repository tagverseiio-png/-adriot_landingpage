import './globals.css';

export const metadata = {
  title: 'Commercial Interior Design Company | Office, Retail & Corporate Interior Designers',
  description:
    'Award-winning commercial interior design company specializing in office interiors, retail spaces, corporate offices & showrooms. Get a free consultation & quote today.',
  keywords:
    'commercial interior design, office interior designers, corporate interior design company, retail interior design, commercial space design, office fit out, interior design firm near me',
  robots: 'index, follow',
  authors: [{ name: 'Studio Interior Design Co.' }],
  openGraph: {
    type: 'website',
    title: 'Commercial Interior Design Company | Transform Your Workspace',
    description:
      'We design offices, retail stores & corporate spaces that boost productivity and brand image. Free site visit & 3D design quote.',
    images: ['https://www.yourdomain.com/og-image.jpg'],
    url: 'https://www.yourdomain.com/',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesigner',
  name: 'Studio Interior Design Co.',
  image: 'https://www.yourdomain.com/og-image.jpg',
  description:
    'Commercial interior design company specializing in office, retail and corporate interiors.',
  areaServed: 'Tamil Nadu, India',
  priceRange: '$$',
  telephone: '+91-XXXXXXXXXX',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.yourdomain.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

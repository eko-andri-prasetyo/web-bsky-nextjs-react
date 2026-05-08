import './globals.css';

export const metadata = {
  title: 'BSKY Teknik | Solusi Teknik Terpadu',
  description:
    'Company profile BSKY Teknik untuk solusi geotech, software house, dan komunikasi proyek.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "BSKY Teknik - Solusi Teknik Terpadu",
  description: "Company profile BSKY Teknik"
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

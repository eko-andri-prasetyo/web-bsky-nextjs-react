# BSKY Teknik Company Profile - Next.js + React

Website company profile statis berbasis Next.js App Router + React. Desain dibuat ulang dari referensi gambar dengan layout high-resolution, responsive, dan aset SVG vector agar tajam di layar besar.

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka: http://localhost:3000

## Deploy ke Vercel

1. Push folder ini ke GitHub.
2. Masuk ke Vercel.
3. Add New Project.
4. Import repository.
5. Framework akan terdeteksi sebagai Next.js.
6. Klik Deploy.

## Struktur penting

- `app/page.jsx` halaman utama.
- `app/globals.css` styling global.
- `public/assets/` aset SVG vector.

## Catatan edit cepat

- Nomor WhatsApp: ubah variabel `whatsappUrl` di `app/page.jsx`.
- Alamat/kontak: ubah data pada bagian footer di `app/page.jsx`.
- Produk/layanan: ubah array `serviceCards`, `businessLines`, dan `products`.

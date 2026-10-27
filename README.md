# Portofolio Sintia Marada Hutagalung

Portofolio publik dua jalur untuk Sales & Telemarketing dan Admin & Operasional. Konten disimpan sebagai berkas JSON lokal.

## Stack

- Next.js App Router dan TypeScript
- Tailwind CSS 4 dan komponen UI lokal bergaya shadcn/ui
- Data portofolio statis di `data/public-content.json`
- Kontak langsung melalui WhatsApp, email, dan LinkedIn

## Menjalankan secara lokal

1. Jalankan `npm install`.
2. Jalankan `npm run dev` dan buka `http://localhost:3001`.
3. Pilih jalur profil melalui `/?jalur=sales` atau `/?jalur=admin`.

CV publik tersedia di `public/CV-Sintia-Marada-Hutagalung.pdf`. Pengunjung menghubungi Sintia melalui tautan WhatsApp, email, atau LinkedIn; situs tidak menyediakan formulir atau endpoint pengiriman pesan.

## Deploy

Deploy sebagai aplikasi Next.js di Vercel atau host Node.js lain. Tidak diperlukan database maupun kredensial admin.

## Mengubah konten

Edit `data/public-content.json` untuk memperbarui profil, pengalaman, kompetensi, alur kerja, skill, sampel, testimoni, pendidikan, atau sertifikat. CV dan gambar publik disimpan di folder `public/`.

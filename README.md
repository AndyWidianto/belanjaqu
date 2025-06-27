# 🛒 BelanjaQu

**BelanjaQu** adalah sebuah platform e-commerce sederhana yang dirancang untuk memberikan pengalaman berbelanja online yang mudah, cepat, dan nyaman bagi pengguna. Proyek ini merupakan pengembangan pribadi yang bertujuan untuk mengeksplorasi teknologi web modern dan praktik pengembangan aplikasi yang baik.

---

## 🚀 Fitur Utama

- 💬 **Chat**  
  Fitur percakapan antara pembeli dan penjual secara real-time. **(selesai)**

- 🎞️ **Reels**  
  Video pendek untuk promosi produk terbaru.

- ➕ **Create Product**  
  Penjual dapat menambahkan produk baru dengan detail lengkap.

- 🖼️ **Galeri Produk**  
  Tampilkan gambar produk dalam tampilan grid menarik.

- 🗂️ **Kategori**  
  Produk diatur dalam kategori agar mudah ditemukan.

- 🔍 **Pencarian Produk Cepat & Responsif**  
  Fitur search untuk mempermudah pembeli menemukan produk.

- 🛍️ **Manajemen Keranjang Belanja**  
  Tambah, edit, atau hapus produk dari keranjang belanja dengan mudah.

- 👤 **Autentikasi Pengguna (Login & Register)**  
  Sistem login & register aman untuk pembeli dan penjual.

- 🧾 **Checkout & Konfirmasi Pesanan**  
  Proses checkout cepat dengan konfirmasi pembayaran.

- 📦 **Halaman Detail Produk**  
  Lihat detail spesifikasi, gambar, dan ulasan produk.

- 📊 **Dashboard Admin**  
  Panel admin untuk pengelolaan produk, pesanan, kategori, dan pengguna.

- 🔔 **Notifikasi**  
  Notifikasi real-time untuk update pesanan, chat baru, dan promo.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend**: React.js / Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: Mysql
- **API**: RESTful API
- **Auth**: JWT Authentication

---

## 📂 Struktur Proyek

```plaintext
belanjaqu
├── Backend
├── Frontend
    ├── index.html              # Berkas HTML utama
    ├── package.json            # Informasi dependensi proyek
    ├── package-lock.json       # File lock untuk dependensi
    ├── README.md               # Dokumentasi proyek
    ├── public                  # Direktori aset publik
    ├── eslint.config.js        # Konfigurasi untuk ESLint yang digunakan dalam pengecekan kualitas kode JavaScript/React
    ├── vite.config.js          # # Konfigurasi Vite, termasuk pengaturan plugin React
    └── src                     # Direktori utama untuk kode sumber
        ├── assets              # Berisi tentang assets seperti gambar
        ├── Errors              # berisi tampilan Error
        ├── Layout              # berisi tentang layout
        ├── View                # Berisi semua Tampilan UI
        ├── App.jsx             # Komponen utama aplikasi React yang berisi struktur antarmuka dasar
        ├── index.css           # File CSS global yang digunakan untuk styling seluruh aplikasi
        ├── main.jsx            # Entry point aplikasi, digunakan untuk render App dan konfigurasi routing
```

## 🧑‍💻 Cara Menjalankan Proyek

### 1. Clone repository
```bash
git clone https://github.com/AndyWidianto/belanjaqu.git
```
### 2. Masuk ke directory
```bash
cd belanjaqu
```
### 3. Masuk ke directory Backend/Frontend
```bash
cd Backend
cd frontend
```
### 4 Jalankan Proyek
```bash
npm run dev
```
# 🛒 BelanjaQu

**BelanjaQu** adalah sebuah platform e-commerce sederhana yang dirancang untuk memberikan pengalaman berbelanja online yang mudah, cepat, dan nyaman bagi pengguna. Proyek ini merupakan pengembangan pribadi yang bertujuan untuk mengeksplorasi teknologi web modern dan praktik pengembangan aplikasi yang baik.

---

## 🚀 Fitur Utama

- 🔍 Pencarian produk cepat dan responsif
- 🛍️ Manajemen keranjang belanja
- 👤 Autentikasi pengguna (Login & Register)
- 🧾 Checkout dan konfirmasi pesanan
- 🖼️ Galeri produk dengan kategori
- 📦 Halaman detail produk
- 📊 Dashboard admin untuk pengelolaan produk

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
git clone https://github.com/username/belanjaqu.git
```
### 2. Masuk ke directory
```bash
cd belanjaqu
```
### 3. Masuk ke directory Backend/Frontend
```bash
cd Backend || cd frontend
```
### 4 Jalankan Proyek for Frontend
```bash
npm run dev
```
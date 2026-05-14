// ============================================
// PERTANIAN INDONESIA - JAVASCRIPT INTERAKTIF
// ============================================

// Educational Content Data
const eduContent = {
    teknik: {
        title: '🌱 Teknik Menanam yang Benar',
        content: `
            <h2>Panduan Lengkap Teknik Menanam</h2>
            
            <h3>1. Persiapan Lahan</h3>
            <ul>
                <li>Olah tanah sedalam 20-25 cm</li>
                <li>Tambahkan pupuk kandang 2-3 ton/hektar</li>
                <li>Biarkan selama 1-2 minggu sebelum tanam</li>
                <li>Periksa pH tanah (ideal: 6-7)</li>
            </ul>

            <h3>2. Pemilihan Bibit</h3>
            <ul>
                <li>Pilih bibit yang sehat dan berkualitas</li>
                <li>Gunakan bibit bersertifikat dari pemerintah</li>
                <li>Periksa tanggal kemasan bibit</li>
                <li>Hindari bibit yang terlihat rusak atau busuk</li>
            </ul>

            <h3>3. Jarak Tanam</h3>
            <ul>
                <li>Padi: 20 x 20 cm atau 25 x 25 cm</li>
                <li>Jagung: 70 x 20 cm</li>
                <li>Sayuran: 30 x 30 cm (tergenis jenis)</li>
                <li>Jarak yang tepat mencegah hama dan penyakit</li>
            </ul>

            <h3>4. Teknik Tanam</h3>
            <ul>
                <li>Tanam di musim yang tepat</li>
                <li>Kedalaman tanam: 2-3 cm untuk padi</li>
                <li>Tanam secara merata dan rapi</li>
                <li>Siram setelah tanam pada sore hari</li>
            </ul>

            <h3>Tips Sukses</h3>
            <ul>
                <li>✓ Ikuti kalender tanam sesuai wilayah</li>
                <li>✓ Catat data tanam untuk evaluasi</li>
                <li>✓ Konsultasi dengan petugas pertanian lokal</li>
                <li>✓ Ikuti panduan dari kemasan benih</li>
            </ul>
        `
    },
    irigasi: {
        title: '💧 Irigasi & Manajemen Air',
        content: `
            <h2>Cara Mengelola Air Secara Efisien</h2>
            
            <h3>1. Jenis-Jenis Irigasi</h3>
            <ul>
                <li><strong>Irigasi Permukaan:</strong> Air mengalir di atas permukaan tanah</li>
                <li><strong>Irigasi Tetes:</strong> Hemat air hingga 60%, cocok untuk sayuran</li>
                <li><strong>Irigasi Sprinkler:</strong> Simulasi hujan, cocok untuk lahan besar</li>
                <li><strong>Irigasi Subsurface:</strong> Air disalurkan di bawah permukaan</li>
            </ul>

            <h3>2. Jadwal Penyiraman Optimal</h3>
            <ul>
                <li><strong>Pagi (06:00-08:00):</strong> Terbaik untuk padi</li>
                <li><strong>Sore (16:00-18:00):</strong> Terbaik untuk sayuran</li>
                <li>Hindari menyiram saat panas terik (11:00-15:00)</li>
                <li>Frekuensi: Sesuaikan dengan kondisi cuaca dan jenis tanaman</li>
            </ul>

            <h3>3. Konservasi Air</h3>
            <ul>
                <li>Gunakan mulsa untuk mengurangi penguapan</li>
                <li>Buat saluran air yang tertutup</li>
                <li>Manfaatkan air hujan dengan sistem penampungan</li>
                <li>Monitor kelembaban tanah sebelum menyiram</li>
            </ul>

            <h3>4. Tanda-Tanda Kebutuhan Air</h3>
            <ul>
                <li>Tanah terlihat kering di permukaan</li>
                <li>Daun tanaman terlihat layu</li>
                <li>Kelembaban tanah kurang dari 50%</li>
                <li>Gunakan alat soil moisture meter untuk pengukuran akurat</li>
            </ul>

            <h3>Keuntungan Irigasi Baik</h3>
            <ul>
                <li>✓ Hasil panen meningkat 30-50%</li>
                <li>✓ Hemat air hingga 60%</li>
                <li>✓ Menghemat biaya operasional</li>
                <li>✓ Tanaman lebih sehat dan produktif</li>
            </ul>
        `
    },
    hama: {
        title: '🐛 Pengendalian Hama & Penyakit',
        content: `
            <h2>Identifikasi dan Pengendalian Hama</h2>
            
            <h3>1. Hama Padi Utama</h3>
            <ul>
                <li><strong>Wereng Coklat:</strong> Warna coklat, terbang saat musim kemarau
                    <br>Pengendalian: Mulsa jerami, semprot neem oil</li>
                <li><strong>Penggerek Batang:</strong> Tanaman terlihat putih melebar
                    <br>Pengendalian: Panen rapat, bersihkan sisa tanaman</li>
                <li><strong>Ulat Grayak:</strong> Daun berlubang dan robek
                    <br>Pengendalian: Tangkap manual, semprot pestisida organik</li>
            </ul>

            <h3>2. Penyakit Tanaman Umum</h3>
            <ul>
                <li><strong>Blas (Pyricularia oryzae):</strong> Bintik coklat di daun
                    <br>Pengendalian: Gunakan varietas tahan, kurangi nitrogen</li>
                <li><strong>Busuk Batang:</strong> Batang membusuk dan roboh
                    <br>Pengendalian: Drainase baik, jarak tanam tepat</li>
                <li><strong>Layu Fusarium:</strong> Daun menguning dan layu
                    <br>Pengendalian: Rotasi tanaman, sterilisasi alat</li>
            </ul>

            <h3>3. Pengendalian Organik (Ramah Lingkungan)</h3>
            <ul>
                <li><strong>Neem Oil:</strong> Semprotkan setiap 7 hari hingga hama hilang</li>
                <li><strong>Bakteri Bt:</strong> Efektif untuk ulat, aman untuk manusia</li>
                <li><strong>Sabun Insektisida:</strong> Dari sabun yang dilarutkan di air</li>
                <li><strong>Pestisida Nabati:</strong> Dari bawang, cabai, atau daun sirih</li>
                <li><strong>Musuh Alami:</strong> Tebuan, kumbang coccinellid, dan laba-laba</li>
            </ul>

            <h3>4. Pencegahan Hama (Paling Penting!)</h3>
            <ul>
                <li>✓ Pilih varietas tahan hama</li>
                <li>✓ Kebersihan lahan dan saluran air</li>
                <li>✓ Rotasi tanaman setiap musim</li>
                <li>✓ Pemupukan seimbang (jangan berlebihan nitrogen)</li>
                <li>✓ Monitor lahan secara rutin</li>
                <li>✓ Tangkap hama secara manual sejak awal</li>
            </ul>

            <h3>Tips Penting</h3>
            <ul>
                <li>Identifikasi masalah lebih awal!</li>
                <li>Gunakan pengendalian terpadu (IPM)</li>
                <li>Hindari pestisida kimia berbahaya</li>
                <li>Konsultasi dengan petugas penyuluh pertanian</li>
            </ul>
        `
    },
    pupuk: {
        title: '🧪 Membuat Pupuk Organik Sendiri',
        content: `
            <h2>Cara Membuat Pupuk Organik Mudah</h2>
            
            <h3>1. Pupuk Kompos dari Sampah Rumah Tangga</h3>
            <p><strong>Bahan yang Dibutuhkan:</strong></p>
            <ul>
                <li>Sampah dapur (sisa sayur, buah, biji-bijian)</li>
                <li>Sampah halaman (rumput, daun kering)</li>
                <li>Kertas dan kardus (sobek-sobek)</li>
                <li>Pupuk kandang atau EM4 (untuk akselerator)</li>
            </ul>
            
            <p><strong>Langkah-Langkah:</strong></p>
            <ol>
                <li>Siapkan tempat di pojok lahan atau dalam tong</li>
                <li>Lapisi dengan tanah tipis (2-3 cm)</li>
                <li>Tumpuk sampah organik bergantian (3:1 = hijau:coklat)</li>
                <li>Setiap 2 hari, aduk tumpukan</li>
                <li>Jaga kelembaban seperti spons yang diperas</li>
                <li>Kompos siap pakai dalam 3-6 bulan</li>
                <li>Warna kehitaman dan berbau tanah adalah tanda matang</li>
            </ol>

            <h3>2. Pupuk Bokashi (Fermentasi Cepat)</h3>
            <p><strong>Bahan:</strong> Sampah dapur + Dedak + Gula + Garam + EM4</p>
            <ul>
                <li>Lebih cepat siap dalam 2-3 minggu</li>
                <li>Cocok untuk lahan terbatas</li>
                <li>Bisa menggunakan tong bekas</li>
                <li>Hemat biaya operasional</li>
            </ul>

            <h3>3. Pupuk Cair Organik (Pupuk Ekstrak)</h3>
            <p><strong>Bahan:</strong> Sayuran busuk + Air + Gula</p>
            <ul>
                <li>Masukkan sampah sayur ke dalam ember air</li>
                <li>Tambahkan gula merah untuk mempercepat fermentasi</li>
                <li>Tutup dan biarkan 1 minggu</li>
                <li>Saring dan gunakan sebagai pupuk penyiram</li>
                <li>Encerkan 1:10 sebelum digunakan</li>
            </ul>

            <h3>4. Pupuk Kapur dari Batok Kelapa</h3>
            <ul>
                <li>Bakar batok kelapa hingga jadi abu</li>
                <li>Jemur hingga kering sempurna</li>
                <li>Taburkan di lahan untuk menaikan pH tanah</li>
                <li>Mengandung kalium yang berguna</li>
            </ul>

            <h3>Keuntungan Pupuk Organik</h3>
            <ul>
                <li>✓ Gratis atau sangat murah</li>
                <li>✓ Ramah lingkungan dan sustainable</li>
                <li>✓ Meningkatkan kesuburan tanah jangka panjang</li>
                <li>✓ Hasil panen berkualitas lebih baik</li>
                <li>✓ Hemat biaya produksi hingga 40%</li>
                <li>✓ Tanaman lebih tahan hama dan penyakit</li>
            </ul>

            <h3>Tips Sukses Membuat Pupuk Organik</h3>
            <ul>
                <li>Gunakan bahan lokal yang mudah didapat</li>
                <li>Jaga kelembaban tumpukan (70-80%)</li>
                <li>Aduk secara teratur untuk oksigenasi</li>
                <li>Sabar menunggu proses fermentasi</li>
                <li>Dokumentasikan setiap batch untuk evaluasi</li>
            </ul>
        `
    }
};

// Show Modal Function
function showModal(topic) {
    const modal = document.getElementById('eduModal');
    const modalBody = document.getElementById('modalBody');
    
    if (eduContent[topic]) {
        const content = eduContent[topic];
        modalBody.innerHTML = `
            ${content.content}
            <button class="btn btn-secondary" onclick="closeModal()" style="margin-top: 1.5rem;">Tutup</button>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close Modal Function
function closeModal() {
    const modal = document.getElementById('eduModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close Modal on Outside Click
window.onclick = function(event) {
    const modal = document.getElementById('eduModal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Close Modal on Escape Key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Smooth Scroll Function
function scrollTo(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation Smooth Scroll
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            scrollTo(href.substring(1));
        }
    });
});

// Update Current Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.textContent = `© ${currentYear} Pertanian Indonesia. Mendukung Petani Kami Semua.`;
    }
});

// Add Loading Animation (Optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.market-card, .edu-card, .weather-card, .news-card, .tech-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
    observer.observe(card);
});

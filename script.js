// ============================================================
// GO TANI NUSANTARA - SCRIPT UTAMA (TEROPTIMAL)
// ============================================================

// ---------- GANTI DENGAN API KEY BARU ANDA (DEMI KEAMANAN) ----------
const GEMINI_API_KEY = "";       
const OPENWEATHER_API_KEY = "02954924cef614b9899627b8dad97876";   
const NEWS_API_KEY = "pub_fd7a288c00df4f699a813ae2cc9d4230"; 
// -----------------------------------------------------

// ==================== 1. HARGA PASAR (Data Dummy) ====================
function loadHargaPasar() {
  const hargaData = [
    { komoditas: "Cabai Merah", harga: 45000, perubahan: "+5%" },
    { komoditas: "Bawang Merah", harga: 32000, perubahan: "-2%" },
    { komoditas: "Tomat", harga: 18000, perubahan: "+10%" },
    { komoditas: "Beras (Premium)", harga: 13500, perubahan: "stabil" },
    { komoditas: "Jagung Pipil", harga: 6500, perubahan: "+3%" }
  ];
  const tbody = document.getElementById("hargaBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  hargaData.forEach(item => {
    tbody.innerHTML += `<tr><td><i class="fas fa-seedling"></i> ${item.komoditas}</td><td>Rp ${item.harga.toLocaleString()}</td><td>${item.perubahan}</td></tr>`;
  });
}

// ==================== 2. BERITA PERTANIAN (API + Cadangan) ====================
async function loadBerita() {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  container.innerHTML = '<div class="loading-news"><i class="fas fa-spinner fa-pulse"></i> Sedang memuat berita terbaru...</div>';

  if (!NEWS_API_KEY || NEWS_API_KEY === "") {
    tampilkanBeritaCadangan(container, "⚠️ API Key berita belum diisi. Dapatkan gratis di newsdata.io");
    return;
  }

  try {
    const query = "pertanian OR petani OR panen OR pupuk OR pangan OR pertanian modern";
    const url = `https://newsdata.io/api/1/news?apikey=${NEWS_API_KEY}&q=${encodeURIComponent(query)}&language=id&country=id&size=5`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok && data.status === "success" && data.results && data.results.length > 0) {
      tampilkanBeritaDariAPI(container, data.results);
    } else {
      let errorMsg = data.results?.message || "Tidak ada berita ditemukan";
      tampilkanBeritaCadangan(container, `⚠️ ${errorMsg}. Menampilkan berita contoh.`);
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    tampilkanBeritaCadangan(container, "⚠️ Gagal terhubung ke server berita. Menampilkan berita contoh.");
  }
}

function tampilkanBeritaDariAPI(container, articles) {
  container.innerHTML = "";
  articles.forEach(article => {
    const imageHtml = article.image_url 
      ? `<img src="${article.image_url}" alt="${article.title}" class="news-img-real" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
      : '';
    
    const card = `
      <div class="news-card">
        <div class="news-img">
          ${imageHtml}
          <div class="news-img-icon" style="${article.image_url ? 'display:none;' : 'display:flex;'}">
            <i class="fas fa-newspaper fa-3x"></i>
          </div>
        </div>
        <div class="news-content">
          <h3>${article.title || "Berita Pertanian"}</h3>
          <div class="news-date">
            <i class="far fa-calendar-alt"></i> 
            ${article.pubDate ? article.pubDate.split('T')[0] : "Tanggal tidak tersedia"}
          </div>
          <p>${article.description || article.title || "Klik untuk baca selengkapnya."}</p>
          <a href="${article.link}" target="_blank" rel="noopener noreferrer" class="read-more">
            Baca Selengkapnya <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

function tampilkanBeritaCadangan(container, pesanError = "") {
  const beritaCadangan = [
    {
      title: "Petani di Tuban Apresiasi Program Strategis Presiden di Tingkat Pertanian",
      date: "17 Mei 2026",
      link: "https://rri.co.id/tuban/regional/2418527/petani-di-tuban-apresiasi-progam-strategis-presiden-di-tingkat-pertanian",
      description: "Kunjungan kerja Presiden Prabowo Subianto di Tuban mendapat sambutan hangat petani. Harga jagung naik signifikan membantu kesejahteraan petani.",
      icon: "fas fa-tractor"
    },
    {
      title: "Indonesia Ekspor Pupuk ke Australia, Mentan Sebut RI Makin Diperhitungkan",
      date: "15 Mei 2026",
      link: "https://news.batampos.co.id/indonesia-ekspor-pupuk-ke-australia-menteri-pertanian-sebut-ri-makin-diperhitungkan-di-rantai-pasok-pasok-global/",
      description: "Ekspor perdana pupuk urea ke Australia mencapai 47.250 ton, menjadi bagian dari kerja sama G2G memperkuat ketahanan pangan kawasan.",
      icon: "fas fa-box"
    },
    {
      title: "Banyak Negara Minta Pupuk dan Beras dari Indonesia, Prabowo: Bayangkan Kalau Kita Tak Swasembada",
      date: "17 Mei 2026",
      link: "https://economy.okezone.com/read/2026/05/17/320/3218911/banyak-negara-minta-pupuk-dan-beras-dari-indonesia-prabowo-bayangkan-kalau-kita-tak-swasembada",
      description: "Presiden Prabowo ungkap banyak negara minta pupuk dan beras dari Indonesia imbas perang di Timur Tengah. Indonesia kini dipercaya bantu kebutuhan pangan global.",
      icon: "fas fa-globe"
    }
  ];

  container.innerHTML = "";
  if (pesanError) {
    container.innerHTML = `<div class="api-info" style="margin-bottom: 15px; background: #fff3cd; color: #856404;"><i class="fas fa-exclamation-triangle"></i> ${pesanError}</div>`;
  }
  
  beritaCadangan.forEach(berita => {
    const card = `
      <div class="news-card">
        <div class="news-img"><i class="${berita.icon} fa-3x"></i></div>
        <div class="news-content">
          <h3>${berita.title}</h3>
          <div class="news-date"><i class="far fa-calendar-alt"></i> ${berita.date}</div>
          <p>${berita.description.substring(0, 120)}${berita.description.length > 120 ? '...' : ''}</p>
          <a href="${berita.link}" target="_blank" rel="noopener noreferrer" class="read-more">
            Baca Selengkapnya <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// ==================== 3. TANYA GO TANI (AI) ====================
async function tanyaAI(pertanyaan) {
  const jawabanDiv = document.getElementById("jawabanAI");
  if (!jawabanDiv) return;
  
  // Memastikan format baris baru dari AI terjaga agar rapi
  jawabanDiv.style.whiteSpace = "pre-wrap";
  
  function jawabOffline(pesanError = "") {
    const q = pertanyaan.toLowerCase();
    let jawab = "";
    if (q.includes("wereng") || q.includes("hama padi")) jawab = "🐛 Hama wereng: Gunakan musuh alami, tanam varietas tahan, dan semprot ekstrak mimba.";
    else if (q.includes("pupuk") || q.includes("pemupukan")) jawab = "🌱 Pemupukan berimbang: Kombinasi pupuk organik + NPK sesuai kebutuhan.";
    else if (q.includes("cabai") || q.includes("cabe")) jawab = "🌶️ Budidaya cabai: Pastikan drainase baik, gunakan mulsa plastik, dan lakukan pemangkasan tunas air.";
    else if (q.includes("irigasi") || q.includes("air")) jawab = "💧 Irigasi tetes hemat air hingga 60%. Kombinasi dengan sensor kelembaban tanah.";
    else jawab = "Silakan tanyakan tentang hama, pupuk, irigasi, atau teknologi pertanian.";
    
    let infoError = pesanError ? `<br><span style="color:#b33;">⚠️ ${pesanError}</span>` : "";
    jawabanDiv.innerHTML = `<i class="fas fa-leaf"></i> ${jawab}<br><small>✨ (Mode offline)</small>${infoError}`;
  }

  if (!GEMINI_API_KEY || GEMINI_API_KEY === "") {
    jawabOffline("API key Gemini belum diisi.");
    return;
  }

  jawabanDiv.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Menghubungi AI Gemini...';

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Kamu adalah asisten ahli pertanian modern yang edukatif. Jawablah pertanyaan ini dengan bahasa Indonesia yang jelas, ramah, terstruktur, mudah dipahami petani, dan langsung ke intinya: ${pertanyaan}` }] }]
      })
    });

    const data = await response.json();

    if (response.ok && data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      // Membersihkan karakter markdown tebal bergaya bintan g agar lebih bersih di HTML sederhana
      let cleanText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1');
      jawabanDiv.innerHTML = cleanText;
    } else {
      let errorMsg = data.error?.message || "Respons tidak dikenal";
      jawabOffline(`API error: ${errorMsg}`);
    }
  } catch (error) {
    jawabOffline("Gagal terhubung ke server AI.");
  }
}

// ==================== 4. PRAKIRAAN CUACA (OpenWeather) ====================
async function cekCuaca(kota) {
  const resultDiv = document.getElementById("weatherResult");
  if (!resultDiv) return;
  
  resultDiv.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Mengambil data cuaca...';

  if (!OPENWEATHER_API_KEY || OPENWEATHER_API_KEY === "") {
    simulasiCuaca(kota, "API key OpenWeather tidak diisi.");
    return;
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(kota)}&appid=${OPENWEATHER_API_KEY}&units=metric&lang=id`;
    const response = await fetch(url);
    const data = await response.json();

    // PERBAIKAN DI SINI: Menggunakan loose equality (==) karena cod bisa berupa string "200" atau angka 200
    if (response.ok && data.cod == 200) {
      resultDiv.innerHTML = `
        <i class="fas fa-map-marker-alt"></i> <strong>${data.name}, ${data.sys.country}</strong><br>
        🌡️ Suhu: ${Math.round(data.main.temp)}°C (Terasa seperti ${Math.round(data.main.feels_like)}°C)<br>
        💧 Kelembapan: ${data.main.humidity}%<br>
        💨 Kecepatan Angin: ${data.wind.speed} m/s<br>
        ☁️ Kondisi: ${data.weather[0].description}
      `;
    } else {
      let errorMsg = data.message || "Kota tidak ditemukan";
      simulasiCuaca(kota, `Error API: ${errorMsg}. Menampilkan data prakiraan simulasi.`);
    }
  } catch (error) {
    simulasiCuaca(kota, "Gagal koneksi ke server cuaca. Periksa internet Anda.");
  }
}

function simulasiCuaca(kota, pesanError = "") {
  const randomCuaca = [
    { suhu: 28, kelembapan: 78, kondisi: "Berawan, potensi hujan ringan" },
    { suhu: 31, kelembapan: 65, kondisi: "Cerah, baik untuk menjemur hasil panen" },
    { suhu: 26, kelembapan: 85, kondisi: "Hujan sedang, hindari pemupukan terbuka" }
  ];
  const random = randomCuaca[Math.floor(Math.random() * randomCuaca.length)];
  const errorNote = pesanError ? `<br><span style="color:#b33;"><small>⚠️ ${pesanError}</small></span>` : "";
  
  document.getElementById("weatherResult").innerHTML = `
    <i class="fas fa-cloud-sun"></i> <strong>Simulasi Cuaca untuk ${kota}</strong><br>
    🌡️ Suhu: ${random.suhu}°C<br>
    💧 Kelembapan: ${random.kelembapan}%<br>
    ☁️ Kondisi: ${random.kondisi}<br>
    <small style="color: #666;">📌 Menggunakan basis data simulasi lokal.</small>${errorNote}
  `;
}

// ==================== 5. TOMBOL TEST API (Debug) ====================
function tambahTombolTest() {
  const container = document.querySelector("#tanya-ai .ai-chat-box");
  if (!container || document.getElementById("testApiBtn")) return;
  
  const btnTest = document.createElement("button");
  btnTest.id = "testApiBtn";
  btnTest.innerText = "🔍 Uji Hubungan API Gemini";
  btnTest.style.cssText = "margin-top: 10px; background-color: #ff9800; border: none; padding: 8px 15px; border-radius: 30px; cursor: pointer; font-weight: bold; color: white;";
  
  btnTest.onclick = async () => {
    const jawabanDiv = document.getElementById("jawabanAI");
    if (!jawabanDiv) return;
    jawabanDiv.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Menguji jalur komunikasi API...';
    if (!GEMINI_API_KEY) {
      jawabanDiv.innerHTML = "❌ GEMINI_API_KEY kosong di file script.js";
      return;
    }
    try {
      const testUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${GEMINI_API_KEY}`;
      const res = await fetch(testUrl);
      if (res.ok) {
        jawabanDiv.innerHTML = "✅ Sambungan API Sukses & Valid! Fitur Tanya AI siap digunakan.";
      } else {
        const data = await res.json();
        jawabanDiv.innerHTML = `❌ Gagal Validasi. Pesan: ${data.error?.message || "Kunci tidak dikenali"}`;
      }
    } catch (err) {
      jawabanDiv.innerHTML = `❌ Kendala Jaringan: ${err.message}`;
    }
  };
  container.appendChild(btnTest);
}

// ==================== 6. RESPONSIVE MENU & SMOOTH SCROLL ====================
function initMobileMenu() {
  const toggle = document.getElementById("mobile-menu");
  const menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("active"));
  }
}

function initSmoothScroll() {
  document.querySelectorAll('.nav-menu a, .btn-primary').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const hash = this.getAttribute('href');
      if (hash && hash.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(hash);
        if (target) {
          // Menghitung offset jika ada fixed navbar agar judul section tidak tertutup
          const headerOffset = 70; 
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
        document.querySelector(".nav-menu")?.classList.remove("active");
      }
    });
  });
}

// ==================== 7. HUBUNGKAN TOMBOL DAN EVENT ====================
function bindEvents() {
  const btnAI = document.getElementById("btnTanyaAI");
  const inputAI = document.getElementById("pertanyaanInput");
  if (btnAI && inputAI) {
    btnAI.addEventListener("click", () => {
      const q = inputAI.value.trim();
      if (!q) {
        document.getElementById("jawabanAI").innerHTML = "Silakan tulis pertanyaan Anda terlebih dahulu.";
        return;
      }
      tanyaAI(q);
    });
    inputAI.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        btnAI.click();
      }
    });
  }

  const btnCuaca = document.getElementById("btnCekCuaca");
  const kotaInput = document.getElementById("kotaInput");
  if (btnCuaca && kotaInput) {
    btnCuaca.addEventListener("click", () => {
      const kota = kotaInput.value.trim();
      if (!kota) {
        document.getElementById("weatherResult").innerHTML = "Masukkan nama kota lokasi lahan Anda.";
        return;
      }
      cekCuaca(kota);
    });
  }
}

// Di dalam fungsi bindEvents() atau di dalam DOMContentLoaded, tambahkan:
const btnAnalisis = document.getElementById('btnHitungAnalisis');
if (btnAnalisis) {
  btnAnalisis.addEventListener('click', hitungAnalisis);
}

// ==================== KALKULATOR ANALISIS USAHA ====================
function hitungAnalisis() {
  // Ambil nilai dari input
  const biayaTetap = parseFloat(document.getElementById('biayaTetap').value) || 0;
  const biayaVariabel = parseFloat(document.getElementById('biayaVariabel').value) || 0;
  const hargaJual = parseFloat(document.getElementById('hargaJual').value) || 0;
  const jumlahProduksi = parseFloat(document.getElementById('jumlahProduksi').value) || 0;

  // Variabel untuk output
  let bepUnit = 0, bepRupiah = 0, laba = 0, hargaMin = 0, status = '';

  // Validasi agar tidak ada pembagian dengan nol
  const margin = hargaJual - biayaVariabel;

  if (margin <= 0) {
    // Jika harga jual lebih kecil atau sama dengan biaya variabel, tidak mungkin untung
    document.getElementById('bepUnit').textContent = '∞ (tidak mencapai)';
    document.getElementById('bepRupiah').textContent = '∞';
    document.getElementById('estimasiLaba').textContent = 'Rp ' + (biayaTetap * -1).toLocaleString() + ' (rugi)';
    document.getElementById('hargaMinimum').textContent = '> Rp ' + (biayaVariabel).toLocaleString();
    document.getElementById('statusUsaha').textContent = '⚠️ Harga jual terlalu rendah!';
    return;
  }

  // Hitung BEP unit
  bepUnit = biayaTetap / margin;
  bepRupiah = bepUnit * hargaJual;

  // Hitung laba
  laba = (margin * jumlahProduksi) - biayaTetap;

  // Harga jual minimum agar BEP pada jumlah produksi saat ini
  hargaMin = biayaVariabel + (biayaTetap / jumlahProduksi);

  // Tentukan status
  if (laba > 0) {
    status = '✅ Untung! (Rp ' + laba.toLocaleString() + ')';
  } else if (laba === 0) {
    status = '⚖️ Impas (tidak untung tidak rugi)';
  } else {
    status = '❌ Rugi! (kurang Rp ' + (laba * -1).toLocaleString() + ')';
  }

  // Tampilkan hasil dengan format rapi
  document.getElementById('bepUnit').textContent = bepUnit.toFixed(1) + ' unit';
  document.getElementById('bepRupiah').textContent = 'Rp ' + bepRupiah.toLocaleString();
  document.getElementById('estimasiLaba').textContent = 'Rp ' + laba.toLocaleString();
  document.getElementById('hargaMinimum').textContent = 'Rp ' + hargaMin.toLocaleString();
  document.getElementById('statusUsaha').textContent = status;
}
// ==================== 8. INITIALISASI SEWAKTU HALAMAN SIAP ====================
document.addEventListener("DOMContentLoaded", () => {
  loadHargaPasar();
  loadBerita();
  initMobileMenu();
  initSmoothScroll();
  bindEvents();
  tambahTombolTest();
  
  const jawabanAI = document.getElementById("jawabanAI");
  if (jawabanAI) {
    if (!GEMINI_API_KEY) {
      jawabanAI.innerHTML = '⚠️ <strong>API Key Gemini belum diisi.</strong><br>Silakan isi variabel GEMINI_API_KEY di file script.js Anda.';
    } else {
      jawabanAI.innerHTML = '🌱 Sistem Online. Silakan ketik pertanyaan seputar budidaya atau kendala lahan Anda.';
    }
  }
  
  const weatherDiv = document.getElementById("weatherResult");
  if (weatherDiv && kotaInput) {
    // Menjalankan cek cuaca kota default sewaktu web pertama kali dimuat
    cekCuaca(kotaInput.value);
  }
});
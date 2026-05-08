import Image from "next/image";
import { ShieldCheck, Cog, Radio, MonitorCog, User, Lightbulb, Wrench, Target, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin, Download, FileText, MessageCircle } from "lucide-react";

const featureCards = [
  {
    title: "PERALATAN GEOTECH",
    desc: "Produksi, perbaikan, dan modifikasi alat geoteknik berstandar SNI untuk kebutuhan investigasi tanah.",
    image: "/images/geotech-card.jpg",
  },
  {
    title: "SOFTWARE HOUSE",
    desc: "Custom Development, IoT Integration, dan Digital Solution untuk optimalisasi operasional dan data.",
    image: "/images/software-card.jpg",
  },
  {
    title: "SOLUSI KOMUNIKASI",
    desc: "Penyediaan HT, radio rig, dan sistem komunikasi terintegrasi untuk berbagai sektor industri.",
    image: "/images/comm-card.jpg",
  },
];

const reasons = [
  ["Keahlian Multidisiplin", "Kami memahami aspek mekanik dari alat GeoTech sekaligus aspek digital untuk pengolahan datanya."],
  ["Workshop Mandiri", "Memiliki fasilitas perbaikan dan fabrikasi sendiri, sehingga kualitas dan layanan purna jual lebih cepat."],
  ["Standar Industri", "Seluruh peralatan yang kami produksi dan perbaiki merujuk pada standar nasional dan internasional."],
  ["Kustomisasi Tanpa Batas", "Sebagai Software House, kami dapat membangun aplikasi khusus yang terhubung dengan alat teknik Anda."],
];

const businesses = [
  {
    no: "1",
    title: "GeoTech & Soil Mechanics",
    desc: "Produksi, penjualan, dan jasa perbaikan alat Sondir, Bor Mesin, serta peralatan laboratorium tanah lainnya.",
    image: "/images/business-geotech.jpg",
    color: "blue"
  },
  {
    no: "2",
    title: "Software House",
    desc: "Pengembangan sistem informasi, aplikasi monitoring proyek, dan integrasi data logger untuk alat teknik.",
    image: "/images/business-software.jpg",
    color: "blue"
  },
  {
    no: "3",
    title: "Communication Solutions",
    desc: "Penyedia perangkat komunikasi radio HT, Repeater, Radio Link untuk mendukung koordinasi di area proyek.",
    image: "/images/business-comm.jpg",
    color: "orange"
  },
];

const products = [
  {
    name: "A. MESIN SONDIR (2 TON) STANDAR SNI 2827:2008",
    image: "/images/product-sondir.jpg",
    specs: [
      ["Rangka", "Steel kanal UNP reinforced"],
      ["Sistem Penekan", "Manual Hidrolik / Double Chain"],
      ["Manometer", "Dua unit 0-60 kg/cm² & 0-250 kg/cm²"],
      ["Stang Sondir", "Dia. 36 mm, Panjang 1 m, Seamless Pipe"],
    ]
  },
  {
    name: "B. MESIN BOR GEOTEKNIK (POWER RIG)",
    image: "/images/product-power-rig.jpg",
    specs: [
      ["Mesin Penggerak", "Diesel 7 HP - 10 HP"],
      ["Transmisi", "Gearbox dengan kopling manual"],
      ["Kapasitas Kedalaman", "30-50 Meter"],
      ["Aplikasi", "Geotechnical Investigation & SPT"],
    ]
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceCards />
      <Profile />
      <BusinessLines />
      <Commitment />
      <Products />
      <Footer />
      <FloatingActions />
    </main>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="logo" href="#home">
          <span>BSKY</span>
          <small>TEKNIK</small>
        </a>

        <nav className="menu">
          <a className="active" href="#home">HOME</a>
          <a href="#profile">TENTANG KAMI</a>
          <a href="#services">LAYANAN</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">KONTAK</a>
        </nav>

        <a className="quote-btn" href="https://wa.me/6281234567890">MINTA PENAWARAN</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <Image src="/images/hero-bg.jpg" alt="Workshop BSKY Teknik" fill priority />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-text">
          <p className="eyebrow">SOLUSI TEKNIK TERPADU</p>
          <h1>
            PRESISI.<br />
            <span>TERUJI.</span><br />
            <span>INOVATIF.</span>
          </h1>
          <p className="hero-desc">
            Sejak 2013, BSKY Teknik hadir sebagai partner andal untuk kebutuhan peralatan geoteknik,
            pengembangan software, dan solusi komunikasi.
          </p>

          <div className="hero-badges">
            <div><ShieldCheck /><strong>13+</strong><small>TAHUN PENGALAMAN</small></div>
            <div><Wrench /><strong>WORKSHOP</strong><small>MANDIRI</small></div>
            <div><MonitorCog /><strong>INTEGRASI</strong><small>TEKNOLOGI</small></div>
          </div>

          <div className="hero-actions">
            <a href="#profile">TENTANG KAMI</a>
            <a className="ghost" href="#services">LIHAT LAYANAN</a>
          </div>
        </div>

        <div className="since-box">
          <span>BERPENGALAMAN</span>
          <small>SEJAK</small>
          <strong>2013</strong>
        </div>
      </div>
    </section>
  );
}

function ServiceCards() {
  return (
    <section id="services" className="service-wrap">
      <div className="container service-panel">
        {featureCards.map((item) => (
          <article className="service-card" key={item.title}>
            <div className="service-img">
              <Image src={item.image} alt={item.title} width={240} height={140} />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a href="#products">LIHAT SELENGKAPNYA <span>→</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section id="profile" className="profile section">
      <div className="container">
        <h2>PROFIL PERUSAHAAN: <span>BSKY TEKNIK</span></h2>
        <div className="profile-grid">
          <div className="profile-left">
            <InfoBlock icon={<Lightbulb />} title="VISI KAMI">
              Menjadi mitra terdepan dalam menyediakan solusi teknik terintegrasi yang menggabungkan kekuatan mekanika tanah tradisional dengan inovasi teknologi digital modern.
            </InfoBlock>
            <InfoBlock icon={<User />} title="SIAPA KAMI?">
              BSKY Teknik adalah perusahaan yang bergerak di bidang manufaktur, perbaikan, dan penjualan peralatan GeoTech & Mekanika Tanah, sekaligus pusat pengembangan perangkat lunak dan solusi komunikasi radio.
              <br /><br />
              Kami lahir dari pemahaman bahwa industri konstruksi dan infrastruktur membutuhkan alat yang akurat, kuat, mudah dirawat, dan dapat diintegrasikan dengan sistem digital.
            </InfoBlock>
          </div>

          <div className="profile-right">
            <h3>MENGAPA MEMILIH BSKY TEKNIK?</h3>
            {reasons.map(([title, desc], index) => (
              <div className="reason" key={title}>
                <div className="reason-icon">{index === 0 ? <Cog /> : index === 1 ? <Wrench /> : index === 2 ? <ShieldCheck /> : <Target />}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ icon, title, children }) {
  return (
    <div className="info-block">
      <div className="info-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function BusinessLines() {
  return (
    <section id="portfolio" className="business section">
      <div className="container">
        <h2 className="center-title">LINI BISNIS UTAMA</h2>
        <div className="business-grid">
          {businesses.map((item) => (
            <article className={`business-card ${item.color}`} key={item.title}>
              <div className="number">{item.no}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Image src={item.image} alt={item.title} width={340} height={250} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commitment() {
  return (
    <section className="commitment">
      <div className="container commit-grid">
        <div className="commit-main">
          <ShieldCheck />
          <div>
            <h3>KOMITMEN KAMI</h3>
            <p>Di BSKY Teknik, setiap baut yang kami kencangkan dan setiap baris kode yang kami tulis bertujuan untuk satu hal: Keberhasilan Proyek Anda.</p>
          </div>
        </div>
        <div className="stat"><User /><strong>100+</strong><span>Klien Puas</span></div>
        <div className="stat"><FileText /><strong>500+</strong><span>Proyek Selesai</span></div>
        <div className="stat"><Target /><strong>100%</strong><span>Dedikasi & Kualitas</span></div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-head">
          <div>
            <span>KATALOG PRODUK GEOTECH</span>
            <h2>Produk Unggulan Kami</h2>
          </div>
          <a href="#">LIHAT SEMUA PRODUK →</a>
        </div>

        <div className="product-grid">
          {products.map((item) => (
            <article className="product-card" key={item.name}>
              <Image src={item.image} alt={item.name} width={400} height={260} />
              <div className="product-body">
                <h3>{item.name}</h3>
                <dl>
                  {item.specs.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt><dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="smart-box">
                  <MonitorCog />
                  <div>
                    <strong>SMART INTEGRATION</strong>
                    <p>Terintegrasi dengan Digital Data Logger BSKY untuk akuisisi data real-time & laporan otomatis.</p>
                  </div>
                </div>
                <div className="product-actions">
                  <a href="https://wa.me/6281234567890">MINTA PENAWARAN</a>
                  <a className="outline" href="#">LIHAT DETAIL</a>
                  <a className="outline" href="#"><Download /> DOWNLOAD KATALOG</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div>
          <a className="logo footer-logo" href="#home">
            <span>BSKY</span>
            <small>TEKNIK</small>
          </a>
          <p>Solusi Teknik Terpadu untuk peralatan geoteknik, software, dan komunikasi. Presisi, Teruji, Inovatif.</p>
          <div className="social"><Facebook /><Instagram /><Youtube /><Linkedin /></div>
        </div>

        <div>
          <h4>LAYANAN</h4>
          <a>Peralatan GeoTech</a>
          <a>Software House</a>
          <a>Solusi Komunikasi</a>
        </div>

        <div>
          <h4>LINK CEPAT</h4>
          <a>Tentang Kami</a>
          <a>Portfolio</a>
          <a>Katalog</a>
          <a>Kontak</a>
        </div>

        <div>
          <h4>KONTAK KAMI</h4>
          <p><Phone /> +62 812-3456-7890</p>
          <p><Mail /> info@bskyteknik.com</p>
          <p><MapPin /> Workshop & Kantor<br />Jl. Raya Industri No. 45<br />Cikarang, Bekasi - Jawa Barat</p>
        </div>

        <div className="map-card">
          <Image src="/images/map.jpg" alt="Lokasi BSKY Teknik" width={320} height={190} />
        </div>
      </div>

      <div className="container copyright">
        <span>© 2024 BSKY Teknik. All Rights Reserved.</span>
        <span>Designed with ♥ for Engineering Solutions</span>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="floating">
      <a className="wa" href="https://wa.me/6281234567890"><MessageCircle /> Chat via WhatsApp</a>
      <a className="offer" href="#products"><FileText /> Minta Penawaran</a>
      <a className="catalog" href="#products"><Download /> Download Katalog</a>
    </div>
  );
}

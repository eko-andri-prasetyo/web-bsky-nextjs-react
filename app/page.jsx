import {
  Award,
  BadgeCheck,
  Box,
  Building2,
  ChevronDown,
  Download,
  Facebook,
  Gauge,
  Headphones,
  Instagram,
  Laptop,
  Mail,
  MapPin,
  Menu,
  Phone,
  Radio,
  SearchCheck,
  Send,
  ShieldCheck,
  Star,
  Target,
  Youtube
} from 'lucide-react';

const navItems = ['Home', 'Tentang Kami', 'Layanan', 'Portfolio', 'Kontak'];

const serviceCards = [
  {
    title: 'Peralatan GeoTech',
    text: 'Produksi, perakitan, dan modifikasi alat geoteknik berstandar SNI untuk kebutuhan investigasi tanah.',
    image: '/assets/geotech-machine.svg'
  },
  {
    title: 'Software House',
    text: 'Custom development, IoT integration, dan digital solution untuk operasional dan data proyek.',
    image: '/assets/software-dashboard.svg'
  },
  {
    title: 'Solusi Komunikasi',
    text: 'Penyedia HT, radio, dan sistem komunikasi terintegrasi untuk koordinasi area kerja.',
    image: '/assets/radio-communication.svg'
  }
];

const advantages = [
  {
    icon: SearchCheck,
    title: 'Keahlian Multidisiplin',
    text: 'Memahami aspek mekanik alat GeoTech sekaligus aspek digital untuk pengolahan data.'
  },
  {
    icon: Gauge,
    title: 'Workshop Mandiri',
    text: 'Memiliki fasilitas perakitan dan perbaikan sendiri, sehingga pekerjaan lebih cepat dan terkontrol.'
  },
  {
    icon: ShieldCheck,
    title: 'Standar Industri',
    text: 'Setiap produk dan layanan dirancang mengacu pada standar nasional dan praktik lapangan.'
  },
  {
    icon: Target,
    title: 'Kustomisasi Tanpa Batas',
    text: 'Solusi dapat disesuaikan untuk kebutuhan proyek, monitoring data, maupun komunikasi tim.'
  }
];

const businessLines = [
  {
    number: '1',
    title: 'GeoTech & Soil Mechanics',
    text: 'Produksi, penjualan, dan jasa perbaikan alat sondir, bor mesin, serta peralatan laboratorium tanah lainnya.',
    image: '/assets/geotech-machine.svg',
    accent: 'blue'
  },
  {
    number: '2',
    title: 'Software House',
    text: 'Pengembangan sistem informasi, aplikasi monitoring proyek, dan integrasi data logger untuk alat teknik.',
    image: '/assets/software-dashboard.svg',
    accent: 'blue'
  },
  {
    number: '3',
    title: 'Communication Solutions',
    text: 'Penyedia perangkat komunikasi radio dan sistem komunikasi lapangan untuk koordinasi proyek skala kecil hingga besar.',
    image: '/assets/radio-communication.svg',
    accent: 'orange'
  }
];

const stats = [
  { value: '13+', label: 'Tahun Pengalaman', icon: Award },
  { value: '100+', label: 'Klien Puas', icon: Headphones },
  { value: '500+', label: 'Proyek Selesai', icon: Building2 },
  { value: '100%', label: 'Dedikasi & Kualitas', icon: Star }
];

const products = [
  {
    code: 'A',
    title: 'Mesin Sondir 2 Ton Standar SNI 2827:2008',
    image: '/assets/geotech-machine.svg',
    specs: [
      ['Rangka', 'Steel kanal UNP reinforced'],
      ['Sistem Penekan', 'Manual / engkol / double chain'],
      ['Manometer', 'Dua unit 0-60 kg/cm² & 0-250 kg/cm²'],
      ['Stang Sondir', 'Dia. 36 mm, panjang 1 m, seamless pipe']
    ]
  },
  {
    code: 'B',
    title: 'Mesin Bor Geoteknik Power Rig',
    image: '/assets/geotech-machine.svg',
    specs: [
      ['Mesin Penggerak', 'Diesel 7 HP - 10 HP'],
      ['Transmisi', 'Gearbox dengan kopling manual'],
      ['Kapasitas Kedalaman', '30-50 meter, deep boring'],
      ['Aplikasi', 'Geotechnical Investigation & SPT']
    ]
  }
];

const whatsappUrl = 'https://wa.me/6281234567890?text=Halo%20BSKY%20Teknik,%20saya%20ingin%20minta%20penawaran.';

function Logo({ dark = false }) {
  return (
    <a className="logo" href="#home" aria-label="BSKY Teknik home">
      <span className="logo-main">
        BS<span>KY</span>
      </span>
      <span className={dark ? 'logo-sub logo-sub-dark' : 'logo-sub'}>TEKNIK</span>
    </a>
  );
}

function ButtonLink({ href = '#kontak', variant = 'primary', children, icon }) {
  return (
    <a className={`btn btn-${variant}`} href={href}>
      {children}
      {icon ? <span className="btn-icon">{icon}</span> : null}
    </a>
  );
}

function SectionTitle({ eyebrow, title, align = 'center' }) {
  return (
    <div className={`section-title ${align === 'left' ? 'section-title-left' : ''}`}>
      {eyebrow ? <span>{eyebrow}</span> : null}
      <h2>{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>
                {item}
                {item === 'Layanan' ? <ChevronDown size={13} /> : null}
              </a>
            ))}
          </nav>
          <ButtonLink href="#kontak" variant="nav">
            Minta Penawaran
          </ButtonLink>
          <button className="menu-button" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <section id="home" className="hero">
        <img className="hero-bg" src="/assets/hero-industry.svg" alt="Workshop industri BSKY Teknik" />
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="hero-kicker">Solusi Teknik Terpadu</p>
            <h1>
              Presisi.
              <br />
              <span>Teruji.</span>
              <br />
              Inovatif.
            </h1>
            <p className="hero-lead">
              Sejak 2013, BSKY Teknik hadir sebagai partner andal untuk kebutuhan peralatan geoteknik,
              pengembangan software, dan solusi komunikasi.
            </p>
            <div className="hero-mini-stats">
              <div>
                <ShieldCheck size={35} />
                <strong>13+</strong>
                <span>Tahun Pengalaman</span>
              </div>
              <div>
                <Gauge size={35} />
                <strong>Workshop Mandiri</strong>
                <span>Kendali Mutu Penuh</span>
              </div>
              <div>
                <Laptop size={35} />
                <strong>Integrasi Teknologi</strong>
                <span>Hardware & Software</span>
              </div>
            </div>
            <div className="hero-actions">
              <ButtonLink href="#tentang-kami">Tentang Kami</ButtonLink>
              <ButtonLink href="#layanan" variant="outline">
                Lihat Layanan
              </ButtonLink>
            </div>
          </div>
          <aside className="experience-card" aria-label="Pengalaman sejak 2013">
            <span>Berpengalaman Sejak</span>
            <strong>2013</strong>
          </aside>
        </div>
      </section>

      <section id="layanan" className="service-strip">
        <div className="container strip-grid">
          {serviceCards.map((card) => (
            <article className="service-card" key={card.title}>
              <img src={card.image} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="#produk">
                  Lihat Selengkapnya
                  <Send size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="tentang-kami" className="profile-section">
        <div className="container">
          <SectionTitle title="Profil Perusahaan: BSKY Teknik" />
          <div className="profile-grid">
            <div className="profile-left">
              <div className="profile-block">
                <div className="round-icon"><Target size={28} /></div>
                <div>
                  <h3>Visi Kami</h3>
                  <p>
                    “Menjadi mitra terdepan dalam menyediakan solusi teknik terintegrasi yang
                    menggabungkan kekuatan mekanika tanah tradisional dengan inovasi teknologi digital modern.”
                  </p>
                </div>
              </div>
              <div className="profile-block">
                <div className="round-icon"><Building2 size={28} /></div>
                <div>
                  <h3>Siapa Kami?</h3>
                  <p>
                    BSKY Teknik adalah perusahaan yang bergerak di bidang manufaktur, perakitan,
                    penyediaan peralatan GeoTech dan Mekanika Tanah, sekaligus pengembangan perangkat lunak
                    serta solusi komunikasi radio.
                  </p>
                  <p>
                    Kami lahir dari pemahaman bahwa industri konstruksi dan infrastruktur membutuhkan alat yang
                    akurat, aplikasi yang praktis, dan komunikasi lapangan yang efektif.
                  </p>
                </div>
              </div>
            </div>
            <div className="profile-right">
              <h3>Mengapa Memilih BSKY Teknik?</h3>
              <div className="advantage-list">
                {advantages.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div className="advantage-item" key={item.title}>
                      <div className="advantage-icon"><Icon size={24} /></div>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="business-section">
        <div className="container">
          <SectionTitle title="Lini Bisnis Utama" />
          <div className="business-grid">
            {businessLines.map((line) => (
              <article className={`business-card ${line.accent === 'orange' ? 'business-orange' : ''}`} key={line.title}>
                <div className="business-head">
                  <span>{line.number}</span>
                  <div>
                    <h3>{line.title}</h3>
                    <p>{line.text}</p>
                  </div>
                </div>
                <img src={line.image} alt={line.title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="commitment-band">
        <div className="container commitment-wrap">
          <div className="commitment-text">
            <div className="commitment-icon"><ShieldCheck size={44} /></div>
            <div>
              <h3>Komitmen Kami</h3>
              <p>
                Di BSKY Teknik, setiap baut yang kami kencangkan dan setiap baris kode yang kami tulis bertujuan
                untuk satu hal: keberhasilan proyek Anda.
              </p>
            </div>
          </div>
          <div className="stats-grid">
            {stats.slice(1).map((stat) => {
              const Icon = stat.icon;
              return (
                <div className="stat-item" key={stat.label}>
                  <Icon size={32} />
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="produk" className="product-section">
        <div className="container">
          <div className="product-heading">
            <SectionTitle eyebrow="Katalog Produk GeoTech" title="Produk Unggulan Kami" align="left" />
            <a href="#kontak">Lihat Semua Produk <Send size={15} /></a>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <div className="product-media">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-info">
                  <h3>
                    {product.code}. {product.title}
                  </h3>
                  <dl>
                    {product.specs.map(([key, value]) => (
                      <div key={key}>
                        <dt>{key}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="smart-box">
                    <Box size={25} />
                    <div>
                      <strong>Smart Integration</strong>
                      <span>Terintegrasi dengan Data Logger BSKY untuk akuisisi data otomatis.</span>
                    </div>
                  </div>
                  <div className="product-actions">
                    <ButtonLink href="#kontak">Minta Penawaran</ButtonLink>
                    <ButtonLink href="#produk" variant="light">Lihat Detail</ButtonLink>
                    <ButtonLink href="#produk" variant="light" icon={<Download size={14} />}>Download Katalog</ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer id="kontak" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo dark />
            <p>Solusi teknik terpadu untuk peralatan geoteknik, software, dan komunikasi.</p>
            <div className="socials" aria-label="Media sosial">
              <a href="#kontak" aria-label="Facebook"><Facebook size={19} /></a>
              <a href="#kontak" aria-label="Instagram"><Instagram size={19} /></a>
              <a href="#kontak" aria-label="YouTube"><Youtube size={19} /></a>
              <a href="#kontak" aria-label="Portfolio"><BadgeCheck size={19} /></a>
            </div>
          </div>
          <div>
            <h4>Layanan</h4>
            <a href="#layanan">Peralatan GeoTech</a>
            <a href="#layanan">Software House</a>
            <a href="#layanan">Solusi Komunikasi</a>
          </div>
          <div>
            <h4>Link Cepat</h4>
            <a href="#tentang-kami">Tentang Kami</a>
            <a href="#produk">Portfolio</a>
            <a href="#produk">Katalog</a>
            <a href="#kontak">Kontak</a>
          </div>
          <div>
            <h4>Kontak Kami</h4>
            <p className="footer-line"><Phone size={16} /> +62 812-3456-7890</p>
            <p className="footer-line"><Mail size={16} /> info@bskyteknik.com</p>
            <p className="footer-line"><MapPin size={16} /> Workshop & Kantor: Jl. Raya Industri No. 45, Cikarang, Bekasi - Jawa Barat 17530</p>
          </div>
          <div className="footer-map">
            <img src="/assets/map.svg" alt="Peta lokasi BSKY Teknik" />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 BSKY Teknik. All Rights Reserved.</span>
          <span>Designed with ♥ for Engineering Solutions</span>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Aksi cepat">
        <a className="float-wa" href={whatsappUrl} target="_blank" rel="noreferrer">Chat via WhatsApp</a>
        <a className="float-offer" href="#kontak">Minta Penawaran</a>
        <a className="float-catalog" href="#produk">Download Katalog</a>
      </div>
    </main>
  );
}

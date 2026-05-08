import { ShieldCheck, Settings, Cpu, Radio, Users, Target, Download, MessageCircle, FileText, Mail, MapPin, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

const services = [
  { title: 'Peralatan Geotech', text: 'Produksi, perbaikan, dan modifikasi alat geoteknik berstandar SNI untuk kebutuhan investigasi tanah.', icon: Settings },
  { title: 'Software House', text: 'Custom development, IoT integration, dan dashboard monitoring operasional berbasis data.', icon: Cpu },
  { title: 'Solusi Komunikasi', text: 'Penyediaan HT, radio rig, repeater, antena, dan sistem komunikasi area proyek.', icon: Radio },
];

const reasons = [
  ['Keahlian Multidisiplin', 'Kombinasi mekanik alat, digital monitoring, dan sistem komunikasi membuat solusi lebih relevan.'],
  ['Workshop Mandiri', 'Fasilitas perbaikan dan fabrikasi sendiri menjaga kualitas, kecepatan, dan biaya.'],
  ['Standar Industri', 'Produk dan pekerjaan mengacu pada standar nasional serta praktik industri.'],
  ['Kustomisasi Tanpa Batas', 'Solusi dapat disesuaikan dengan kebutuhan proyek, lokasi, dan alur kerja klien.'],
];

const products = [
  { name: 'Mesin Sondir 2 Ton Standar SNI 2827:2008', img: '/sondir.svg', specs: ['Sistem penekan manual/hidrolik', 'Manometer dual 0–60 kg/cm²', 'Rangka baja reinforced', 'Integrasi digital logger opsional'] },
  { name: 'Mesin Bor Geoteknik Power Rig', img: '/rig.svg', specs: ['Diesel 7 HP – 10 HP', 'Kedalaman 30–50 meter', 'Core drilling & SPT', 'Crawler/portable frame'] },
];

function Button({ children, secondary }) {
  return <button className={secondary ? 'btn btn-secondary' : 'btn'}>{children}</button>;
}

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a className="brand" href="#home"><span>BSKY</span><small>TEKNIK</small></a>
        <nav>
          <a href="#home">Home</a><a href="#tentang">Tentang Kami</a><a href="#layanan">Layanan</a><a href="#portfolio">Portfolio</a><a href="#kontak">Kontak</a>
        </nav>
        <a href="https://wa.me/6281234567890" className="quote">Minta Penawaran</a>
      </header>

      <section id="home" className="hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Solusi Teknik Terpadu</p>
          <h1>Presisi.<br/><span>Teruji.</span><br/><span>Inovatif.</span></h1>
          <p className="hero-text">Sejak 2013, BSKY Teknik hadir sebagai partner andal untuk kebutuhan peralatan geoteknik, pengembangan software, dan solusi komunikasi.</p>
          <div className="actions"><Button>Tentang Kami</Button><Button secondary>Lihat Layanan</Button></div>
          <div className="badges"><div><ShieldCheck/>13+<small>Tahun Pengalaman</small></div><div><Settings/>Workshop Mandiri<small>Kendali mutu penuh</small></div><div><Cpu/>Integrasi Teknologi<small>Hardware & software</small></div></div>
        </div>
        <div className="since"><small>Berpengalaman sejak</small><b>2013</b></div>
      </section>

      <section id="layanan" className="service-cards">
        {services.map(({ title, text, icon: Icon }) => <article key={title}><Icon/><h3>{title}</h3><p>{text}</p><a>Lihat selengkapnya →</a></article>)}
      </section>

      <section id="tentang" className="profile section">
        <div>
          <p className="section-label">Profil Perusahaan</p><h2>BSKY <span>Teknik</span></h2>
          <div className="info"><ShieldCheck/><div><h3>Visi Kami</h3><p>Menjadi mitra terpercaya dalam menyediakan solusi teknik terintegrasi yang menggabungkan kekuatan mekanika tanah tradisional dengan inovasi teknologi digital modern.</p></div></div>
          <div className="info"><Users/><div><h3>Siapa Kami?</h3><p>BSKY Teknik bergerak pada manufaktur, perbaikan, dan penyediaan peralatan GeoTech & mekanika tanah, sekaligus pengembangan software serta komunikasi radio untuk proyek lapangan.</p></div></div>
        </div>
        <div className="why"><h3>Mengapa Memilih BSKY Teknik?</h3>{reasons.map(([t,d]) => <div className="reason" key={t}><Target/><div><b>{t}</b><p>{d}</p></div></div>)}</div>
      </section>

      <section className="section"><h2 className="center">Lini Bisnis Utama</h2><div className="business-grid">{services.map(({title,text}, i)=><article className={i===2?'accent':''} key={title}><b>{i+1}</b><h3>{title}</h3><p>{text}</p><div className="mock-img">{i===1?<Cpu/>:i===2?<Radio/>:<Settings/>}</div></article>)}</div></section>

      <section className="commitment"><div><ShieldCheck/><b>Komitmen Kami</b><p>Tim kami merancang dan mengerjakan solusi teknis dengan standar rapi, aman, dan siap dipakai di lapangan.</p></div><strong>100+<small>Klien Puas</small></strong><strong>500+<small>Proyek Selesai</small></strong><strong>100%<small>Dedikasi & Kualitas</small></strong></section>

      <section id="portfolio" className="section products"><p className="section-label orange">Katalog Produk Geotech</p><h2>Produk Unggulan Kami</h2><div className="product-grid">{products.map(p=><article key={p.name}><img src={p.img} alt={p.name}/><div><h3>{p.name}</h3><ul>{p.specs.map(s=><li key={s}>{s}</li>)}</ul><div className="product-actions"><Button>Minta Penawaran</Button><Button secondary>Lihat Detail</Button><button className="download"><Download size={16}/> Download Katalog</button></div></div></article>)}</div></section>

      <footer id="kontak"><div><a className="brand"><span>BSKY</span><small>TEKNIK</small></a><p>Solusi teknik terpadu untuk peralatan geoteknik, software, dan komunikasi.</p><div className="social"><Facebook/><Instagram/><Linkedin/></div></div><div><h4>Layanan</h4><a>Peralatan GeoTech</a><a>Software House</a><a>Solusi Komunikasi</a></div><div><h4>Kontak Kami</h4><p><Phone/> +62 812-3456-7890</p><p><Mail/> info@bskyteknik.com</p><p><MapPin/> Workshop & Kantor, Bekasi - Jawa Barat</p></div><div className="map">BSKY Teknik<br/>Workshop & Kantor</div></footer>
      <div className="floating"><a href="https://wa.me/6281234567890"><MessageCircle/> Chat via WhatsApp</a><a><FileText/> Minta Penawaran</a><a><Download/> Download Katalog</a></div>
    </main>
  );
}

const navLinks = [
  { label: "בית", href: "#top" },
  { label: "אודות", href: "#about" },
  { label: "גלריה", href: "#gallery" },
  { label: "צור קשר", href: "#contact" },
];

const specialties = [
  { title: "הריון", image: "/images/specialty-pregnancy.jpg" },
  { title: "השנים הראשונות", image: "/images/specialty-baby.jpg" },
  { title: "חתונה", image: "/images/gallery-wedding.jpg" },
  { title: "אווירה", image: "/images/gallery-aerial.jpg" },
];

const galleryImages = [
  "/images/gallery-wedding.jpg",
  "/images/gallery-aerial.jpg",
  "/images/gallery-shofar.jpg",
  "/images/gallery-mma.jpg",
];

function Header() {
  return (
    <header className="flex items-center justify-between px-8 md:px-16 py-6 bg-white">
      <div className="text-xl font-bold">אריאל דורון</div>
      <nav className="flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-terracotta transition-colors">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-cream py-24 px-8 flex flex-col items-center gap-7 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">אריאל דורון</h1>
      <p className="text-xl">מצלם רגעים, לא רק תמונות</p>
      <div className="flex flex-col sm:flex-row gap-6">
        {["/videos/video-1.mp4", "/videos/video-2.mp4"].map((src) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-[260px] h-[445px] object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>
      <a
        href="#contact"
        className="mt-2 px-8 py-3.5 rounded-lg bg-brown text-white text-sm font-semibold hover:bg-terracotta transition-colors"
      >
        צור קשר
      </a>
    </section>
  );
}

function Specialties() {
  return (
    <section className="bg-cream py-20 px-8 md:px-16 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-bold">תחומי הצילום שלי</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
        {specialties.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-[260px] h-[330px] object-cover rounded-2xl"
            />
            <span className="text-lg font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-14 justify-center">
      <img
        src="/images/about.jpg"
        alt="אריאל דורון"
        className="w-[440px] h-[320px] object-cover rounded-xl"
      />
      <div className="flex flex-col gap-4 max-w-[500px] text-right">
        <h2 className="text-3xl font-bold">קצת עליי</h2>
        <p className="text-lg leading-relaxed">
          צלם ווידאוגרף אירועים, עם התמחות בצילום רחפן ותיעוד רגעים טקסיים ותרבותיים.
          כל אירוע מספר סיפור - אני כאן לתעד אותו.
        </p>
        <a href="#about" className="text-terracotta font-semibold">
          קרא עוד ←
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20 px-8 md:px-16 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold">גלריה</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {galleryImages.map((src) => (
          <img key={src} src={src} alt="" className="w-[300px] h-[220px] object-cover rounded-[10px]" />
        ))}
      </div>
      <a href="#gallery" className="text-terracotta font-semibold">
        לכל הגלריה ←
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-brown text-white py-20 px-8 flex flex-col items-center gap-5 text-center">
      <h2 className="text-3xl font-bold">מתכננים אירוע?</h2>
      <p>בואו נדבר ונתכנן את התיעוד המושלם לרגע שלכם</p>
      <a
        href="mailto:info@arieldoron.com"
        className="px-8 py-3.5 rounded-lg bg-terracotta text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        שלחו הודעה
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Specialties />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
}

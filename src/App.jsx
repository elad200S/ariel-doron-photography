import { useState } from "react";

const PHONE_DISPLAY = "050-123-4567";
const PHONE_TEL = "tel:0501234567";
const WHATSAPP_LINK = "https://wa.me/972501234567";

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

const heroVideos = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
  "/videos/video-5.mp4",
  "/videos/video-6.mp4",
];

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.2 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z"
        fill="white"
      />
    </svg>
  );
}

function HamburgerIcon({ open }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      ) : (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-black text-white">
      <div className="flex items-center justify-between px-6 md:px-16 py-3">
        <img src="/images/logo-badge.png" alt="אריאל דורון" className="h-12 w-12 md:h-14 md:w-14 object-cover rounded-xl" />

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-terracotta transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_TEL}
            dir="ltr"
            className="flex items-center gap-2 bg-terracotta text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>

          <button
            type="button"
            aria-label="תפריט"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden flex flex-col items-end gap-4 px-6 pb-5 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-terracotta transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative h-[90vh] min-h-[560px] overflow-hidden">
      {/* Desktop: all videos side by side */}
      <div className="hidden md:flex h-full">
        {heroVideos.map((src) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full flex-1 min-w-0 object-cover"
          />
        ))}
      </div>
      {/* Mobile: swipeable carousel, one video at a time */}
      <div className="flex md:hidden h-full overflow-x-auto snap-x snap-mandatory no-scrollbar">
        {heroVideos.map((src) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full flex-shrink-0 snap-center object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-brown/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 text-center text-white px-8">
        <img src="/images/logo-white.png" alt="אריאל דורון" className="w-64 md:w-80" />
        <p className="text-xl md:text-2xl">מצלם רגעים, לא רק תמונות</p>
        <a
          href="#contact"
          className="mt-2 px-8 py-3.5 rounded-lg bg-terracotta text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          צור קשר
        </a>
      </div>
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

function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="וואטסאפ"
      className="fixed bottom-6 left-6 z-40 w-14 h-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-xl hover:opacity-90 transition-opacity"
    >
      <WhatsAppIcon />
    </a>
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
      <WhatsAppButton />
    </div>
  );
}

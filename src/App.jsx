import { useState } from "react";

const PHONE_DISPLAY = "050-123-4567";
const PHONE_TEL = "tel:0501234567";
const WHATSAPP_LINK = "https://wa.me/972501234567";
const EMAIL = "info@arieldoron.com";
const INSTAGRAM_LINK = "https://www.instagram.com/ariel_doron.nt";

// כתובת ה-Web App של Google Apps Script שתקבל את הטופס, תוסיף שורה לגוגל שיטס
// ותשלח התראה למייל. אחרי שתגדירו את זה, הדביקו כאן את ה-URL שתקבלו מהפריסה.
const FORM_ENDPOINT = "";

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

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function PlusMark({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none absolute text-2xl font-light text-black/20 ${className}`}
    >
      +
    </span>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="uppercase tracking-[0.2em] text-xs font-semibold text-accent">
      {children}
    </span>
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
              <a
                key={link.href}
                href={link.href}
                className="uppercase tracking-[0.15em] text-xs font-semibold hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={PHONE_TEL}
            dir="ltr"
            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
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
        <nav className="md:hidden flex flex-col items-start gap-4 px-6 pb-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="uppercase tracking-[0.15em] text-xs font-semibold hover:text-accent transition-colors"
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
      {/* Mobile: static grid of video squares */}
      <div className="grid grid-cols-2 grid-rows-3 md:hidden h-full">
        {heroVideos.map((src) => (
          <video
            key={src}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[#3a2c25]/35" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-7 text-center text-white px-8">
        <img src="/images/logo-white.png" alt="אריאל דורון" className="w-64 md:w-80" />
        <p className="text-xl md:text-2xl">מצלם רגעים, לא רק תמונות</p>
        <a
          href="#contact"
          className="mt-2 px-8 py-3.5 rounded-lg bg-[#b8945a] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          צור קשר
        </a>
      </div>
    </section>
  );
}

const tiltClasses = ["-rotate-2", "rotate-3", "-rotate-3", "rotate-2"];

function Specialties() {
  return (
    <section className="relative bg-cream py-20 px-8 md:px-16 flex flex-col items-center gap-10">
      <PlusMark className="top-6 right-6" />
      <PlusMark className="bottom-6 left-6" />
      <div className="flex flex-col items-center gap-3">
        <Eyebrow>מה אני מצלם</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black uppercase">תחומי הצילום שלי</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 pt-6">
        {specialties.map((item, i) => (
          <div key={item.title} className="flex flex-col items-center gap-4">
            <img
              src={item.image}
              alt={item.title}
              className={`w-[260px] h-[330px] object-cover rounded-2xl border-2 border-black/5 shadow-lg ${tiltClasses[i % tiltClasses.length]} hover:rotate-0 transition-transform duration-300`}
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
    <section id="about" className="relative bg-cream py-20 px-8 md:px-16 flex flex-col md:flex-row items-center gap-14 justify-center">
      <PlusMark className="top-6 right-6" />
      <img
        src="/images/about.jpg"
        alt="אריאל דורון"
        className="w-[440px] h-[320px] object-cover rounded-xl border-2 border-black/5 shadow-lg -rotate-1"
      />
      <div className="flex flex-col gap-4 max-w-[500px] text-right">
        <Eyebrow>מי אני</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black uppercase">קצת עליי</h2>
        <p className="text-lg leading-relaxed">
          צלם ווידאוגרף אירועים, עם התמחות בצילום רחפן ותיעוד רגעים טקסיים ותרבותיים.
          כל אירוע מספר סיפור - אני כאן לתעד אותו.
        </p>
        <a href="#about" className="text-accent font-semibold">
          קרא עוד ←
        </a>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="relative bg-cream py-20 px-8 md:px-16 flex flex-col items-center gap-8">
      <PlusMark className="top-6 left-6" />
      <PlusMark className="bottom-6 right-6" />
      <div className="flex flex-col items-center gap-3">
        <Eyebrow>העבודות שלי</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black uppercase">גלריה</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-6">
        {galleryImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`w-[300px] h-[220px] object-cover rounded-[10px] border-2 border-black/5 shadow-lg ${tiltClasses[i % tiltClasses.length]} hover:rotate-0 transition-transform duration-300`}
          />
        ))}
      </div>
      <a href="#gallery" className="text-accent font-semibold">
        לכל הגלריה ←
      </a>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!FORM_ENDPOINT) {
      setStatus("sent");
      return;
    }

    setStatus("submitting");
    try {
      await fetch(FORM_ENDPOINT, { method: "POST", body: data });
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("idle");
    }
  }

  if (status === "sent") {
    return (
      <p className="bg-white/10 rounded-xl px-6 py-5 text-center max-w-md">
        תודה! הפרטים התקבלו ואחזור אליכם בהקדם.
      </p>
    );
  }

  const inputClass =
    "bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3 text-right">
      <input name="name" type="text" placeholder="שם מלא" required className={inputClass} />
      <input name="phone" type="tel" placeholder="טלפון" required className={inputClass} />
      <input name="email" type="email" placeholder="אימייל (לא חובה)" className={inputClass} />
      <textarea name="message" rows="3" placeholder="ספרו לי קצת על האירוע..." className={inputClass} />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-8 py-3.5 rounded-lg bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {status === "submitting" ? "שולח..." : "שלחו פרטים"}
      </button>
    </form>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative bg-brown text-white">
      <PlusMark className="top-6 right-6 text-white/20" />
      <PlusMark className="top-6 left-6 text-white/20" />
      <div className="py-20 px-8 flex flex-col items-center gap-6 text-center">
        <Eyebrow>בואו נדבר</Eyebrow>
        <h2 className="text-4xl md:text-5xl font-black uppercase">מתכננים אירוע?</h2>
        <p>השאירו פרטים ואחזור אליכם לתיאום הצילום</p>
        <ContactForm />
      </div>

      <div className="border-t border-white/10 px-8 md:px-16 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-right">
          <img src="/images/logo-badge.png" alt="אריאל דורון" className="h-16 w-16 rounded-xl object-cover" />
          <p className="text-white/70 leading-relaxed">
            צלם ווידאוגרף אירועים - הריון, השנים הראשונות, חתונות ואווירה. כל אירוע מספר סיפור, אני כאן לתעד אותו.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-right">
          <h3 className="uppercase tracking-[0.15em] text-xs font-semibold text-white mb-1">קישורים מהירים</h3>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white/70 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-right">
          <h3 className="uppercase tracking-[0.15em] text-xs font-semibold text-white mb-1">יצירת קשר</h3>
          <a href={PHONE_TEL} dir="ltr" className="text-white/70 hover:text-accent transition-colors flex items-center gap-2">
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-accent transition-colors">
            {EMAIL}
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-accent transition-colors flex items-center gap-2"
          >
            <InstagramIcon />
            אינסטגרם
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} אריאל דורון. כל הזכויות שמורות.
      </div>
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

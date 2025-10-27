"use client";

import React from "react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Instagram,
  Facebook,
  MessageCircle,
  CheckCircle2,
  Shield,
  Car,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ==========================================================
   SOS PNEUS 74 – Thème PREMIUM (boutons noirs) + SEO
   - Sémantique <main> + titres hiérarchisés (H1 / H2)
   - Alt d’images descriptifs
   - Données structurées JSON-LD (LocalBusiness)
   ========================================================== */

// ---------- Helpers
const Section = ({ id, className = "", children }: any) => (
  <section id={id} className={className} role="region" aria-labelledby={`${id}-title`}>
    {children}
  </section>
);

// ---------- Données agence unique (74)
const AGENCY = {
  city: "Annemasse",
  phone: "+33768933342",
  phoneDisplay: "07 68 93 33 42",
  whatsapp: "https://wa.me/33768933342?text=Bonjour%20SOS%20PNEUS",
  address: "5 rue du Mont-Rond, 74100 Annemasse",
  gmaps:
    "https://maps.google.com/?q=SOS%20PNEUS%2074%208%20Imp.%20du%20Col%20de%20la%20Faucille%2C%2074100%20V%C3%A9traz-Monthoux",
  facebook: "https://www.facebook.com/p/Sos-Pneus-74-61556794664170/",
  instagram: "https://www.instagram.com/sos_pneus_74/",
} as const;

export default function Website() {
  // --- Galerie: images
  const gallery = [
    "/images/hero-2.jpg",
    "/images/hero-3.jpg",
    "/images/editorial-2.jpg",
    "/images/editorial-3.jpg",
    "/images/editorial-4.jpg",
    "/images/editorial-5.jpg",
    "/images/editorial-6.jpg",
    "/images/editorial-7.jpg",
    "/images/editorial-8.jpg",
    "/images/editorial-9.jpg",
    "/images/editorial-10.jpg",
    "/images/editorial-11.jpg",
    "/images/editorial-12.jpg",
    "/images/editorial-13.jpg",
  ];

  // --- Carousel state
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);
  const touchDeltaX = React.useRef(0);

  const next = React.useCallback(() => {
    setIndex((i) => (i + 1) % gallery.length);
  }, [gallery.length]);
  const prev = React.useCallback(() => {
    setIndex((i) => (i - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => next(), 3000); // auto-slide toutes les 3s
    return () => clearInterval(id);
  }, [paused, next]);

  const b = AGENCY;

  const services = [
    { icon: <Wrench className="w-6 h-6" />, title: "Dépannage crevaison", desc: "Réparation mèche/champignon, roue de secours, assistance express." },
    { icon: <Car className="w-6 h-6" />, title: "Montage & équilibrage", desc: "Pneus neufs/occasions, valves, équilibrage précis." },
    { icon: <Gauge className="w-6 h-6" />, title: "Permutation & contrôle", desc: "Permutation saisonnière, contrôle pression/état, conseils d’usure." },
    { icon: <Shield className="w-6 h-6" />, title: "Assistance 24/7", desc: "Nuit & week-ends. Atelier mobile qui vient à vous." },
  ];

  // JSON-LD LocalBusiness (SEO local)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SOS PNEUS 74",
    image: "https://sospneus74.fr/logo_sos_pneus.jpg",
    url: "https://sospneus74.fr",
    telephone: b.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 rue du Mont-Rond",
      addressLocality: "Annemasse",
      postalCode: "74100",
      addressCountry: "FR",
    },
    areaServed: ["Annemasse", "Haute-Savoie", "Frontière Suisse"],
    sameAs: [b.facebook, b.instagram],
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" }
    ],
    makesOffer: [
      { "@type": "Offer", name: "Réparation crevaison", price: "20", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Montage pneu (à l’unité)", price: "20", priceCurrency: "EUR" }
    ],
    serviceType: [
      "Montage et équilibrage de pneus",
      "Permutation été/hiver",
      "Dépannage crevaison",
      "Contrôle pression et diagnostics"
    ],
  };

  return (
    <>
      {/* Données structurées pour Google */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-black text-white font-sans">
        {/* ---------- Header */}
        <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 select-none" aria-label="Accueil SOS PNEUS 74">
              <Image src="/logo_sos_pneus.jpg" alt="Logo SOS PNEUS 74" width={120} height={40} className="h-8 w-auto" />
              <span className="sr-only">SOS PNEUS</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Navigation principale">
              <a href="#univers" className="hover:text-yellow-300">Univers</a>
              <a href="#services" className="hover:text-yellow-300">Services</a>
              <a href="#tarifs" className="hover:text-yellow-300">Tarifs</a>
              <a href="#galerie" className="hover:text-yellow-300">Galerie</a>
              <a href="#agence" className="hover:text-yellow-300">Agence</a>
              <a href="#contact" className="hover:text-yellow-300">Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <Button asChild className="rounded-2xl bg-black text-white border border-white hover:bg-neutral-900" aria-label={`Appeler ${b.phoneDisplay}`}>
                <a href={`tel:${b.phone}`}><Phone className="mr-2 h-4 w-4" /> {b.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </header>

        <main>
          {/* ---------- HERO fullscreen */}
          <Section id="univers" className="relative h-[100svh]">
            <Image
              src="/images/hero-1.jpg"
              alt="Montage de pneus à domicile à Annemasse - SOS PNEUS 74"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute bottom-16 left-0 right-0">
              <div className="max-w-7xl mx-auto px-4">
                <h1 id="univers-title" className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl">
                  L’atelier mobile qui vient à vous — <span className="text-yellow-300">24/7</span> sur {b.city}
                </h1>
                <p className="mt-4 max-w-xl text-neutral-200">
                  Réparation de crevaison, montage/équilibrage, contrôle pression et diagnostics. Permutation saisonnière, remplacement de pneus usés et fourniture de pneus adaptés à votre véhicule.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="rounded-2xl bg-black text-white border border-white hover:bg-neutral-900" aria-label={`Appeler ${b.phoneDisplay} maintenant`}>
                    <a href={`tel:${b.phone}`}><Phone className="w-4 h-4 mr-2" /> Appeler</a>
                  </Button>
                  <Button asChild size="lg" className="rounded-2xl border border-white text-white hover:bg-white/10" aria-label="Nous écrire sur WhatsApp">
                    <a href={b.whatsapp} target="_blank" rel="noreferrer"><MessageCircle className="w-4 h-4 mr-2" /> WhatsApp</a>
                  </Button>
                </div>
              </div>
            </div>
          </Section>

          {/* ---------- Bandeau chiffres */}
          <div className="border-y border-white/10 bg-neutral-900/50" aria-label="Chiffres clés">
            <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div><div className="text-yellow-300 font-extrabold text-xl">30 min</div><div className="text-neutral-300">Délai moyen</div></div>
              <div><div className="text-yellow-300 font-extrabold text-xl">24/7</div><div className="text-neutral-300">Disponibilité</div></div>
              <div><div className="text-yellow-300 font-extrabold text-xl">1 agence</div><div className="text-neutral-300">Annemasse</div></div>
              <div><div className="text-yellow-300 font-extrabold text-xl">5★</div><div className="text-neutral-300">Avis clients</div></div>
            </div>
          </div>

          {/* ---------- Editorial split */}
          <Section id="editorial" className="relative py-20">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 id="editorial-title" className="text-3xl md:text-4xl font-bold">SOS PNEUS, l’atelier qui vient à vous</h2>
                <p className="mt-4 text-neutral-300">
                  Réparation de crevaison, montage/équilibrage, contrôle pression et diagnostics. Permutation saisonnière (changement de pneus Eté / Hiver), remplacement de pneus usés et fourniture de pneus adaptés à votre véhicule.
                  Intervention soignée sur le bassin de la Haute Savoie (Annemasse, Thonon, Annecy,..).
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-yellow-300" /> Intervention rapide</div>
                  <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="text-yellow-300" /> Devis immédiat</div>
                </div>
              </div>
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden ring-1 ring-white/10">
                <Image
                  src="/images/editorial-1.jpg"
                  alt="Intervention pneus sur site à Annemasse"
                  fill
                  className="object-cover md:object-contain bg-black"
                />
              </div>
            </div>
          </Section>

          {/* ---------- Services */}
          <Section id="services" className="py-20 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4">
              <h2 id="services-title" className="text-3xl md:text-4xl font-bold">Services</h2>
              <p className="mt-3 text-neutral-300 max-w-2xl">
                Sécurité, performance et transparence. Nous prenons soin de votre véhicule comme s’il était le nôtre.
              </p>
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((s, i) => (
                  <Card key={i} className="bg-white text-black rounded-2xl border-white/10" itemScope itemType="https://schema.org/Service">
                    <CardHeader className="space-y-2">
                      <div className="w-12 h-12 rounded-xl bg-black text-white border border-black/10 flex items-center justify-center" aria-hidden="true">{s.icon}</div>
                      <CardTitle className="text-xl" itemProp="name">{s.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-neutral-700" itemProp="description">{s.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          {/* ---------- Tarifs */}
          <Section id="tarifs" className="py-20 bg-gradient-to-b from-black to-neutral-900">
            <div className="max-w-7xl mx-auto px-4">
              <h2 id="tarifs-title" className="text-3xl md:text-4xl font-bold">Tarifs indicatifs</h2>
              <p className="mt-3 text-neutral-300">Les prix varient selon le véhicule, la dimension et la zone. Contactez-nous pour un devis exact.</p>
              <div className="mt-10 grid lg:grid-cols-3 gap-6">
                {[
                  { name: "Réparation crevaison", price: "20€", items: ["Mèche ou champignon", "Contrôle pression", "Équilibrage (option)"] },
                  { name: "Montage pneu (à l’unité)", price: "A partir de 15€", items: ["Montage/valve", "Équilibrage"] },
                  { name: "Dépannage 24/7", price: "sur devis", items: ["Déplacement sur zone", "Diagnostics & solutions", "Remorquage partenaire (si besoin)"] },
                ].map((p, i) => (
                  <Card key={i} className="bg-white text-black rounded-2xl" itemScope itemType="https://schema.org/Offer">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span itemProp="name">{p.name}</span>
                        <span className="text-black font-bold" itemProp="price">{p.price}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        {p.items.map((it, j) => (
                          <li key={j} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 text-black" aria-hidden="true" /> <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>

          {/* ---------- Galerie (carousel) */}
          <Section id="galerie" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4">
              <h2 id="galerie-title" className="text-3xl md:text-4xl font-bold">Galerie</h2>
            </div>

            {/* Carousel premium - auto slide 3s, pause au survol, swipe mobile */}
            <div
              className="relative mt-8 select-none"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onTouchStart={(e) => {
                touchStartX.current = e.touches[0].clientX;
                touchDeltaX.current = 0;
                setPaused(true);
              }}
              onTouchMove={(e) => {
                if (touchStartX.current === null) return;
                touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
              }}
              onTouchEnd={() => {
                const dx = touchDeltaX.current;
                if (Math.abs(dx) > 50) {
                  if (dx < 0) next(); else prev();
                }
                touchStartX.current = null;
                touchDeltaX.current = 0;
                setPaused(false);
              }}
              aria-roledescription="carousel"
              aria-label="Galerie photos interventions SOS PNEUS 74"
            >
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${index * 100}%)` }}
                >
                  {gallery.map((src, i) => (
                    <div key={i} className="relative w-full shrink-0" role="group" aria-label={`Photo ${i + 1} sur ${gallery.length}`}>
                      <div className="relative h-[70vw] md:h-[48vw] lg:h-[32vw] max-h-[720px]">
                        <Image
                          src={src}
                          alt={`Intervention pneus SOS PNEUS 74 - Photo ${i + 1}`}
                          fill
                          className="object-cover md:object-contain bg-black"
                          sizes="100vw"
                          priority={i === 0}
                        />
                        <div className="absolute inset-0 ring-1 ring-white/10 rounded-none" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Controls */}
              <button
                aria-label="Slide précédente"
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 text-white backdrop-blur flex items-center justify-center border border-white/20 hover:bg-black/80"
              >
                ‹
              </button>
              <button
                aria-label="Slide suivante"
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 text-white backdrop-blur flex items-center justify-center border border-white/20 hover:bg-black/80"
              >
                ›
              </button>

              {/* Dots */}
              <div className="mt-4 flex items-center justify-center gap-2" role="tablist" aria-label="Navigation galerie">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Aller à la slide ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all ${
                      i === index ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Section>

          {/* ---------- Agence (unique) */}
          <Section id="agence" className="py-20 bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4">
              <h2 id="agence-title" className="text-3xl md:text-4xl font-bold">Notre agence – Annemasse</h2>
              <div className="mt-8 grid lg:grid-cols-2 gap-6">
                <Card className="bg-white text-black rounded-2xl">
                  <CardHeader><CardTitle>Facebook</CardTitle></CardHeader>
                  <CardContent>
                    <div className="rounded-xl overflow-hidden border border-black/10">
                      <iframe
                        title="Facebook – SOS Pneus 74"
                        className="w-full h-[380px]"
                        style={{ border: 0, overflow: "hidden", background: "white" }}
                        scrolling="no"
                        frameBorder="0"
                        allow="encrypted-media; picture-in-picture; web-share"
                        src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(b.facebook)}&tabs=timeline&width=500&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white text-black rounded-2xl">
                  <CardHeader><CardTitle>Instagram</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-neutral-700">@sos_pneus_74</p>
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/sos_pneus_74/" data-instgrm-version="14" />
                    <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/stories/highlights/18094781062622371/" data-instgrm-version="14" />
                    <script async src="https://www.instagram.com/embed.js"></script>
                    <Button asChild className="rounded-2xl bg-black text-white border border-black hover:bg-neutral-900" aria-label="Ouvrir Instagram SOS PNEUS 74">
                      <a href={b.instagram} target="_blank" rel="noreferrer"><Instagram className="w-4 h-4 mr-2" />Ouvrir Instagram</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Section>

          {/* ---------- Contact */}
          <Section id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-6">
              <Card className="bg-white text-black rounded-2xl">
                <CardHeader><CardTitle>Contact direct</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-black" aria-hidden="true" /><a className="underline" href={`tel:${b.phone}`}>{b.phoneDisplay}</a></div>
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-black" aria-hidden="true" /><a className="underline" href={b.gmaps} target="_blank" rel="noreferrer">{b.address}</a></div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-black" aria-hidden="true" /> 24h/24 – 7j/7</div>
                  <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-black" aria-hidden="true" /><a className="underline" href={b.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a></div>
                  <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-black" aria-hidden="true" /><a className="underline" href={`mailto:contact@sospneus74.fr`}>contact@sospneus74.fr</a></div>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-2xl lg:col-span-2">
                <CardContent className="p-0">
                  <iframe
                    title="Localisation SOS PNEUS 74"
                    className="w-full h-[360px] rounded-2xl"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`${b.gmaps}&output=embed`}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="rounded-2xl bg-black text-white border border-white hover:bg-neutral-900" aria-label="Appeler SOS PNEUS 74">
                <a href={`tel:${b.phone}`}><Phone className="mr-2 h-4 w-4" /> Appeler maintenant</a>
              </Button>
            </div>
          </Section>
        </main>

        {/* ---------- Footer */}
        <footer className="border-t border-white/10 py-10 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
            <div>
              <div className="font-bold">SOS PNEUS</div>
              <div className="text-sm text-neutral-400">L’atelier mobile • Dépannage • Montage • Équilibrage</div>
            </div>
            <div className="text-sm text-neutral-400">© {new Date().getFullYear()} — Tous droits réservés.</div>
            <div className="flex justify-start md:justify-end gap-3">
              <Button asChild className="rounded-2xl bg-black text-white border border-white hover:bg-neutral-900" aria-label="Ouvrir Instagram SOS PNEUS 74">
                <a href={b.instagram} target="_blank" rel="noreferrer"><Instagram className="w-4 h-4 mr-2" />Instagram</a>
              </Button>
              <Button asChild className="rounded-2xl bg-black text-white border border-white hover:bg-neutral-900" aria-label="Ouvrir Facebook SOS PNEUS 74">
                <a href={b.facebook} target="_blank" rel="noreferrer"><Facebook className="w-4 h-4 mr-2" />Facebook</a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

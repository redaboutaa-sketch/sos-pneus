"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Wrench,
  Instagram,
  Facebook,
  MessageCircle,
  Star,
  CheckCircle2,
  ArrowRight,
  Shield,
  Car,
  Gauge,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// --- Helpers
const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-6xl mx-auto px-4">
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white drop-shadow-md">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-3 text-gray-100 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default function Website() {
  // --- Multi-agences (74 / 01)
  const branches = {
    "74": {
      label: "74",
      city: "Annemasse",
      phone: "+33768933342",
      phoneDisplay: "07 68 93 33 42",
      whatsappLink: "https://wa.me/33768933342?text=Bonjour%20SOS%20PNEUS%2074",
      address:
        "8 Imp. du Col de la Faucille, 74100 Vétraz-Monthoux",
      gmaps:
        "https://maps.google.com/?q=SOS%20PNEUS%2074%208%20Imp.%20du%20Col%20de%20la%20Faucille%2C%2074100%20V%C3%A9traz-Monthoux",
      instagram: "https://www.instagram.com/sos_pneus_74/",
      facebook:
        "https://www.facebook.com/p/Sos-Pneus-74-61556794664170/",
    },
    "01": {
      label: "01",
      city: "Cessy",
      phone: "+33608379577",
      phoneDisplay: "06 08 37 95 77",
      whatsappLink: "https://wa.me/33608379577?text=Bonjour%20SOS%20PNEUS%2001",
      address: "204 Rue de la Bergerie, 01170 Cessy",
      gmaps:
        "https://maps.google.com/?q=204%20Rue%20de%20la%20Bergerie%2C%2001170%20Cessy",
      instagram: null,
      facebook:
        "https://www.facebook.com/p/SOS-PNEUS-01-100087050826421/",
    },
  } as const;

  const [current, setCurrent] = React.useState<keyof typeof branches>("74");
  const b = branches[current];

  // --- Données communes
  const services = [
    {
      icon: <Wrench className="w-6 h-6 text-yellow-800" />,
      title: "Dépannage crevaison",
      desc:
        "Intervention rapide sur place : réparation, mèche/pose champignon, roue de secours.",
    },
    {
      icon: <Car className="w-6 h-6 text-yellow-800" />,
      title: "Montage & équilibrage",
      desc:
        "Montage de pneus neufs/occasions, valves, équilibrage précis pour une conduite sûre.",
    },
    {
      icon: <Gauge className="w-6 h-6 text-yellow-800" />,
      title: "Permutation & contrôle",
      desc:
        "Permutation saisonnière, contrôle pression/état, conseils d'usure adaptés à votre véhicule.",
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-800" />,
      title: "Assistance 24h/24",
      desc:
        "Ouvert 7j/7 – nuit & week-ends. Nous venons à vous ou vous accueillons à l'atelier.",
    },
  ];

  const avis = [
    {
      name: "Nathalie",
      text: "Crevaison sur l'A40, intervention en 30 min. Service pro et très sympa !",
      stars: 5,
    },
    {
      name: "Kevin",
      text: "Changement des 4 pneus + équilibrage, nickel. Prix corrects.",
      stars: 5,
    },
    {
      name: "Amine",
      text: "Ouverts 24/24, ils m'ont sauvé la soirée. Je recommande !",
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-700 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-red-900/70 border-b border-red-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo_sos_pneus.jpg" alt="SOS PNEUS" className="h-9 w-auto" />
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-white">
              SOS PNEUS
            </span>
          </a>

          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:opacity-80 text-white">
              Services
            </a>
            <a href="#tarifs" className="hover:opacity-80 text-white">
              Tarifs
            </a>
            <a href="#galerie" className="hover:opacity-80 text-white">
              Galerie
            </a>
            <a href="#contact" className="hover:opacity-80 text-white">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Sélecteur d'agence */}
            <div className="hidden sm:flex items-center rounded-xl border border-red-600 overflow-hidden mr-2">
              {(["74", "01"] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setCurrent(k)}
                  className={`px-3 py-1 text-sm font-semibold transition-colors ${
                    current === k
                      ? "bg-yellow-300 text-red-900"
                      : "bg-transparent text-white hover:bg-red-800"
                  }`}
                >
                  SOS {k}
                </button>
              ))}
            </div>

            <Button asChild className="rounded-2xl bg-yellow-300 text-red-900">
              <a href={`tel:${b.phone}`}>
                <Phone className="mr-2 h-4 w-4" /> Appeler {b.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <Section id="hero">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              Dépannage & pneus <span className="text-yellow-300">24h/24</span> sur {b.city}
            </h1>
            <p className="mt-4 text-lg text-gray-100">
              Crevaison, changement de pneus, équilibrage et assistance rapide. Nous intervenons dans tout le bassin local et à la frontière.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl bg-yellow-300 text-red-900 font-bold">
                <a href={`tel:${b.phone}`}>
                  <Phone className="mr-2 h-4 w-4" /> Urgence : {b.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-yellow-300 text-yellow-300">
                <a href={b.gmaps} target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 h-4 w-4" /> Itinéraire
                </a>
              </Button>
            </div>
          </motion.div>
          {/* Photo camion héro */}
          <div className="relative h-72 md:h-[22rem] rounded-2xl overflow-hidden ring-1 ring-red-600/50">
            <Image src="/images/camion-1.jpg" alt="Camion SOS PNEUS" fill className="object-cover" priority />
          </div>
        </div>
      </Section>


     {/* Services */}
      <Section id="services" title="Nos services" subtitle="Rapidité, sécurité et transparence – votre mobilité est notre priorité.">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <Card key={idx} className="rounded-2xl bg-white border-red-200 text-red-700">
              <CardHeader className="space-y-2">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">{s.icon}</div>
                <CardTitle className="text-xl">{s.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3 justify-center text-white">
          <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Devis immédiat</div>
          <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Déplacement sur place</div>
          <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="w-4 h-4 text-yellow-400" /> Pièces & pneus garantis</div>
        </div>
      </Section>

      {/* Tarifs */}
      <Section
  id="tarifs"
  title="Tarifs indicatifs"
  subtitle="Les prix varient selon le véhicule, la dimension et la zone d'intervention. Contactez-nous pour un devis exact."
>
  <div className="grid lg:grid-cols-3 gap-6">
    {[
      {
        name: "Réparation crevaison",
        price: "20€",
        items: ["Mèche ou champignon", "Contrôle pression", "Équilibrage (option)"],
      },
      {
        name: "Montage pneu (à l'unité)",
        price: "20€",
        items: ["Montage/valve", "Équilibrage"],
      },
      {
        name: "Dépannage 24/24",
        price: "sur devis",
        items: ["Déplacement sur zone", "Diagnostics & solutions", "Remorquage partenaire (si besoin)"],
      },
    ].map((p, i) => (
      <Card key={i} className="rounded-2xl bg-white border-red-200 text-red-900">
        <CardHeader>
          <CardTitle className="flex items-center justify-between text-red-900">
            <span>{p.name}</span>
            <span className="text-yellow-500 font-bold">{p.price}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            {p.items.map((it, j) => (
              <li key={j} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-yellow-500" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
</Section>




 {/* Avis clients */}
      <Section id="avis" title="Avis clients" subtitle="Merci pour votre confiance !">
        <div className="grid md:grid-cols-3 gap-6">
          {avis.map((a, i) => (
            <Card key={i} className="rounded-2xl bg-white border-red-200 text-red-900">
              <CardContent className="pt-6">
                <div className="flex gap-1 text-yellow-500 mb-3">
                  {Array.from({ length: a.stars }).map((_, k) => (
                    <Star key={k} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm mb-3">“{a.text}”</p>
                <div className="text-sm text-gray-00">— {a.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button asChild className="rounded-2xl bg-yellow-400 text-red-900 font-bold">
            <a href={b.gmaps} target="_blank" rel="noreferrer">
             Lire les avis Google
            </a>
          </Button>
        </div>
      </Section>

      {/* Galerie & réseaux */}
      <Section
        id="galerie"
        title="Galerie & réseaux"
        subtitle="Suivez nos interventions en photos/vidéos et sur nos réseaux."
      >
        {/* Mini galerie photos */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden ring-1 ring-red-600/50">
            <Image src="/images/camion-1.jpg" alt="Camion SOS PNEUS 74" fill className="object-cover" />
          </div>
          <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden ring-1 ring-red-600/50">
            <Image src="/images/camion-2.png" alt="Habillage SOS PNEUS 74" fill className="object-cover" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Instagram */}
          <Card className="rounded-2xl bg-red-700 border-red-500 text-red-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-900">
                <Instagram className="w-5 h-5 text-yellow-300" /> Instagram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-100 mb-4">@sos_pneus_74</p>
              <div className="space-y-6">
                {[
                  "https://www.instagram.com/p/C5J7dmft-_0/?igsh=MWlvcmU0NHZrbmF2dQ==",
                  "https://www.instagram.com/p/C5qL_i0I4ql/?img_index=1&igsh=c3FzZHMzbzV4d29u",
                ].map((url, i) => (
                  <blockquote
                    key={i}
                    className="instagram-media"
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ background: "white", borderRadius: 12 }}
                  />
                ))}
                {/* script d'embed Instagram */}
                <script async src="https://www.instagram.com/embed.js"></script>

                <div className="pt-2">
                  <Button
                    asChild
                    className="rounded-2xl bg-yellow-300 text-red-900 font-bold"
                  >
                    <a
                      href={b.instagram ?? "https://www.instagram.com/sos_pneus_74/"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ouvrir Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="rounded-2xl bg-red-700 border-red-500 text-red-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Facebook className="w-5 h-5 text-yellow-300" /> Facebook
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl overflow-hidden border border-red-500">
                <iframe
                  title={`Facebook – SOS Pneus ${b.label}`}
                  className="w-full h-[420px]"
                  style={{ border: 0, overflow: "hidden", background: "white" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media; picture-in-picture; web-share"
                  src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                    b.facebook
                  )}&tabs=timeline&width=500&height=420&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                />
              </div>
              <div className="mt-4">
                <Button
                  asChild
                  className="rounded-2xl bg-yellow-300 text-red-900 font-bold"
                >
                  <a href={b.facebook} target="_blank" rel="noreferrer">
                    Ouvrir Facebook
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Contact & accès */}
      <Section
        id="contact"
        title="Contact & accès"
        subtitle="Appelez-nous 24/7 ou passez à l'atelier."
      >
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl bg-red-700 border-red-500 text-red-900">
            <CardHeader>
              <CardTitle className="text-red-900">Coordonnées</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-300" />
                <a className="underline" href={`tel:${b.phone}`}>
                  {b.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-yellow-300" />
                <a className="underline" href={b.gmaps} target="_blank" rel="noreferrer">
                  {b.address}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-yellow-300" /> Ouvert 24h/24 – 7j/7
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-yellow-300" />
                <a className="underline" href={b.whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-yellow-300" />
                <a className="underline" href={`mailto:contact@sospneus74.fr`}>
                  contact@sospneus74.fr
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl lg:col-span-2 bg-red-700 border-red-500">
            <CardContent className="p-0">
              <iframe
                title={`Localisation SOS PNEUS ${b.label}`}
                className="w-full h-[360px] rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`${b.gmaps}&output=embed`}
              />
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <Button asChild size="lg" className="rounded-2xl bg-yellow-300 text-red-900 font-bold">
            <a href={`tel:${b.phone}`}>
              <Phone className="mr-2 h-4 w-4" />Appeler maintenant
            </a>
          </Button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-red-700 py-10">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="font-bold text-white">SOS PNEUS</div>
            <div className="text-sm text-gray-100">
              Dépannage crevaison • Pneus • Équilibrage
            </div>
          </div>
          <div className="text-sm text-gray-200">
            © {new Date().getFullYear()} — Tous droits réservés.
          </div>
          <div className="flex justify-start md:justify-end gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl bg-yellow-300 text-red-900 font-bold"
            >
              <a
                href={b.instagram ?? "https://www.instagram.com/sos_pneus_74/"}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="w-4 h-4 mr-2" />Instagram
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-2xl bg-yellow-300 text-red-900 font-bold"
            >
              <a href={b.facebook} target="_blank" rel="noreferrer">
                <Facebook className="w-4 h-4 mr-2" />Facebook
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

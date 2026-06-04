"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { MapPin, Clock, Phone, Navigation, Car } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { useTranslation } from "@/i18n/useTranslation";

export function ContactSection() {
  const { t } = useTranslation();

  const infoCards = [
    {
      icon: MapPin,
      title: t.contact.cards.address.title,
      lines: t.contact.cards.address.lines,
      extra: t.contact.cards.address.extra,
      link: { href: "https://maps.google.com/?q=Cervecería+Burgos", text: t.contact.cards.address.link, icon: Navigation },
    },
    {
      icon: Clock,
      title: t.contact.cards.schedule.title,
      lines: t.contact.cards.schedule.lines,
      highlight: t.contact.cards.schedule.highlight,
      extra: t.contact.cards.schedule.extra,
    },
    {
      icon: Phone,
      title: t.contact.cards.phone.title,
      phones: ["+34 625 047 070", "+34 674 482 243"],
    },
  ];

  return (
    <section id="contacto" className="py-24 bg-[#FEF3C7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <motion.span
            className="text-[#99120f] font-medium tracking-wide uppercase text-sm inline-block"
            whileHover={{ scale: 1.05 }}
          >{t.contact.label}</motion.span>
          <motion.h2
            className="mt-3 text-4xl lg:text-5xl font-bold text-[#151418]"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {t.contact.title}
          </motion.h2>
          <p className="mt-4 text-lg text-[#A06029] max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info cards + Map */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {infoCards.map((card) => (
                <motion.div
                  key={card.title}
                  className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#151418]/5 flex items-start gap-4 cursor-default"
                  whileHover={{
                    y: -4,
                    boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                    borderColor: "rgba(153, 18, 15, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="p-3 bg-[#99120f]/10 rounded-lg shrink-0"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <card.icon className="w-6 h-6 text-[#99120f]" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#151418] mb-1">{card.title}</h3>
                    {card.lines?.map((line) => (
                      <p key={line} className="text-[#A06029]">{line}</p>
                    ))}
                    {card.phones?.map((phone) => (
                      <motion.p key={phone} whileHover={{ x: 4 }}>
                        <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-[#A06029] hover:text-[#99120f] transition-colors font-medium">
                          {phone}
                        </a>
                      </motion.p>
                    ))}
                    {card.highlight && (
                      <p className="text-lg font-bold text-[#99120f]">{card.highlight}</p>
                    )}
                    {card.extra && (
                      <p className="text-sm text-[#A06029] mt-2">{card.extra}</p>
                    )}
                    {card.link && (
                      <motion.a
                        href={card.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#99120f] hover:underline"
                        whileHover={{ x: 4 }}
                      >
                        <card.link.icon className="w-4 h-4" />{card.link.text}
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Parking card */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#151418]/5 flex items-start gap-4 cursor-default"
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                  borderColor: "rgba(153, 18, 15, 0.15)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="p-3 bg-[#99120f]/10 rounded-lg shrink-0"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Car className="w-6 h-6 text-[#99120f]" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#151418] mb-1">{t.contact.cards.parking.title}</h3>
                  <p className="text-[#A06029] text-sm">
                    {t.contact.cards.parking.desc.replace("{garage}", "Garaje Quintana")}
                  </p>
                </div>
              </motion.div>

            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-3">
            <motion.div
              className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#151418]/5"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6071.037765998359!2d-3.7477972!3d40.3786239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418828d989354d%3A0x55d490f2d207688!2sCervecer%C3%ADa%20Burgos!5e0!3m2!1ses!2ses!4v1717345678901"
                width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title={t.contact.cards.address.title} className="rounded-xl" />
            </motion.div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

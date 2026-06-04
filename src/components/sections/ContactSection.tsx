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

              {/* Socials inside left column */}
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#99120f] mb-3">{t.contact.socials}</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://instagram.com/cerveceriaburgos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#151418]/5 hover:bg-[#99120f] hover:border-[#99120f] transition-colors group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#151418] group-hover:text-[#FBF5DD]" />
                  </motion.a>
                  <motion.a
                    href="https://facebook.com/cerveceriaburgos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#151418]/5 hover:bg-[#99120f] hover:border-[#99120f] transition-colors group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#151418] group-hover:text-[#FBF5DD]" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/34625047070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#151418]/5 hover:bg-[#99120f] hover:border-[#99120f] transition-colors group"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="WhatsApp"
                  >
                    <svg className="w-4 h-4 text-[#151418] group-hover:text-[#FBF5DD]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1.001-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
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

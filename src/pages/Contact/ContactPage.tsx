import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/pages/Contact/ContactForm";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/Reveal";
import { contactInfo } from "@/data/contactInfo";
import { faqs } from "@/data/faq";
import { usePageMeta } from "@/lib/seo";

const contactChannels = [
  {
    label: "Teléfono",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: contactInfo.whatsapp,
    href: contactInfo.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: contactInfo.emailHref,
    icon: Mail,
  },
  {
    label: "Ubicación",
    value: contactInfo.address,
    href: "https://maps.google.com/?q=Córdoba",
    icon: MapPin,
  },
];

/** Página de contacto (Sprint 5). Ruta /contacto. */
export function ContactPage() {
  usePageMeta(
    "Contacto — NOVA Inmobiliaria",
    "Contactanos por teléfono, WhatsApp o email. Enviá tu consulta y te respondemos a la brevedad. Demo ilustrativa."
  );

  return (
    <div>
      <Section className="bg-muted/30">
        <Reveal>
          <SectionHeading
            eyebrow="Contacto"
            title="Hablemos"
            description="Escribinos un mensaje o contactanos por nuestros canales. Te respondemos a la brevedad para ayudarte a encontrar, vender o alquilar tu propiedad."
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Canales de contacto */}
          <Reveal className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactChannels.map(({ label, value, href, icon: Icon }) => (
                <Card key={label} className="p-5">
                  <CardContent className="flex flex-col p-0">
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                      className="mt-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary p-6 text-primary-foreground">
              <CardContent className="p-0">
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-display text-lg font-medium">Horarios</p>
                    <ul className="mt-2 space-y-1 text-sm text-primary-foreground/85">
                      <li>{contactInfo.schedule.weekdays}</li>
                      <li>{contactInfo.schedule.saturday}</li>
                      <li>{contactInfo.schedule.sunday}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="px-1 text-xs text-muted-foreground">
              Contenido de demo. NOVA es un concepto ilustrativo y no representa
              una inmobiliaria real.
            </p>
          </Reveal>

          {/* Formulario */}
          <Reveal delay={0.05}>
            <Card className="p-6 sm:p-8">
              <CardContent className="p-0">
                <SectionHeading
                  eyebrow="Formulario"
                  title="Enviar una consulta"
                  className="mb-6"
                />
                <ContactForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Dudas frecuentes"
              description="Respuestas a las consultas más habituales sobre NOVA y nuestros servicios. Contenido de demo."
              align="center"
              className="mx-auto max-w-2xl"
            />
          </Reveal>
          <Reveal className="mt-10 rounded-2xl border border-border bg-card px-6 shadow-nova-soft sm:px-8">
            <Accordion type="single" collapsible className="py-2">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
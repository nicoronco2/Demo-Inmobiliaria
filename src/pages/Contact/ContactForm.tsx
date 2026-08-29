import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";

import { FormField } from "@/components/form/FormField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CONTACT_SUBJECTS,
  contactFormSchema,
  type ContactFormValues,
} from "@/validations/contactForm";

/**
 * ContactForm — Formulario de contacto (RHF + Zod).
 * Valida nombre, email, teléfono, asunto y mensaje. En este sprint NO envía
 * a una API: al enviar correctamente muestra un estado visual de éxito.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: CONTACT_SUBJECTS[0],
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    // Simula una espera breve de envío. Sin API/backend en este sprint.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("[demo] Contact form submitted (no API):", values);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-14 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-primary" />
        <h3 className="font-display text-2xl font-medium tracking-tight">
          ¡Consulta enviada!
        </h3>
        <p className="max-w-md text-muted-foreground">
          Gracias por escribirnos. Un asesor de NOVA se va a comunicar con
          vos muy pronto.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Nombre completo"
          htmlFor="contact-name"
          required
          error={errors.name?.message}
        >
          <Input
            id="contact-name"
            placeholder="Tu nombre y apellido"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </FormField>

        <FormField
          label="Email"
          htmlFor="contact-email"
          required
          error={errors.email?.message}
        >
          <Input
            id="contact-email"
            type="email"
            placeholder="tu@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Teléfono"
          htmlFor="contact-phone"
          required
          error={errors.phone?.message}
        >
          <Input
            id="contact-phone"
            type="tel"
            placeholder="+54 351 000 0000"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </FormField>

        <FormField
          label="Motivo de consulta"
          htmlFor="contact-subject"
          required
          error={errors.subject?.message}
        >
          <Select
            id="contact-subject"
            aria-invalid={!!errors.subject}
            {...register("subject")}
          >
            {CONTACT_SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField
        label="Mensaje"
        htmlFor="contact-message"
        required
        error={errors.message?.message}
      >
        <Textarea
          id="contact-message"
          placeholder="Contanos en qué podemos ayudarte…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </FormField>

      <Button
        type="submit"
        variant="brand"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? "Enviando…" : "Enviar consulta"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Los campos marcados con <span className="text-destructive">*</span> son
        obligatorios. Demo sin envío real.
      </p>
    </form>
  );
}
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
  SELLING_PROPERTY_TYPES,
  sellingFormSchema,
  type SellingFormValues,
} from "@/validations/sellingForm";

/**
 * SellingForm — Formulario "Quiero vender mi propiedad" (RHF + Zod).
 * Valida nombre, email, teléfono, tipo de propiedad, zona y mensaje.
 * En este sprint NO envía a una API: muestra un estado visual de éxito.
 */
export function SellingForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SellingFormValues>({
    resolver: zodResolver(sellingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      zone: "",
      message: "",
    },
  });

  async function onSubmit(values: SellingFormValues) {
    // Simula una espera breve. Sin API/backend en este sprint.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("[demo] Selling form submitted (no API):", values);
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
          ¡Solicitud recibida!
        </h3>
        <p className="max-w-md text-muted-foreground">
          Gracias por confiar en NOVA. Un tasador se va a comunicar con vos para
          coordinar la visita y darte una valoración sin compromiso.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            reset();
            setSubmitted(false);
          }}
        >
          Enviar otra solicitud
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Nombre completo"
          htmlFor="sell-name"
          required
          error={errors.name?.message}
        >
          <Input
            id="sell-name"
            placeholder="Tu nombre y apellido"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
        </FormField>

        <FormField
          label="Email"
          htmlFor="sell-email"
          required
          error={errors.email?.message}
        >
          <Input
            id="sell-email"
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
          htmlFor="sell-phone"
          required
          error={errors.phone?.message}
        >
          <Input
            id="sell-phone"
            type="tel"
            placeholder="+54 351 000 0000"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </FormField>

        <FormField
          label="Tipo de propiedad"
          htmlFor="sell-property-type"
          required
          error={errors.propertyType?.message}
        >
          <Select
            id="sell-property-type"
            aria-invalid={!!errors.propertyType}
            {...register("propertyType")}
          >
            <option value="" disabled>
              Seleccioná un tipo
            </option>
            {SELLING_PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      <FormField
        label="Zona / barrio de la propiedad"
        htmlFor="sell-zone"
        required
        error={errors.zone?.message}
      >
        <Input
          id="sell-zone"
          placeholder="Ej.: Nueva Córdoba, Centro, La Country…"
          aria-invalid={!!errors.zone}
          {...register("zone")}
        />
      </FormField>

      <FormField
        label="Mensaje"
        htmlFor="sell-message"
        required
        error={errors.message?.message}
      >
        <Textarea
          id="sell-message"
          placeholder="Contanos detalles de tu propiedad (metros, ambientes, estado…)…"
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
        {isSubmitting ? "Enviando…" : "Solicitar tasación"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Los campos marcados con <span className="text-destructive">*</span> son
        obligatorios. Demo sin envío real.
      </p>
    </form>
  );
}
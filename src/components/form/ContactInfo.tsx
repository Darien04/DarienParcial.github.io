import React from 'react';
import { FormField } from './FormField';

interface ContactInfoProps {
  values: {
    email: string;
    phone: string;
    cellPhone: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: { [key: string]: string };
}

export function ContactInfo({ values, onChange, errors }: ContactInfoProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Información de Contacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Correo Electrónico"
          name="email"
          type="email"
          value={values.email}
          onChange={onChange}
          required
          placeholder="juan.perez@ejemplo.com"
          hint="Este será su principal medio de contacto"
          error={errors.email}
        />
        <FormField
          label="Teléfono Fijo"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={onChange}
          placeholder="6017654321"
          pattern="[0-9]+"
          title="Solo se permiten números"
          hint="Opcional - Sin indicativo"
        />
        <FormField
          label="Teléfono Celular"
          name="cellPhone"
          type="tel"
          value={values.cellPhone}
          onChange={onChange}
          required
          placeholder="3001234567"
          pattern="[0-9]+"
          title="Solo se permiten números"
          hint="10 dígitos, sin espacios ni guiones"
          error={errors.cellPhone}
        />
      </div>
    </section>
  );
}
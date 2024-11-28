import React from 'react';
import { FormField } from './FormField';

interface PersonalInfoProps {
  values: {
    firstName: string;
    middleName: string;
    firstLastName: string;
    secondLastName: string;
    dateOfBirth: string;
    idType: string;
    idNumber: string;
    biologicalSex: string;
    maritalStatus: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  errors: { [key: string]: string };
}

export function PersonalInfo({ values, onChange, errors }: PersonalInfoProps) {
  const idTypes = ['Cédula de Ciudadanía', 'Tarjeta de Identidad', 'Pasaporte', 'Cédula de Extranjería'];
  const sexOptions = ['Masculino', 'Femenino', 'Otro'];
  const maritalStatusOptions = ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión Libre'];

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Información Personal</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Primer Nombre"
          name="firstName"
          value={values.firstName}
          onChange={onChange}
          required
          placeholder="Juan"
          maxLength={50}
          hint="Ingrese su primer nombre como aparece en su documento de identidad"
          error={errors.firstName}
        />
        <FormField
          label="Segundo Nombre"
          name="middleName"
          value={values.middleName}
          onChange={onChange}
          placeholder="Antonio"
          maxLength={50}
          hint="Si tiene segundo nombre, ingréselo como aparece en su documento"
        />
        <FormField
          label="Primer Apellido"
          name="firstLastName"
          value={values.firstLastName}
          onChange={onChange}
          required
          placeholder="Pérez"
          maxLength={50}
          error={errors.firstLastName}
        />
        <FormField
          label="Segundo Apellido"
          name="secondLastName"
          value={values.secondLastName}
          onChange={onChange}
          placeholder="García"
          maxLength={50}
        />
        <FormField
          label="Fecha de Nacimiento"
          name="dateOfBirth"
          type="date"
          value={values.dateOfBirth}
          onChange={onChange}
          required
          max={new Date().toISOString().split('T')[0]}
          hint="Debe ser mayor de edad para registrarse"
          error={errors.dateOfBirth}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tipo de Documento <span className="text-red-500">*</span>
          </label>
          <select
            name="idType"
            value={values.idType}
            onChange={onChange}
            required
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.idType ? 'border-red-500' : ''
            }`}
          >
            <option value="">Seleccione tipo de documento</option>
            {idTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.idType && (
            <p className="mt-1 text-sm text-red-600">{errors.idType}</p>
          )}
        </div>
        <FormField
          label="Número de Documento"
          name="idNumber"
          value={values.idNumber}
          onChange={onChange}
          required
          placeholder="1234567890"
          pattern="[0-9]+"
          title="Solo se permiten números"
          hint="Ingrese solo números, sin puntos ni guiones"
          error={errors.idNumber}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sexo Biológico <span className="text-red-500">*</span>
          </label>
          <select
            name="biologicalSex"
            value={values.biologicalSex}
            onChange={onChange}
            required
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.biologicalSex ? 'border-red-500' : ''
            }`}
          >
            <option value="">Seleccione su sexo biológico</option>
            {sexOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.biologicalSex && (
            <p className="mt-1 text-sm text-red-600">{errors.biologicalSex}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado Civil <span className="text-red-500">*</span>
          </label>
          <select
            name="maritalStatus"
            value={values.maritalStatus}
            onChange={onChange}
            required
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
              errors.maritalStatus ? 'border-red-500' : ''
            }`}
          >
            <option value="">Seleccione su estado civil</option>
            {maritalStatusOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.maritalStatus && (
            <p className="mt-1 text-sm text-red-600">{errors.maritalStatus}</p>
          )}
        </div>
      </div>
    </section>
  );
}
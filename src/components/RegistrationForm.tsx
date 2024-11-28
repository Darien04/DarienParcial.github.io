import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PersonalInfo } from './form/PersonalInfo';
import { ContactInfo } from './form/ContactInfo';
import { SurveyQuestions } from './form/SurveyQuestions';
import type { FormData } from '../types';

interface RegistrationFormProps {
  onSubmit: (data: FormData) => void;
  onBack: () => void;
  selectedCareer: string;
}

export default function RegistrationForm({ onSubmit, onBack, selectedCareer }: RegistrationFormProps) {
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    middleName: '',
    firstLastName: '',
    secondLastName: '',
    dateOfBirth: '',
    idType: '',
    idNumber: '',
    biologicalSex: '',
    maritalStatus: '',
    email: '',
    phone: '',
    cellPhone: '',
    children: 'none',
    population: 'none',
    disability: 'none',
    otherDisability: '',
    workStatus: 'not-working',
    selectedCareer,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    // Validación de campos requeridos
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El primer nombre es obligatorio';
    }
    if (!formData.firstLastName.trim()) {
      newErrors.firstLastName = 'El primer apellido es obligatorio';
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'La fecha de nacimiento es obligatoria';
    }
    if (!formData.idType) {
      newErrors.idType = 'El tipo de documento es obligatorio';
    }
    if (!formData.idNumber.trim()) {
      newErrors.idNumber = 'El número de documento es obligatorio';
    }
    if (!formData.biologicalSex) {
      newErrors.biologicalSex = 'El sexo biológico es obligatorio';
    }
    if (!formData.maritalStatus) {
      newErrors.maritalStatus = 'El estado civil es obligatorio';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }
    if (!formData.cellPhone.trim()) {
      newErrors.cellPhone = 'El teléfono celular es obligatorio';
    } else if (!/^[0-9]{10}$/.test(formData.cellPhone)) {
      newErrors.cellPhone = 'El teléfono celular debe tener 10 dígitos';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    } else {
      // Desplazar al primer error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementsByName(firstErrorField)[0];
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <button
          onClick={onBack}
          className="flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a Selección de Carrera
        </button>

        <form onSubmit={handleSubmit} className="space-y-8">
          <PersonalInfo 
            values={formData} 
            onChange={handleInputChange}
            errors={errors}
          />
          <ContactInfo 
            values={formData} 
            onChange={handleInputChange}
            errors={errors}
          />
          <SurveyQuestions values={formData} onChange={handleInputChange} />

          {Object.keys(errors).length > 0 && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Por favor corrija los siguientes errores:</strong>
              <ul className="mt-2 list-disc list-inside">
                {Object.values(errors).map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar Registro
          </button>
        </form>
      </div>
    </div>
  );
}
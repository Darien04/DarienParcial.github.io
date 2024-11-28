import React, { useState } from 'react';
import CareerSelection from './components/CareerSelection';
import RegistrationForm from './components/RegistrationForm';
import type { Career, FormData } from './types';

const AVAILABLE_CAREERS: Career[] = [
  {
    id: 'administracion',
    name: 'Administración de Empresas',
    description: 'Forma profesionales en gestión y dirección empresarial',
  },
  {
    id: 'bacteriologia',
    name: 'Bacteriología',
    description: 'Especialización en el estudio de microorganismos',
  },
  {
    id: 'contaduria',
    name: 'Contaduría Pública',
    description: 'Formación en contabilidad y finanzas empresariales',
  },
  {
    id: 'derecho',
    name: 'Derecho',
    description: 'Estudios en ciencias jurídicas y legislación',
  },
  {
    id: 'enfermeria',
    name: 'Enfermería',
    description: 'Atención y cuidado integral de la salud',
  },
  {
    id: 'sistemas',
    name: 'Ingeniería de Sistemas',
    description: 'Desarrollo de soluciones tecnológicas y software',
  },
  {
    id: 'instrumentacion',
    name: 'Instrumentación Quirúrgica',
    description: 'Asistencia especializada en procedimientos quirúrgicos',
  },
  {
    id: 'educacion',
    name: 'Licenciatura en Educación Infantil',
    description: 'Formación de educadores para primera infancia',
  },
  {
    id: 'medicina',
    name: 'Medicina',
    description: 'Formación integral en ciencias de la salud',
  },
  {
    id: 'odontologia',
    name: 'Odontología',
    description: 'Especialización en salud oral y dental',
  },
  {
    id: 'prehospitalaria',
    name: 'Tecnología en Atención Prehospitalaria',
    description: 'Atención de emergencias médicas',
  },
  {
    id: 'estetica',
    name: 'Tecnología en Estética y Cosmetología',
    description: 'Cuidado estético y belleza integral',
  },
  {
    id: 'mecanica-dental',
    name: 'Tecnología en Mecánica Dental',
    description: 'Especialización en prótesis y aparatos dentales',
  },
  {
    id: 'trabajo-social',
    name: 'Trabajo Social',
    description: 'Intervención y desarrollo social comunitario',
  },
];

function App() {
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);

  const handleCareerSelect = (careerId: string) => {
    setSelectedCareer(careerId);
  };

  const handleFormSubmit = (data: FormData) => {
    console.log('Formulario enviado:', data);
    // Manejar el envío del formulario
  };

  const handleBack = () => {
    setSelectedCareer(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {selectedCareer ? (
        <RegistrationForm
          onSubmit={handleFormSubmit}
          onBack={handleBack}
          selectedCareer={selectedCareer}
        />
      ) : (
        <CareerSelection careers={AVAILABLE_CAREERS} onSelect={handleCareerSelect} />
      )}
    </div>
  );
}

export default App;
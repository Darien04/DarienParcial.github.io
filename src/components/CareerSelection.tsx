import React from 'react';
import { GraduationCap } from 'lucide-react';
import type { Career } from '../types';

interface CareerSelectionProps {
  careers: Career[];
  onSelect: (careerId: string) => void;
}

export default function CareerSelection({ careers, onSelect }: CareerSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GraduationCap className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido al Registro Universitario</h1>
          <p className="text-xl text-gray-600">¿Qué carrera te gustaría estudiar?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careers.map((career) => (
            <button
              key={career.id}
              onClick={() => onSelect(career.id)}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-left group"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
                {career.name}
              </h3>
              <p className="text-gray-600">{career.description}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
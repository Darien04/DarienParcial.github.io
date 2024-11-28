import React from 'react';

interface SurveyQuestionsProps {
  values: {
    children: string;
    population: string;
    disability: string;
    otherDisability: string;
    workStatus: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function SurveyQuestions({ values, onChange }: SurveyQuestionsProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Información Adicional</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            ¿Tiene hijos?
          </label>
          <select
            name="children"
            value={values.children}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="none">Ninguno</option>
            <option value="1">1 hijo</option>
            <option value="2">2 hijos</option>
            <option value="3">3 hijos</option>
            <option value="4+">Más de 4 hijos</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ¿Se reconoce como parte de alguna de las siguientes poblaciones?
          </label>
          <select
            name="population"
            value={values.population}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="none">Ninguna</option>
            <option value="indigenous">Indígena</option>
            <option value="afro-colombian">Afro-colombiano</option>
            <option value="raizal">Raizal</option>
            <option value="rom">Pueblo Rom o Gitano</option>
          </select>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            ¿Tiene alguna discapacidad?
          </label>
          <select
            name="disability"
            value={values.disability}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="none">Ninguna</option>
            <option value="motor">Discapacidad motora</option>
            <option value="deaf">Discapacidad auditiva</option>
            <option value="cognitive">Discapacidad cognitiva</option>
            <option value="deaf-blind">Sordoceguera</option>
            <option value="voice-speech">Trastorno de voz y habla</option>
            <option value="other">Otra</option>
          </select>
          
          {values.disability === 'other' && (
            <input
              type="text"
              name="otherDisability"
              value={values.otherDisability}
              onChange={onChange}
              placeholder="Por favor, especifique su discapacidad"
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ¿Actualmente está trabajando?
          </label>
          <select
            name="workStatus"
            value={values.workStatus}
            onChange={onChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="not-working">No estoy trabajando</option>
            <option value="employed">Sí, empleado</option>
            <option value="self-employed">Sí, trabajo independiente</option>
          </select>
        </div>
      </div>
    </section>
  );
}
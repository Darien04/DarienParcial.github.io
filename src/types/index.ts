export type Career = {
  id: string;
  name: string;
  description: string;
};

export type FormData = {
  firstName: string;
  middleName: string;
  firstLastName: string;
  secondLastName: string;
  dateOfBirth: string;
  idType: string;
  idNumber: string;
  biologicalSex: string;
  maritalStatus: string;
  email: string;
  phone: string;
  cellPhone: string;
  // Campos de encuesta
  children: string;
  population: string;
  disability: string;
  otherDisability?: string;
  workStatus: string;
  selectedCareer: string;
};
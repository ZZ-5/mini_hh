export type VacancyState = {
  vacancy?: Vacancy;
  isVacancyLoading: boolean;
};

export type Vacancy = {
  accept_handicapped: boolean;
  accept_incomplete_resumes: boolean;
  accept_kids: boolean;
  accept_temporary: boolean;
  address: Adress;
  allow_messages: boolean;
  alternate_url: string;
  apply_alternate_url: string;
  archived: boolean;
  area: Area;
  billing_type: BillingType;
  branded_description: string;
  branded_template: BrandedTemplate;
  can_upgrade_billing_type: boolean;
  code: string;
  contacts: Contacts;
  created_at: string;
  department: Department;
  description: string;
  driver_license_types: DriverLicenseTypes[];
  employer: Employer;
  employment: Employment;
  experience: Experience;
  expires_at: string;
  has_test: boolean;
  hidden: boolean;
  id: string;
  initial_created_at: string;
  insider_interview: InsiderInterview;
  key_skills: KeySkills[];
  languages: Languages[];
  manager: Manager;
  name: string;
  premium: boolean;
  previous_id: string;
  professional_roles: ProfessionalRoles[];
  published_at: string;
  response_letter_required: boolean;
  response_notifications: boolean;
  response_url: null;
  salary: Salary;
  schedule: Schedule;
  test: Test;
  type: Type;
  video_vacancy: VideoVacancy;
  working_days: WorkingDays[];
  working_time_intervals: WorkingTimeIntervals[];
  working_time_modes: WorkingTimeModes[];
};

export type Adress = {
  building: string;
  city: string;
  description: string;
  lat: number;
  lng: number;
  metro_stations: AdressMetroStation[];
  raw: string;
  street: string;
};

export type AdressMetroStation = {
  lat: number;
  line_id: string;
  line_name: string;
  lng: number;
  station_id: string;
  station_name: string;
};

export type Area = {
  id: string;
  name: string;
  url: string;
};

export type BillingType = {
  id: string;
  name: string;
};

export type BrandedTemplate = {
  id: string;
  name: string;
};

export type Contacts = {
  email: string;
  name: string;
  phones: ContactsPhone[];
};

export type ContactsPhone = {
  city: string;
  comment: null;
  country: string;
  number: string;
};

export type Department = {
  id: string;
  name: string;
};

export type DriverLicenseTypes = {
  id: string;
};

export type Employer = {
  alternate_url: string;
  blacklisted: boolean;
  id: string;
  logo_urls: EmployerLogoUrls;
  name: string;
  trusted: boolean;
  url: string;
};

export type EmployerLogoUrls = {
  90: string;
  240: string;
  original: string;
};

export type Employment = {
  id: string;
  name: string;
};

export type Experience = {
  id: string;
  name: string;
};

export type InsiderInterview = {
  id: string;
  url: string;
};

export type KeySkills = {
  name: string;
};

export type Languages = {
  id: string;
  level: LanguagesLevel;
  name: string;
};

export type LanguagesLevel = {
  id: string;
  name: string;
};

export type Manager = {
  id: string;
};

export type ProfessionalRoles = {
  id: string;
  name: string;
};

export type Salary = {
  currency: string;
  from: number;
  gross: boolean;
  to: null;
};

export type Schedule = {
  id: string;
  name: string;
};

export type Test = {
  required: boolean;
};

export type Type = {
  id: string;
  name: string;
};

export type VideoVacancy = {
  cover_picture: VideoVacancyCoverPicture;
  video_url: string;
};

export type VideoVacancyCoverPicture = {
  resized_height: number;
  resized_path: string;
  resized_width: number;
};

export type WorkingDays = {
  id: string;
  name: string;
};

export type WorkingTimeIntervals = {
  id: string;
  name: string;
};

export type WorkingTimeModes = {
  id: string;
  name: string;
};

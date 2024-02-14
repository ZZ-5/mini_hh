export type CardsState = {
  vacanciesCards: VacanciesCards | undefined;
  isVacanciesLoading: boolean;
  params: CardsStateParams;
};

export type CardsStateParams = Record<string, string> | URLSearchParams | undefined;

export type FavoritesCardsState = {
  favoritesCards: VacancyCard[];
  isFavoritesCards: boolean;
};

export type VacanciesCards = {
  alternate_url: string;
  arguments: Arguments[] | null;
  clusters: any[] | null;
  fixes: any[] | null;
  found: number;
  items: VacancyCard[];
  page: number;
  pages: number;
  per_page: number;
  suggests: any[] | null;
};

export type VacancyCard = {
  id: string;
  premium: boolean;
  name: string;
  department: string | null;
  has_test: boolean;
  response_letter_required: boolean;
  area: VacancyCardArea;
  salary: VacancyCardSalary;
  type: VacancyCardType;
  address: VacancyCardAddress | null;
  response_url: string | null;
  sort_point_distance: string | null;
  published_at: Date;
  created_at: Date;
  archived: boolean;
  apply_alternate_url: string;
  branding: VacancyCardBranding;
  show_logo_in_search: boolean;
  insider_interview: string | null;
  url: string;
  alternate_url: string;
  relations: string[];
  employer: VacancyCardEmployer;
  snippet: VacancyCardSnippet;
  contacts: string | null;
  schedule: VacancySchedule;
  working_days: string[];
  working_time_intervals: string[];
  working_time_modes: string[];
  accept_temporary: boolean;
  professional_roles: VacancyProfessionalRoles;
  accept_incomplete_resumes: boolean;
  experience: VacancyExperience;
  employment: VacancyEmployment;
  adv_response_url: string | null;
  is_adv_vacancy: boolean;
  adv_context: string | null;
};

export type VacancyCardAddress = {
  building: number;
  city: string;
  description: string | null;
  id: string;
  lat: number | null;
  lng: number | null;
  metro: VacancyCardMetro | null;
  metro_stations: VacancyCardMetro[] | null;
  street: string | null;
  raw: string | null;
};

export type VacancyCardMetro = {
  lat: number;
  line_id: string;
  line_name: string;
  lng: number;
  station_id: string;
  station_name: string;
};

export type VacancyCardArea = {
  id: string;
  name: string;
  url: string;
};

export type VacancyCardSalary = {
  from: number;
  to: number;
  currency: string;
  gross: boolean;
};

export type VacancyCardType = {
  id: string;
  name: string;
};

export type VacancyCardBranding = {
  type: string;
  tariff: string | null;
};

export type VacancyCardEmployer = {
  id: string;
  name: string;
  url: string;
  alternate_url: string;
  logo_urls: VacancyCardEmployerLogoUrls | null;
  vacancies_url: string;
  accredited_it_employer: boolean;
  trusted: boolean;
};

export type VacancyCardEmployerLogoUrls = {
  90: string;
  240: string;
  original: string;
};

export type VacancyCardSnippet = {
  requirement: string;
  responsibility: string;
};

export type VacancySchedule = {
  id: string;
  name: string;
};

export type VacancyProfessionalRoles = {
  id: string;
  name: string;
};

export type VacancyExperience = {
  id: string;
  name: string;
};

export type VacancyEmployment = {
  id: string;
  name: string;
};

export type FiltersDictionaries = {
  experience: FilterExperience[];
  employment: FilterEmployment[];
  schedule: FilterSchedule[];
};

export type FilterExperience = {
  id: string;
  name: string;
};

export type FilterEmployment = {
  id: string;
  name: string;
};

export type FilterSchedule = {
  id: string;
  name: string;
};

export type Arguments = {
  argument: string;
  cluster_group: FilterClusterGroup;
  disable_url: string;
  value: string;
  value_description: string;
};

export type FilterClusterGroup = {
  id: string;
  name: string;
};

export type Schedule = {
  schedule: string;
};

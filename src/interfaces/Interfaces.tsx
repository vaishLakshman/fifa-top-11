export interface Welcome {
  name: string;
  countryCode: string;
  countryLogo: CountryLogo;
  playerImage: CountryLogo;
  id: number;
}

export interface CountryLogo {
  metadata: Metadata;
  sys: CountryLogoSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface CountryLogoSys {
  space: Environment;
  type: string;
  id: string;
  revision: number;
  createdAt: Date;
  updatedAt: Date;
  environment: Environment;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}

export interface SampleContentType {
  name: string;
  fields: FieldsOfContentType[];
}

export interface FieldsOfContentType {
  id: number;
  name: string;
  age: number;
  gender: string;
  required: boolean;
  localized: boolean;
}

export type KeyValueMap = Record<string, any>;

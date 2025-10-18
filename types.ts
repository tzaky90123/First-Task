
export enum Language {
  FR = 'fr',
  EN = 'en',
}

export interface LocalizedContent {
  [key: string]: {
    [lang in Language]: string;
  };
}

export interface NavLink {
  label: string;
  path: string;
}
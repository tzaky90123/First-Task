
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
  label: keyof LocalizedContent;
  path: string;
}

declare module "*.png" {
  const value: string;
  export default value;
}
declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}
declare module "*.svg" {
  const value: string;
  export default value;
}

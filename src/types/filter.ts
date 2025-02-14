export type ViewType = "main" | "products" | "occasions" | "recipients";

export interface Occasion {
  id: number;
  title: string;
  link: string;
}
export interface Products {
  id: number;
  title: string;
  link: string;
}

export interface Recipient {
  id: number;
  title: string;
  link: string;
}

export interface PriceRange {
  label: string;
  value: string;
}

export interface CustomPriceRange {
  low: string;
  high: string;
}

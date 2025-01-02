export interface TeamMember {
  name: string;
  role: string;
  education: string;
  image: string;
  bio: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  technicalSpecs?: Record<string, string>;
  applications?: string[];
  documentation?: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  date: string;
  journal: string;
  link: string;
}

export interface ProductEnquiry {
  name: string;
  email: string;
  company: string;
  product: string;
  message: string;
}
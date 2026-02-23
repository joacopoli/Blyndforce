
export interface PricingPlan {
  name: string;
  category: string; // New field for the eyebrow tag
  setup: string;
  monthly: string;
  tokenEstimate: string;
  tokenCost: string;
  features: string[];
  highlight?: boolean;
  savings?: string;
}

export interface Capability {
  title: string;
  description: string;
  detailTitle?: string;
  detailBody?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
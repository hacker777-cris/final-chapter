export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface Milestone {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface FuturePlan {
  id: string;
  title: string;
  description: string;
  image: string;
  isUnlocked: boolean;
}
export interface Domain {
  id: string;
  title: string;
  icon: string;
  description: string;
  detailedDescription: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  outcome: string;
}

export interface CouncilMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedin?: string;
  github?: string;
}

export interface Stat {
  label: string;
  value: string;
}

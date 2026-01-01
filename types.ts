export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  category: 'clinic' | 'hospital' | 'procedure' | 'award';
}

export interface StatData {
  name: string;
  value: number;
}

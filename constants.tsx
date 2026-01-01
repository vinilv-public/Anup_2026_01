import { TimelineItem, Testimonial, Service, GalleryItem, StatData } from './types';

export const DOCTOR_NAME = "Dr. Anup Purandare";
export const SPECIALTY = "Senior Neurosurgeon, MD";
export const HOSPITAL = "Bharati Hospital, Pune";
export const HOSPITAL_ADDRESS = "Pune - Satara Rd, Dhankawadi, Pune, Maharashtra 411043";
export const CONTACT_PHONE = "+91 20 1234 5678";
export const CONTACT_EMAIL = "contact@anuppurandare-neuro.com";
export const LOCATION_MAP_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576169904636!2d73.8504!3d18.4575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac854303867%3A0x2a00778401306509!2sBharati%20Vidyapeeth%20Medical%20College%20and%20Hospital!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin";

export const EXPERIENCE: TimelineItem[] = [
  {
    year: "2018 - Present",
    title: "Senior Consultant Neurosurgeon",
    institution: "Bharati Hospital, Pune",
    description: "Leading the Department of Neurosurgery, specializing in minimally invasive spine surgeries and complex brain tumor resections."
  },
  {
    year: "2013 - 2018",
    title: "Consultant Neurosurgeon",
    institution: "Ruby Hall Clinic, Pune",
    description: "Performed over 500 successful spinal procedures and established the stroke intervention protocol."
  },
  {
    year: "2010 - 2013",
    title: "Senior Resident",
    institution: "AIIMS, New Delhi",
    description: "Specialized training in pediatric neurosurgery and neuro-trauma."
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    year: "2010",
    title: "MCh (Neurosurgery)",
    institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
    description: "Gold Medalist"
  },
  {
    year: "2006",
    title: "MS (General Surgery)",
    institution: "Seth G.S. Medical College & KEM Hospital, Mumbai",
  },
  {
    year: "2002",
    title: "MBBS",
    institution: "B.J. Medical College, Pune",
  }
];

export const SERVICES: Service[] = [
  {
    title: "Brain Tumor Surgery",
    description: "Advanced microsurgical techniques for benign and malignant brain tumors, ensuring maximal preservation of function.",
    iconName: "Brain"
  },
  {
    title: "Minimally Invasive Spine Surgery",
    description: "Keyhole surgery for herniated discs, spinal stenosis, and spondylolisthesis allowing for faster recovery.",
    iconName: "Activity"
  },
  {
    title: "Pediatric Neurosurgery",
    description: "Specialized care for congenital disorders like hydrocephalus and spina bifida in children.",
    iconName: "Baby"
  },
  {
    title: "Neuro-Trauma Care",
    description: "24/7 emergency management for traumatic brain injuries and spinal cord injuries.",
    iconName: "Ambulance"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh K.",
    location: "Pune",
    text: "Dr. Purandare gave my father a second life. The spine surgery was successful, and he was walking within 2 days. Forever grateful.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya M.",
    location: "Mumbai",
    text: "Excellent diagnosis and very calm demeanor. He explained the entire brain tumor procedure to us in simple terms.",
    rating: 5
  },
  {
    id: 3,
    name: "Amitabh S.",
    location: "Nashik",
    text: "Best neurosurgeon in Pune. The facility at Bharati Hospital is also top-notch.",
    rating: 5
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, url: "https://picsum.photos/800/600?random=1", caption: "Advanced OT Setup", category: "hospital" },
  { id: 2, url: "https://picsum.photos/800/600?random=2", caption: "Consultation Cabin", category: "clinic" },
  { id: 3, url: "https://picsum.photos/800/600?random=3", caption: "Award Ceremony 2023", category: "award" },
  { id: 4, url: "https://picsum.photos/800/600?random=4", caption: "Bharati Hospital Facade", category: "hospital" },
  { id: 5, url: "https://picsum.photos/800/600?random=5", caption: "Patient Recovery Lounge", category: "clinic" },
  { id: 6, url: "https://picsum.photos/800/600?random=6", caption: "International Neurology Conference", category: "award" },
];

export const STATS_DATA: StatData[] = [
  { name: '2019', value: 120 },
  { name: '2020', value: 150 },
  { name: '2021', value: 180 },
  { name: '2022', value: 240 },
  { name: '2023', value: 310 },
  { name: '2024', value: 350 },
];
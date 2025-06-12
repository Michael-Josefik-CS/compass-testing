import { BaseEntry } from '@contentstack/delivery-sdk';


// CONTENTSTACK ENTRY TYPES

export interface Experience extends BaseEntry {
	uid: string;
	slug: string;
	title: string;
	short_description: string;
	description: string;
	destination?: Destination[]; // ← THIS FIXES THE ERROR
	hero_image?: {
	url: string;
	};
	gallery?: {
	url: string;
	}[];
}

export interface Homepage extends BaseEntry {
  title: string;
  subhead: string;
  hero_image: { url: string };
  top_experiences: Experience[];
}

export interface Destination extends BaseEntry {
  title: string;
  description: string;
  slug: string;
  hero_image?: {
	url: string; // Assuming `hero_image` is a media field
  };
  region?: {
	title: string;
	slug: string;
  };
}




// COMPONENT TYPES
export interface CardProps {
	key?: string;
	title: string;
	subtitle?: string;
	description: string;
	image?: string;
	priority?: boolean; // NEW
}
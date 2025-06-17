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
  showcase: ShowcaseProps[];
}

export interface Destination extends BaseEntry {
  title: string;
  intro_blurb: string;
  slug: string;
  hero_image?: {
	url: string; // Assuming `hero_image` is a media field
  };
  region?: [{
	title: string;
	slug: string;
  }];
}




// COMPONENT TYPES
export interface CardProps {
	uid?: string;
	title: string;
	subtitle?: string;
	description: string;
	image?: string;
	priority?: boolean; // NEW
}

export interface ShowcaseProps {
  split?: boolean; // Optional prop to indicate if the layout is split
  bgBranded?: boolean; // Optional prop to apply brand styles
  image?: string; // Optional prop for background image
  headline?: string; // Optional prop for headline text
  subhead?: string; // Optional prop for subheadline text
  copy?: string; // Optional prop for additional copy text
  buttonContent?: { label: string; url: string }[];
  height?: string; // Optional prop for height override
  flip?: boolean; // Optional prop to flip the layout order
  bgColor?: 'branded' | 'primary' | 'secondary'; // Optional prop for background color
}
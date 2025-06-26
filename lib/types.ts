import { BaseEntry } from '@contentstack/delivery-sdk';
import typography from '../styles/tokens/typography.module.css';
import surface from '../styles/tokens/surface.module.css';


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
  backgroundvideo?: {
    url: string;
    type?: string;
  };
  top_experiences: Experience[];
  showcase: ShowcaseEntry[];
}

export interface Destination extends BaseEntry {
  title: string;
  intro_blurb: string;
  slug: string;
  url: string; // Assuming `url` is a field for the destination URL
  hero_image?: {
    url: string; // Assuming `hero_image` is a media field
  };
  region?: [{
    title: string;
    slug: string;
  }];
  advisors?: Advisor[];
}

export interface Advisor extends BaseEntry {
  title: string;
  slug: string;
}

export interface ShowcaseEntry extends BaseEntry {
	headline?: string;
	subhead?: string;
	copy?: string;
	image?: { url: string };
	split?: boolean;
	flip_content_and_image?: boolean;
	buttons?: {
		button_1?: {
			label?: string;
			url?: {
				href: string;
			};
		};
	}[];
}



// COLOR TOKENS
export type TextColorTokens =
  | 'primary'
  | 'secondary'
  | 'disabled'
  | 'inversePrimary'
  | 'inverseSecondary'
  | 'inverseDisabled'
  | 'onDarkPrimary'
  | 'onDarkSecondary'
  | 'onDarkDisabled'
  | 'onLightPrimary'
  | 'onLightSecondary'
  | 'onLightDisabled'
  | 'actionPrimary'
  | 'actionHover'
  | 'actionActive'

export const colorClassMap: Record<TextColorTokens, string> = {
    primary: typography.textDefaultPrimary,
    secondary: typography.textDefaultSecondary,
    disabled: typography.textDefaultDisabled,
    inversePrimary: typography.textInversePrimary,
    inverseSecondary: typography.textInverseSecondary,
    inverseDisabled: typography.textInverseDisabled,
    onDarkPrimary: typography.textOnDarkPrimary,
    onDarkSecondary: typography.textOnDarkSecondary,
    onDarkDisabled: typography.textOnDarkDisabled,
    onLightPrimary: typography.textOnLightPrimary,
    onLightSecondary: typography.textOnLightSecondary,
    onLightDisabled: typography.textOnLightDisabled,
    actionPrimary: typography.textActionPrimary,
    actionHover: typography.textActionHover,
    actionActive: typography.textActionActive,
};


export type SurfaceColorTokens =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'inversePrimary'
  | 'inverseSecondary'
  | 'inverseTertiary'
  | 'brandPrimary'
  | 'brandSecondary'

export const getSurfaceColor: Record<SurfaceColorTokens, string> = {
    primary: surface.surfaceDefaultPrimary,
    secondary: surface.surfaceDefaultSecondary,
    tertiary: surface.surfaceDefaultTertiary,
    inversePrimary: surface.surfaceInversePrimary,
    inverseSecondary: surface.surfaceInverseSecondary,
    inverseTertiary: surface.surfaceInverseTerinverseTertiary,
    brandPrimary: surface.surfaceBrandPrimary,
    brandSecondary: surface.surfaceBrandSecondary,
};


// ATOM TYPES
export interface ImageObject {
	url: string;
	alt?: string;
}

export interface BackgroundVideo {
	src: string;
	type?: string;
	poster?: string;
}

// COMPONENT TYPES
export interface CardProps {
  uid?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: ImageObject;
  priority?: boolean;
  slug?: string;
  contentType?: 'destination' | 'experience' | 'advisor'; // NEW
}

export interface ShowcaseProps {
  split?: boolean; // Optional prop to indicate if the layout is split
  image?: string; // Optional prop for background image
  headline?: string; // Optional prop for headline text
  subhead?: string; // Optional prop for subheadline text
  copy?: string; // Optional prop for additional copy text
  buttonContent?: { label: string; url: string }[];
  height?: string; // Optional prop for height override
  flip?: boolean; // Optional prop to flip the layout order
  bgColor?: 'branded' | 'primary' | 'secondary'; // Optional prop for background color
}
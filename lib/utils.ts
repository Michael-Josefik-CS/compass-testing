import type { CardProps, Experience, Destination, ShowcaseEntry } from './types';
import type { ShowcaseProps } from './types';

export function mapExperiencesToCards(experiences: Experience[]): CardProps[] {
	return experiences.map((exp) => ({
		uid: exp.uid,
		title: exp.title,
		subtitle: exp.destination?.[0]?.title ?? '',
		description: exp.short_description ?? '',
		image: exp.hero_image ? { url: exp.hero_image.url, alt: exp.title } : undefined,
		slug: exp.slug,
		contentType: 'experience',
	}));
}

export function mapDestinationsToCards(destinations: Destination[]): CardProps[] {
	return destinations.map((des) => ({
		uid: des.uid,
		title: des.title,
		subtitle: des.region?.[0]?.title ?? '',
		description: des.intro_blurb,
		image: des.hero_image ? { url: des.hero_image.url, alt: des.title } : undefined,
		slug: des.slug,
		contentType: 'destination',
	}));
}

export function mapShowcaseToShowcase(showcaseEntries: ShowcaseEntry[]): ShowcaseProps[] {
	return showcaseEntries.map((entry) => {
		const buttons = entry.buttons?.map((btn: {
			button_1?: {
				label?: string;
				url?: {
					href: string;
				};
			};
		}) => ({
			label: btn.button_1?.label ?? '',
			url: btn.button_1?.url?.href ?? '#',
		})) ?? [];

		return {
			headline: entry.headline ?? '',
			subhead: entry.subhead ?? '',
			copy: entry.copy ?? '',
			image: entry.image?.url ?? '',
			buttonContent: buttons,
			split: entry.split ?? false,
			flip: entry.flip_content_and_image ?? false,
		};
	});
}
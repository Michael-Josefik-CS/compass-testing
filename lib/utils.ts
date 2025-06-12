import type { CardProps, Experience } from './types';

export function mapExperiencesToCards(experiences: Experience[]): CardProps[] {
	return experiences.map((exp) => ({
		key: exp.uid,
		title: exp.title,
		subtitle: exp.destination?.[0]?.title, // now works correctly
		description: exp.short_description ?? '',    // optional fallback
		image: exp.hero_image?.url ?? '',            // optional fallback
	}));
}


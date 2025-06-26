// app/destinations/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { fetchDestinationBySlug, fetchDestinations } from '@/lib/contentstack';
import PageHeader from '@/app/components/PageHeader/PageHeader';
import Section from '@/app/components/Section/Section';
import HeaderBlock from '@/app/components/atoms/HeaderBlock/HeaderBlock';

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const destination = await fetchDestinationBySlug(slug);

	if (!destination) notFound();
    console.log('Destination:', destination);

	return (
        <>
            <PageHeader
                title={destination.title}
                subhead={destination.intro_blurb}
                image={destination.hero_image?.url}
                bgColor="brandPrimary"
            />
            <Section>
                {destination.advisors?.map((advisor) => <HeaderBlock size='h2' title={advisor.title} key={advisor.uid} />)}
            </Section>
        </>
	);
}

export async function generateStaticParams() {
	const destinations = await fetchDestinations(); // You already have this in lib
	return destinations.map((dest) => ({
		slug: dest.slug,
	}));
}
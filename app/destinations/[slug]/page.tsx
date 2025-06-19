import { notFound } from 'next/navigation';
import { fetchDestinationBySlug, fetchDestinations } from '../../../lib/contentstack';
import PageHeader from '@/app/components/PageHeader/PageHeader';


interface Props {
  params: { slug: string };
}

export default async function DestinationPage({ params }: Props) {
  if (!params?.slug) {
    notFound(); // or redirect, or return fallback UI
  }

  const destination = await fetchDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  return (
    <PageHeader
      title={destination.title}
      subhead={destination.intro_blurb}
      bgColor="brandPrimary"
    />
  );
}

// ✅ Add this below the component
export async function generateStaticParams() {
  const destinations = await fetchDestinations();

  return destinations.map(dest => ({
    slug: dest.slug,
  }));
}
import * as contentstack from 'contentstack'
// import contentstackDelivery, { Region, QueryOperation } from '@contentstack/delivery-sdk'
import ContentstackLivePreview, { IStackSdk } from '@contentstack/live-preview-utils'
import { Destination, Homepage } from './types'



// Initialize Contentstack Delivery SDK
type StackConfig = {
	api_key: string;
	delivery_token: string;
	environment: string;
	live_preview?: {
		enable: boolean;
		preview_token: string;
	};
};

const stackConfig: StackConfig = {
	api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY!,
	delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN!,
	environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT!,
};

if (process.env.NEXT_PUBLIC_CONTENTSTACK_LIVE_PREVIEW === 'true') {
	stackConfig.live_preview = {
		enable: true,
		preview_token: process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW_TOKEN!,
	};
}

export const stack = contentstack.Stack(stackConfig);


// Function to initialize Live Preview
export function initLivePreview() {
	ContentstackLivePreview.init({
		ssr: false,
		enable: process.env.NEXT_PUBLIC_CONTENTSTACK_LIVE_PREVIEW === 'true',
		mode: 'builder',
		stackSdk: stack.config as unknown as IStackSdk,
		stackDetails: {
			apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY! as string,
			environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT! as string,
		},

		editButton: {
			enable: true,
		}
	})
}



// Function to fetch destinations from Contentstack
export async function fetchDestinations(): Promise<Destination[]> {
	try {
		// Update query to include region reference fields like title and slug
		const query = stack.ContentType('destination').Query()
			.includeReference('region') // Use includeReference instead of include
			.toJSON()

		const [entries] = await query.find()

		// Log the entries and structure to see the data you're getting
		//console.log('Fetched Entries:', JSON.stringify(entries, null, 10))

		if (!entries || entries.length === 0) {
			console.log('No entries found for destination.')
		}

		return entries as Destination[] // Ensures the correct type is returned
	} catch (error) {
		console.error('Contentstack fetch error:', error)
		return []
	}
}


// Function to fetch destinations from Contentstack
export async function fetchHomepage(): Promise<Homepage | null> {
  try {
    const [entries] = await stack
      .ContentType('homepage')
      .Query()
	  .includeReference('top_experiences.destination', 'showcase.showcase_block') // Include the reference field
      .toJSON()
      .find();

    return entries[0] || null;
  } catch (error) {
    console.error('Error fetching homepage:', error);
    return null;
  }
}


// Function to fetch a specific destination by slug
export async function fetchDestinationBySlug(slug: string): Promise<Destination | null> {
  try {
    const [entries] = await stack
      .ContentType('destination')
      .Query()
      .where('slug', slug)
	  .includeReference('advisors') // Include the region reference
      .toJSON()
      .find();

    return entries[0] || null;
  } catch (error) {
    console.error(`Error fetching destination with slug "${slug}":`, error);
    return null;
  }
}

export interface Article {
	uid: string
	title: string
	url: string
	summary: string
	cover_image: {
		url: string
	}[]
	taxonomy?: {
		region?: string[]
		topic?: string[]
	}
}
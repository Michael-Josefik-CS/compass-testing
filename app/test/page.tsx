import Button from '@components/Button/Button'

export default function TestPage() {
	return (
		<main style={{ padding: '2rem' }}>
			<h2>Button Variants</h2>
            <Button type='primary'>asdf</Button>
			<div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(3, max-content)' }}>
				<Button>Default</Button>
				<Button type="primary">Primary</Button>
                <Button type="secondary">Secondary</Button>
				{/* Add more variants or background scenarios */}
			</div>
		</main>
	)
}
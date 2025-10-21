export default {
	ci: {
		collect: {
			staticDistDir: './build',
			numberOfRuns: 3
		},
		assert: {
			preset: 'lighthouse:no-pwa',
			assertions: {
				'categories:performance': ['error', {minScore: 0.9}],
				'categories:accessibility': ['error', {minScore: 0.9}],
				'categories:best-practices': ['warn', {minScore: 0.9}],
				'categories:seo': ['warn', {minScore: 0.9}],
				
				'resource-summary:script:size': ['error', {maxNumericValue: 70000}],
				'resource-summary:stylesheet:size': ['error', {maxNumericValue: 40000}],
				'resource-summary:third-party:size': ['error', {maxNumericValue: 50000}],
				'resource-summary:total:size': ['warn', {maxNumericValue: 200000}],
				
				'first-contentful-paint': ['error', {maxNumericValue: 1800}],
				'largest-contentful-paint': ['error', {maxNumericValue: 2500}],
				'interactive': ['error', {maxNumericValue: 3500}],
				'cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],
				'total-blocking-time': ['error', {maxNumericValue: 300}]
			}
		},
		upload: {
			target: 'temporary-public-storage'
		}
	}
};

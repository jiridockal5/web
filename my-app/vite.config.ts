import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		sveltekit(),
		visualizer({
			open: false,
			filename: 'stats.html',
			gzipSize: true,
			brotliSize: true
		})
	],
	
	server: {
		host: '0.0.0.0',
		port: 5000,
		strictPort: true,
		allowedHosts: true
	},

	build: {
		target: 'es2020',
		minify: 'esbuild',
		
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				}
			}
		},
		
		chunkSizeWarningLimit: 1000,
		reportCompressedSize: true,
		cssCodeSplit: true
	},
	
	esbuild: {
		drop: ['console', 'debugger'],
		legalComments: 'none',
		treeShaking: true
	},
	
	resolve: {
		dedupe: ['svelte']
	}
});

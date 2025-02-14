// Packages
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/core-css/',

    build: {
        emptyOutDir: true,
        outDir: '../dist/site',
        minify: 'esbuild',
        rollupOptions: {
            external: [ '' ],
        },
        target: 'modules',
    },

    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },

    resolve: {
        alias: {
            // This is needed to ensure main.ts' use of @styles from vite.config.lib.ts
            // works when we're building site
            '@styles': path.resolve(__dirname, 'src/lib/styles/'),
        },
    },

    root: 'src',
});

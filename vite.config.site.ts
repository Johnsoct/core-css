// Packages
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/core-css/',

    build: {
        emptyOutDir: true,
        outDir: 'dist/site',
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
            '@modules': path.resolve(__dirname, 'lib/modules'),
        },
    },
});

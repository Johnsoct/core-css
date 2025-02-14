// Packages
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/',

    build: {
        emptyOutDir: true,
        lib: {
            entry: path.resolve(__dirname, 'src/lib/main.ts'),
            name: 'core-css',
        },
        outDir: 'dist/lib',
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
            '@styles': path.resolve(__dirname, '/styles'),
        },
    },
});

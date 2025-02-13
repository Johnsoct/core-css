// Packages
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        emptyOutDir: false,

        lib: {
            entry: path.resolve(__dirname, 'src/main.ts'),
            fileName: "index",
            name: 'core-css',
        },

        outDir: "../dist",

        minify: true,

        rollupOptions: {
            // Prevent vue from being bundled with the final build
            external: [ 'vite' ],
        },
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
            '@styles': path.resolve(__dirname, './styles'),
        },
    },

    root: 'src',
});

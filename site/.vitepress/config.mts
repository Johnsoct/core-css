import path from 'path'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/core-css/',
    cleanUrls: true,
    description: "Documentation for Core-CSS",
    themeConfig: {
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025 - Present by Taylor Johnson',
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Getting Started', link: '/documentation/getting-started' },
            { text: 'Styleguide', link: '/documentation/styleguide' },
            { text: 'Typography', link: '/documentation/typography' },
            { text: 'Spacing', link: '/documentation/spacing' },
            { text: 'Layout', link: '/documentation/layout' },
            { text: 'Animations', link: '/documentation/animations' },
            { text: 'Utilities', link: '/documentation/utilities' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/johnsoct/core-css' }
        ]
    },
    title: "Core-CSS",
    vite: {
        resolve: {
            alias: {
                '@modules': path.resolve(__dirname, '../../lib/modules/'),
            },
        },
 
    },
})

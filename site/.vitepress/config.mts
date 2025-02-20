import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Core-CSS",
    description: "Documentation for Core-CSS",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Getting Started', link: '/documentation/getting-started' },
            { text: 'Core Concepts', link: '/documentation/core-concepts' },
            { text: 'Typography', link: '/documentation/typography' },
            { text: 'Spacing', link: '/documentation/spacing' },
            { text: 'Layout', link: '/documentation/spacing' },
            { text: 'Animations', link: '/documentation/animations' },
            { text: 'Utilities', link: '/documentation/utilities' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/johnsoct/core-css' }
        ]
    }
})

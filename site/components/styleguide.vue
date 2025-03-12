<script lang="ts" setup>
    import {
        onBeforeUnmount,
        onMounted,
        useTemplateRef
    } from 'vue'

    // Types
    // Types
    // Types

    type typographyScales = -2 | -1 | 0 | 1 | 2 | 3 | 4
    type typographyData = {
        associatedClasses: string[]
        lineHeight: number
        // TODO: remove null when max-widths are set
        maxWidth: number | null
        name: string
        size: [typographyScales, typographyScales]
        tracking: number
        weight: number | null,
    }

    // Variables
    // Variables
    // Variables

    const baseFontSize = 16
    const optionsTypography: { htmlElements: typographyData[], weights: number[] } = {
        // Headings
        htmlElements: [
            {
                associatedClasses: [ 'heading-ms4' ],
                lineHeight: 1.2,
                maxWidth: 1008,
                name: 'h1',
                size: [4, 2],
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms3' ],
                lineHeight: 1.2,
                maxWidth: 888,
                name: 'h2',
                size: [3, 1],
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms2' ],
                lineHeight: 1.2,
                maxWidth: 768,
                name: 'h3',
                size: [2, 0],
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: 1.2,
                maxWidth: 648,
                name: 'h4',
                size: [1, 0],
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: 1.2,
                maxWidth: 648,
                name: 'h5',
                size: [1, 0],
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: 1.2,
                maxWidth: 648,
                name: 'h6',
                size: [1, 0],
                tracking: -3,
                weight: 700,
            },
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'a',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'abbr',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'blockquote',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'button',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'caption',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'cite',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'code',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'dd',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'dt',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'figcaption',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'i',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'input',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'label',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'legend',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'li',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'mark',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'option',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'p',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'span',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'pre',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'q',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'small',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'strong',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'td',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'textarea',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'th',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
            //{
            //    associatedClasses: [ 't1' ],
            //    lineHeight: 0,
            //    maxWidth: null,
            //    name: 'time',
            //    size: [0, 0],
            //    tracking: 0,
            //    weight: 400,
            //},
        ],
        weights: [400, 500, 600, 700],
    }
    const typographyContainer = useTemplateRef('typography')
    let link: HTMLLinkElement

    // Functions
    // Functions
    // Functions

    const appendCoreCSS = () => {
        const elLink = document.createElement("link")
        elLink.href = `${import.meta.env.BASE_URL}index.css`
        elLink.rel = "stylesheet"
        document.head.appendChild(elLink)
        link = elLink
    }
    const appendTypography = () => {
        const displayText = 'Contrary to popular belief, CSS is the most difficult programming language.'
        const frag = new DocumentFragment()

        optionsTypography.htmlElements.forEach((el, index) => {
            const desktopPixelSize = convertMSToPixels(el.size[0]).toFixed(2)
            const desktopRemsSize = desktopPixelSize / baseFontSize
            const mobilePixelSize = convertMSToPixels(el.size[1]).toFixed(2)
            const mobileRemsSize = mobilePixelSize / baseFontSize

            const html = `
                <div class="Styleguide__type-container">
                    <table>
                        <caption>${el.name}</caption>
                        <thead>
                            <th scope="col">Property</th>
                            <th scope="col">Value</th>
                        </thead>    
                        <tbody>
                            <tr>
                                <th scope="row">Size</th>
                                <th scope="row">${desktopPixelSize}px / ${desktopRemsSize}rems (desktop) | ${mobilePixelSize}px / ${mobileRemsSize}rems (mobile)</th>
                            </tr>
                            <tr>
                                <th scope="row">Line-height</th>
                                <th scope="row">${el.lineHeight}</th>
                            </tr>
                            <tr>
                                <th scope="row">Tracking</th>
                                <th scope="row">${el.tracking}%</th>
                            </tr>
                            <tr>
                                <th scope="row">Max-width</th>
                                <th scope="row">${el.maxWidth}px</th>
                            </tr>
                            <tr>
                                <th scope="row">Weight</th>
                                <th scope="row">${el.weight}</th>
                            </tr>
                            <tr>
                                <th scope="row">Associated Classes</th>
                                <th scope="row"><code>${el.associatedClasses}</code></th>
                            </tr>
                        </tbody>
                    </table>

                    <${el.name}>${displayText}</${el.name}>
                </div>
            `

            if (index === 0) {
                frag.innerHTML = html
            }
            else {
                frag.innerHTML += html
            }
        })

        typographyContainer.value.innerHTML = frag.innerHTML
    }
    const convertMSToPixels = (ms: number): number => {
        const perfectFifth = 1.5

        return Math.pow(perfectFifth, ms) * baseFontSize
    }

    // Lifecycle hooks
    // Lifecycle hooks
    // Lifecycle hooks

    onBeforeUnmount(() => {
        if (link) {
            document.head.removeChild(link)
        }
    })

    onMounted(() => {
        appendCoreCSS()
        appendTypography()
    })
</script>

<style lang="scss">
@use "@modules/constants/breakpoints.scss" as *;
@use "@modules/layout/mixins.scss" as *;

#app {
    background-image: linear-gradient(to right, rgba(0,0,0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0, 0.08) 1px, transparent 1px);
    background-size: 10px 10px;
}

.Styleguide {
    margin: 0 auto;
    max-width: $tablet-large;

    &__section-content {
        // TODO: REPLACE WITH SS MIXINS
        @include margin(2, $top: true);
    }

    &__type-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;

        table {
            caption {
                font-weight: 700;
                text-transform: uppercase;
            }

            thead {
                th {
                    font-weight: 600;
                }
            }
        }
    }
}
</style>

<template>
    <div class="Styleguide">
        <a href="/core-css/">Go Back</a>

        <div class="Styleguide__section">
            <h1>Typography</h1>

            <div
                class="Styleguide__section-content"
                ref="typography"
            ></div>
        </div>
    </div>
</template>

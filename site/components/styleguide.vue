<script lang="ts" setup>
    import {
        onBeforeUnmount,
        onMounted,
        useTemplateRef
    } from 'vue'

    type typographyData = {
        associatedClasses: string[]
        lineHeight: number
        // TODO: remove null when max-widths are set
        maxWidth: number | null
        name: string
        size: [number, number]
        tracking: number
        weight: number | null,
    }

    const optionsTypography: { htmlElements: typographyData[], weights: number[] } = {
        // Headings
        htmlElements: [
            {
                associatedClasses: [ 'heading-ms4' ],
                lineHeight: 1.2,
                maxWidth: null,
                name: 'h1',
                size: 0,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms3' ],
                lineHeight: 1.2,
                maxWidth: null,
                name: 'h2',
                size: 0,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms2' ],
                lineHeight: 1.2,
                maxWidth: null,
                name: 'h3',
                size: 0,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: 1.2,
                maxWidth: null,
                name: 'h5',
                size: 0,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: 1.2,
                maxWidth: null,
                name: 'h6',
                size: 0,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'a',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'abbr',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'blockquote',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'button',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'caption',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'cite',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'code',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'dd',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'dt',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'figcaption',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'i',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'input',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'label',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'legend',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'li',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'mark',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'option',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'p',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'span',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'pre',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'q',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'small',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'strong',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'td',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'textarea',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'th',
                size: 0,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 't1' ],
                lineHeight: 0,
                maxWidth: null,
                name: 'time',
                size: 0,
                tracking: 0,
                weight: 400,
            },
        ],
        weights: [400, 500, 600, 700],
    }
    const typographyContainer = useTemplateRef('typography')

    let link

    const appendCoreCSS = () => {
        const elLink = document.createElement("link")
        elLink.href = `${import.meta.env.BASE_URL}index.css`
        elLink.rel = "stylesheet"
        document.head.appendChild(elLink)
        link = elLink
    }

    const appendTypography = () => {
        const displayText = "The quick, brown fox jumps over the lazy dog."
        const frag = new DocumentFragment()

        optionsTypography.htmlElements.forEach((el, index) => {
            const html = `
                <div class="Styleguide__type-container">
                    <label>
                        ${el.name} - size: ${el.size} | line-height: ${el.lineHeight} | tracking: ${el.tracking} | available classes: ${el.associatedClasses}
                    </label>
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

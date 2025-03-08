<script setup>
    import { 
        onBeforeUnmount,
        onMounted,
        useTemplateRef 
    } from 'vue'
    
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
        const options = {
            htmlElements: [
                // Headings
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'h1',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'h2',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'h3',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'h4',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'h5',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'h6',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'a',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'abbr',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'blockquote',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'button',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'caption',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'cite',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'code',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'dd',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'dt',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'figcaption',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'i',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'input',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'label',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'legend',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'li',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'mark',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'option',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'p',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'span',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'pre',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'q',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'small',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'strong',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'td',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'textarea',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'th',
                    size: 0,
                    tracking: 0,
                },
                {
                    associatedClasses: [ 't1' ],
                    lineHeight: 0, 
                    name: 'time',
                    size: 0,
                    tracking: 0,
                },
            ],
            weights: [400, 500, 600, 700],
        }

        options.htmlElements.forEach((el, index) => {
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

<script lang="ts" setup>
    import {
        onBeforeUnmount,
        onMounted,
        useTemplateRef
    } from 'vue';

    // Types
    // Types
    // Types

    type typographyScales = -2 | -1 | 0 | 1 | 2 | 3 | 4
    type typographyData = {
        associatedClasses: string[]
        lineHeight: number
        maxWidth: [number, number]
        name: string
        size: [typographyScales, typographyScales]
        tracking: number
        weight: number | null,
    }

    // Variables
    // Variables
    // Variables

    const baseFontSize = 16;
    const baseHeaderLineHeight = 1.25;
    const baseBodyLineHeight = 1.5;
    const displayTextOptions = {
        body: 'Tacos are proof that the universe wants us to be happy—until that first devastating bite when half the filling tumbles onto your lap like a delicious avalanche of betrayal. They’re the only food that demands you eat them with the grace of a juggler, the speed of a competitive eater, and the resilience of someone who refuses to let a crumbling shell ruin their day. Whether they’re soft, crunchy, or held together by sheer determination and melted cheese, tacos are the edible embodiment of joy… and regret when you realize you should’ve ordered three more.',
        heading: 'Contrary to popular belief, CSS is the most difficult programming language.',
        link: 'Click here to learn more',
    };
    const optionsTypography: { htmlElements: typographyData[], weights: number[] } = {
        // Headings
        htmlElements: [
            {
                associatedClasses: [ 'heading-ms4' ],
                lineHeight: baseHeaderLineHeight,
                maxWidth: [4, 3],
                name: 'h1',
                size: [4, 3],
                text: displayTextOptions.heading,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms3' ],
                lineHeight: baseHeaderLineHeight,
                maxWidth: [3, 2],
                name: 'h2',
                size: [3, 2],
                text: displayTextOptions.heading,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms2' ],
                lineHeight: baseHeaderLineHeight,
                maxWidth: [2, 1],
                name: 'h3',
                size: [2, 1],
                text: displayTextOptions.heading,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: baseHeaderLineHeight,
                maxWidth: [1, 0],
                name: 'h4',
                size: [1, 0],
                text: displayTextOptions.heading,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: baseHeaderLineHeight,
                maxWidth: [1, 0],
                name: 'h5',
                size: [1, 0],
                text: displayTextOptions.heading,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'heading-ms1' ],
                lineHeight: baseHeaderLineHeight,
                maxWidth: [1, 0],
                name: 'h6',
                size: [1, 0],
                text: displayTextOptions.heading,
                tracking: -3,
                weight: 700,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: 1.5,
                maxWidth: [0, 0],
                name: 'a',
                size: [0, 0],
                text: displayTextOptions.link,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'abbr',
                size: [0, 0],
                text: "CSS",
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'blockquote',
                size: [0, 0],
                text: displayTextOptions.body,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'button',
                size: [0, 0],
                text: displayTextOptions.link,
                tracking: 0,
                weight: 400,
            },
            // TODO: caption doesn't work outside of table
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'caption',
                size: [0, 0],
                text: 'A taco in the wild',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'cite',
                size: [0, 0],
                text: 'Smith, John. The Art of Coding. Tech Press, 2020.',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'code',
                size: [0, 0],
                text: 'console.log("Tacos are for superior human beings")',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'dd',
                size: [0, 0],
                text: 'Basic Bitch',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'dt',
                size: [0, 0],
                text: 'Types of Tacos',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'figcaption',
                size: [0, 0],
                text: 'A fried chicken taco in the wild',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'i',
                size: [0, 0],
                text: 'This taco is to die for!',
                tracking: 0,
                weight: 400,
            },
            // TODO: text doesn't work (i.e. placeholder)
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'input',
                size: [0, 0],
                text: 'Please enter your favorite taco',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'label',
                size: [0, 0],
                text: 'The taco of the year',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'legend',
                size: [0, 0],
                text: 'Taco origin',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'li',
                size: [0, 0],
                text: 'Pulled pork taco',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'mark',
                size: [0, 0],
                text: 'Tacos are known to reduce death by 100%',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'option',
                size: [0, 0],
                text: 'Skirt steak taco',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'p',
                size: [0, 0],
                text: displayTextOptions.body,
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'pre',
                size: [0, 0],
                text: 'Mission objective: obtain all the tacos!',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'q',
                size: [0, 0],
                text: 'President Taco, and I quote, "Tacos for all!"',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'small',
                size: [0, 0],
                text: 'Children taco options',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'span',
                size: [0, 0],
                text: 'best damn taco',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'strong',
                size: [0, 0],
                text: 'Dad tacos!!!',
                tracking: 0,
                weight: 400,
            },
            // TODO: td cannot exist outside table
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'td',
                size: [0, 0],
                text: 'Mexican-style cheese',
                tracking: 0,
                weight: 400,
            },
            // TODO: text should be textarea's placeholder
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'textarea',
                size: [0, 0],
                text: 'Please tell us why you love tacos',
                tracking: 0,
                weight: 400,
            },
            // TODO: th cannot exist outside table
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'th',
                size: [0, 0],
                text: 'Ingredients',
                tracking: 0,
                weight: 400,
            },
            {
                associatedClasses: [ 'body-ms0' ],
                lineHeight: baseBodyLineHeight,
                maxWidth: [0, 0],
                name: 'time',
                size: [0, 0],
                text: 'TA:CO',
                tracking: 0,
                weight: 400,
            },
        ],
        weights: [400, 500, 600, 700],
    };
    const rus = baseFontSize * baseBodyLineHeight;
    const typographyContainer = useTemplateRef('typography');
    let link: HTMLLinkElement;

    // Functions
    // Functions
    // Functions

    const appendCoreCSS = () => {
        const elLink = document.createElement("link")
        elLink.href = `${import.meta.env.BASE_URL}index.css`
        elLink.rel = "stylesheet"
        document.head.appendChild(elLink)
        link = elLink
    };
    const appendTypography = () => {
        const displayText = 'Contrary to popular belief, CSS is the most difficult programming language.'
        const frag = new DocumentFragment()

        optionsTypography.htmlElements.forEach((el, index) => {
            const desktopFontPixelSize = convertMSToPixels(el.size[0]).toFixed(2)
            const desktopFontRemsSize = desktopFontPixelSize / baseFontSize
            const mobileFontPixelSize = convertMSToPixels(el.size[1]).toFixed(2)
            const mobileFontRemsSize = mobileFontPixelSize / baseFontSize
            const desktopMaxWidthPixelSize = convertMSToMaxWidth(el.maxWidth[0]).toFixed(2)
            const desktopMaxWidthRemsSize = desktopMaxWidthPixelSize / baseFontSize
            const mobileMaxWidthPixelSize = convertMSToMaxWidth(el.maxWidth[1]).toFixed(2)
            const mobileMaxWidthRemsSize = mobileMaxWidthPixelSize / baseFontSize

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
                                <td scope="row">Size</td>
                                <td scope="row">
                                        <label>Desktop: ${desktopFontPixelSize}px / ${desktopFontRemsSize}rems</label>
                                        <label>Mobile: ${mobileFontPixelSize}px / ${mobileFontRemsSize}rems</label>
                                </td>
                            </tr>
                            <tr>
                                <td scope="row">Line-height</td>
                                <td scope="row">${el.lineHeight}</td>
                            </tr>
                            <tr>
                                <td scope="row">Tracking</td>
                                <td scope="row">${el.tracking}%</td>
                            </tr>
                            <tr>
                                <td scope="row">Max-width</td>
                                <td scope="row">
                                        <label>Desktop: ${desktopMaxWidthPixelSize}px / ${desktopMaxWidthRemsSize}rems</label>
                                        <label>Mobile: ${mobileMaxWidthPixelSize}px / ${mobileMaxWidthRemsSize}rems</label>
                            </tr>
                            <tr>
                                <td scope="row">Weight</td>
                                <td scope="row">${el.weight}</td>
                            </tr>
                            <tr>
                                <td scope="row">Associated Classes</td>
                                <td scope="row"><code>${el.associatedClasses}</code></td>
                            </tr>
                        </tbody>
                    </table>

                    <${el.name}>${el.text}</${el.name}>
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
    };
    const convertMSToMaxWidth = (ms: number): number => {
        // DOCS: typopgraphymaxwidth
        if (ms === 4) {
            return rus * 42
        }
        else if (ms === 3) {
            return rus * 37
        }
        else if (ms === 2) {
            return rus * 32
        }
        else {
            return rus * 27
        }
    };
    const convertMSToPixels = (ms: number): number => {
        const perfectFifth = 1.5

        return Math.pow(perfectFifth, ms) * baseFontSize
    };

    // Lifecycle hooks
    // Lifecycle hooks
    // Lifecycle hooks

    onBeforeUnmount(() => {
        if (link) {
            document.head.removeChild(link)
        }
    });

    onMounted(() => {
        appendCoreCSS()
        appendTypography()
    });
</script>

<style lang="scss">
@use "@modules/utility/mixins.scss" as *;
@use "@modules/constants/breakpoints.scss" as *;
@use "@modules/layout/mixins.scss" as *;
@use "@modules/typography/functions.scss" as *;

#app {
    background-image: linear-gradient(to right, rgba(0,0,0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0, 0.08) 1px, transparent 1px);
    background-size: 10px 10px;
}

.Styleguide {
    margin: 0 auto;
    max-width: $tablet-large;

    table {
        @include margin(1, $bottom: true);

        caption {
            font-weight: 700;
            text-transform: uppercase;
        }
        
        td,
        th {
            @include flex($direction: column);

            &:first-child {
                flex-basis: rems(200px);
            }

            &:nth-child(2) {
                flex-grow: 1;
            }

            code {
                margin: 0;
            }

            label {
                display: block;
                margin: 0;
            }
        }

        thead {
            th {
                font-weight: 600;
                text-align: left;
            }

        }

        tr {
            display: flex;
            margin: 0;
        }
    }

    &__link-go-back {
        @include flex();
        @include padding(1, $top: true, $bottom: true);
        margin-bottom: 0;
        width: max-content;
    }

    &__section-content {
        @include margin(2, $top: true);
    }

    &__type-container {
        @include flex($direction: column);
        @include margin(1, $bottom: true);
    }
}
</style>

<template>
    <div class="Styleguide">
        <a
            class="Styleguide__link-go-back"
            href="/core-css/"
        >
            Go Back
        </a>

        <div class="Styleguide__section">
            <h1>Typography</h1>

            <div
                class="Styleguide__section-content"
                ref="typography"
            ></div>
        </div>
    </div>
</template>

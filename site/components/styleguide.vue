<script lang="ts" setup>
// Imports
import {
    onBeforeUnmount,
    onMounted,
    useTemplateRef
} from 'vue';
// Components
import ElementTypography from './element-typography.vue';

// Types
// Types
// Types

type typographyScales = -2 | -1 | 0 | 1 | 2 | 3 | 4
type typographyData = {
    associatedClasses?: string[]
    lineHeight: number
    maxWidth: [number, number]
    miscellaneous?: string
    name: string
    size: number | [typographyScales, typographyScales]
    text: string
    textLocation: 'textContent' | 'placeholder' 
    tracking: number
    weight: number
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
const input = useTemplateRef('input');
const rus = baseFontSize * baseBodyLineHeight;
const typesBody: typographyData[] = [
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // TODO: introduce code styling
        // DOCS: cite
        // miscellaneous: 'Italic',
        name: 'code',
        size: [0, 0],
        text: 'console.log("Tacos are for superior human beings")',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'li',
        size: [0, 0],
        text: 'Pulled pork taco',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'p',
        size: [0, 0],
        text: displayTextOptions.body,
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'pre',
        size: [0, 0],
        text: `Mission objective: 
obtain
all
the
tacos!
`,
        textLocation: 'textContent',
        weight: 400,
    },
];
const typesHeaders: typographyData[] = [
    {
        associatedClasses: [ 'heading-ms4' ],
        lineHeight: baseHeaderLineHeight,
        maxWidth: [4, 3],
        name: 'h1',
        size: [4, 3],
        text: displayTextOptions.heading,
        textLocation: 'textContent',
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
        textLocation: 'textContent',
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
        textLocation: 'textContent',
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
        textLocation: 'textContent',
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
        textLocation: 'textContent',
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
        textLocation: 'textContent',
        tracking: -3,
        weight: 700,
    },
];
const typesInline: typographyData[] = [
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'abbr',
        size: [0, 0],
        text: "CSS",
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'span',
        size: [0, 0],
        text: 'best damn taco',
        textLocation: 'textContent',
        weight: 400,
    },
];
const typesInteractive: typographyData[] = [
    {
        // DOCS: a
        associatedClasses: [ 'body-ms0', 'link' ],
        lineHeight: 1.5,
        maxWidth: [0, 0],
        // DOCS: a
        miscellaneous: 'Underlined; pointer on hover & focus',
        name: 'a',
        size: [0, 0],
        text: displayTextOptions.link,
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'button',
        size: [0, 0],
        text: displayTextOptions.link,
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'input',
        size: [0, 0],
        text: 'Please enter your favorite taco',
        textLocation: 'placeholder',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'option',
        size: [0, 0],
        text: 'Skirt steak taco',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'textarea',
        size: [0, 0],
        text: 'Please tell us why you love tacos',
        textLocation: 'placeholder',
        weight: 400,
    },
];
const typesMisc: typographyData[] = [
    {
        // DOCS: cite
        associatedClasses: [ 'body-ms0', 'italic' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // DOCS: cite
        miscellaneous: 'Italic',
        name: 'cite',
        size: [0, 0],
        text: 'Smith, John. The Art of Coding. Tech Press, 2020.',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'dd',
        size: [0, 0],
        text: 'Basic Bitch',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'dt',
        size: [0, 0],
        text: 'Types of Tacos',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'figcaption',
        size: [0, 0],
        text: 'A fried chicken taco in the wild',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'label',
        size: [0, 0],
        text: 'The taco of the year',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'legend',
        size: [0, 0],
        text: 'Taco origin',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'time',
        size: [0, 0],
        text: 'TA:CO',
        textLocation: 'textContent',
        weight: 400,
    },
];
const typesModify: typographyData[] = [
    {
        // DOCS: i
        associatedClasses: [ 'body-ms0', 'italic' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // DOCS: i 
        miscellaneous: 'Italic',
        name: 'i',
        size: [0, 0],
        text: 'This taco is to die for!',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        // DOCS: mark
        associatedClasses: [ 'body-ms0', 'mark' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // DOCS: mark 
        miscellaneous: 'Background-color set to "mark"',
        name: 'mark',
        size: [0, 0],
        text: 'Tacos are known to reduce death by 100%',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        // DOCS: small
        associatedClasses: [ 'body-ms0', 'small' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'small',
        size: 12,
        text: 'Children taco options',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'strong',
        size: [0, 0],
        text: 'Dad tacos!!!',
        textLocation: 'textContent',
        weight: 600,
    },
];
const typesQuotes: typographyData[] = [
    {
        // DOCS: bodyquotes
        associatedClasses: [ 'body-ms0', 'blockquote' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // DOCS: bodyquotes
        miscellaneous: 'Has an "inset" appearance; negative left margin to maintain horizontal rhythm (matches the amount of padding plus the border width); negative text indent to prevent quotes from disrupting horizontal rhythm; hardcoded quotes via :after and :before',
        name: 'blockquote',
        size: [0, 0],
        text: displayTextOptions.body,
        textLocation: 'textContent',
        weight: 400,
    },
    {
        // DOCS: q
        associatedClasses: [ 'body-ms0', 'inline-quote' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // DOCS: q
        miscellaneous: 'Hardcoded quotes via :after and :before',
        name: 'q',
        size: [0, 0],
        text: `President Taco, and I quote, 'Tacos for all!'`,
        textLocation: 'textContent',
        weight: 400,
    },
];
const typesTable: typographyData[] = [
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        // DOCS: caption 
        miscellaneous: 'Uppercase',
        name: 'caption',
        size: [0, 0],
        text: 'A taco in the wild',
        textLocation: 'textContent',
        weight: 700,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'td',
        size: [0, 0],
        text: 'Mexican-style cheese',
        textLocation: 'textContent',
        weight: 400,
    },
    {
        associatedClasses: [ 'body-ms0' ],
        lineHeight: baseBodyLineHeight,
        maxWidth: [0, 0],
        name: 'th',
        size: [0, 0],
        text: 'Ingredients',
        textLocation: 'textContent',
        weight: 600,
    },
];
const types: typographyData[] = [
    ...typesHeaders,
    ...typesBody,
    ...typesQuotes,
    ...typesInteractive,
    ...typesTable,
    ...typesInline,
    ...typesMisc,
    ...typesModify,
];
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

    return (Math.pow(perfectFifth, ms) * baseFontSize).toFixed(2)
};
const convertPixelsToRems = (px: number): number => {
    return px / baseFontSize;
};
const displaySize = (el: typographyData, index?: number): string => {
    if (typeof el.size === 'object') {
        return `Desktop: ${convertMSToPixels(el.size[index])}px / ${convertPixelsToRems(convertMSToPixels(el.size[index]))}rems`;
    }
    else {
        return `Desktop: ${el.size}px / ${convertPixelsToRems(el.size)}rems`;
    }
}
const focusInput = () => {
    console.log('firing');
    input.value.focus();
};
const search = () => {

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

    window.addEventListener('keydown', (event: KeyboardEvent) => {
        const key = event.key;
        const timestamp = event.timeStamp;
        console.log(key, timestamp);
    })
});
</script>

<style lang="scss">
@use "@modules/utility/mixins.scss" as *;
@use "@modules/constants/breakpoints.scss" as *;
@use "@modules/layout/mixins.scss" as *;
@use "@modules/typography/functions.scss" as *;

#app {
    @include padding($base: 1);
    background-image: linear-gradient(to right, rgba(0,0,0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0, 0.08) 1px, transparent 1px);
    background-size: rus(0.5) rus(0.5);
}

.Styleguide {
    margin: 0 auto;
    max-width: $tablet-large;

    table {
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
            @include flex();
            margin: 0;
        }
    }

    &__input {
        $block: &;
        width: rus(12);

        &--search {
            @extend .Styleguide__input;
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

    &__top {
        @include flex($justify: space-between);
    }

    &__type-container {
        @include flex($direction: column);
        @include margin(3, $bottom: true);
    }
}
</style>

<template>
    <div 
        @keyup.capture.enter="focusInput"
        class="Styleguide"
    >
        <div class="Styleguide__top">
            <a
                class="Styleguide__link-go-back"
                href="/core-css/"
            >
                Go Back
            </a>

            <input
                @input="search"
                class="Styleguide__input--search"
                ref="input"
                placeholder="Search for an element (&#8984;K)"
            >
        </div>

        <div class="Styleguide__section">
            <h1>Typography</h1>
            <p>The following displayed elements strictly focus on the text attributes of said elements (i.e. the button element is unstyled to purposefully demonstrate the specific styles applied to the button's basic text).</p>

            <div
                class="Styleguide__section-content"
                ref="typography"
            >
                <div 
                    v-for="(type, index) in types"
                    :key="index"
                    class="Styleguide__type-container"
                >
                    <table class="mb-1">
                        <caption>{{ type.name }}</caption>
                        <thead>
                            <tr>
                                <th scope="col">Property</th>
                                <th scope="col">Value</th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>Associated Classes</td>
                                <td>
                                    <code>{{ type.associatedClasses.join(', ') }}</code>
                                </td>
                            </tr>
                            <tr>
                                <td>Line-height</td>
                                <td>{{ type.lineHeight }}</td>
                            </tr>
                            <tr>
                                <td>Max-width</td>
                                <td>
                                    <label>Desktop: {{ convertMSToMaxWidth(type.maxWidth[0]) }}px / {{ convertPixelsToRems(convertMSToMaxWidth(type.maxWidth[0])) }}rems</label>
                                    <label>Mobile: {{ convertMSToMaxWidth(type.maxWidth[1]) }}px / {{ convertPixelsToRems(convertMSToMaxWidth(type.maxWidth[1])) }}rems</label>
                                </td>
                            </tr>
                            <tr>
                                <td>Size</td>
                                <td>
                                    <label>{{ displaySize(type, 0) }}</label>
                                    <label>{{ displaySize(type, 1) }}</label>
                                </td>
                            </tr>
                            <tr v-if="type.tracking">
                                <td>Tracking</td>
                                <td>{{ type.tracking }}%</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{{ type.weight }}</td>
                            </tr>
                            <tr v-if="type.miscellaneous">
                                <td>Miscellaneous</td>
                                <td>{{ type.miscellaneous }}</td>
                            </tr>
                        </tbody>
                    </table>

                    <element-typography
                        :element="type.name"
                        :text="type.text"
                        :text-location="type.textLocation"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

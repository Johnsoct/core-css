<script lang="ts" setup>
// Packages
import {
    onMounted,
} from 'vue';
// Components
import HeadersWithSubheaders from './headers-with-subheaders.vue';
import HeadersWithoutSubheaders from './headers-without-subheaders.vue';

// VARIABLES
// VARIABLES
// VARIABLES

let link;

// FUNCTIONS
// FUNCTIONS
// FUNCTIONS

const appendCoreCSS = () => {
    const elLink = document.createElement("link");
    elLink.href = `${import.meta.env.BASE_URL}index.css`;
    elLink.rel = "stylesheet";
    document.head.appendChild(elLink);
    link = elLink;
};

// LIFE CYCLES
// LIFE CYCLES
// LIFE CYCLES

onMounted(() => {
    appendCoreCSS();
});
</script>

<template>
    <main class="Longform">
        <h1>Longform Typography Examples</h1>
        <h2>Core-CSS's default typography styles</h2>
        <p>My goal is to demonstrate how well Core-CSS' redefined default styles for text-based HTML elements play together without needing to override specific styles, such as margins or line heights.</p>

        <h2 class="Longform__heading-divider">Headers</h2>

        <section>
            <details>
                <summary><h3 class="p-0">Headers with subheaders</h3></summary>
                <headers-with-subheaders />
            </details>

            <details>
                <summary><h3 class="p-0">Headers without subheaders</h3></summary>
                <headers-without-subheaders />
            </details>
        </section>
    </main>
</template>

<style lang="scss">
@use "sass:map";
@use "@modules/color/colors.scss" as *;
@use "@modules/utility/mixins.scss" as *;
@use "@modules/constants/breakpoints.scss" as *;
@use "@modules/layout/mixins.scss" as *;
@use "@modules/typography/functions.scss" as *;

#app {
    @include padding($base: 1);
    background-image: linear-gradient(to right, rgba(0,0,0, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0, 0.08) 1px, transparent 1px);
    background-size: rus(0.5) rus(0.5);
}

.Longform {
    margin: 0 auto;
    max-width: $tablet-large;

    details {
        &:open {
            summary {
                &::before {
                    content: "▼";
                }
            }
        }

        summary {
            @include flex($align: center);
            user-select: none;

            &::before {
                content: "▶"; 
                padding-right: rus(0.5);
            }
        }
    }

    &__heading-divider {
        background-color: map.get($base-color, 'black');
        color: white;
        margin: rus(3) 0;
        padding: rus(1) 0;
    }
}
</style>

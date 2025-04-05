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
        <h1>Ode to the Taco: A Love Letter in Three Bites</h1>
        <p>There are meals, and then there are tacos — proof that the universe wants us to be happy and well-fed. They are compact marvels of flavor, texture, and soul. Tacos don’t ask for attention. They command it.</p>

        <section>
            <h2>The Perfect Bite</h2>

            <p>What makes a taco so endlessly lovable? It’s the balance. Each element plays its part:</p>
            <ol>
                <li>A soft, warm tortilla — the humble stage on which greatness is built.</li>
            	<li>Fillings, from slow-braised birria to sweet, spicy roasted squash.</li>
            	<li>Freshness from onion, cilantro, or a cool crema drizzle.</li>
            	<li>Heat, always optional, but always respected.</li>
            </ol>

            <p>It’s not just food. It’s <strong>orchestration</strong> — handheld harmony.</p>

            <blockquote>
                A taco is what happens when flavor hugs itself.
            </blockquote>

            <p>And if you’re wondering whether tacos qualify as a complete meal:</p>
            <code>calories + joy + crunch = dinner</code>

            <h3>Subheading: The Taco Multiverse</h3>

            <p>Tacos aren’t bound by borders or tradition. They evolve, adapt, surprise. You’ll find them:</p>
            <ul>
                <li>On smoky street corners in Mexico City.</li>
                <li>In sleek fusion trucks in Los Angeles.</li>
                <li>At 2AM in your own kitchen, when inspiration (and hunger) strike.</li>
            </ul>

            <p>Each taco is a new beginning. A customizable canvas. A warm envelope for whatever flavor needs expressing.</p>
            <code>
                // A rough approximation of dinner:
                &nbsp;const taco = {
                  shell: 'corn',
                  protein: 'carne asada',
                  toppings: ['onion', 'cilantro', 'salsa verde'],
                };
                eat(taco);
            </code>

            <h2>Ritual and Reverence</h2>

            <p>To eat a taco is to participate in something ancient. Tear, fold, bite, nod. Add lime. Say mmm without meaning to. Pass the hot sauce like a sacred relic.</p>

            <details>
                <summary>What’s the best salsa?</summary>

                <p>Depends who you ask. Salsa roja for heat. Salsa verde for tang. Pico de gallo when you want freshness. But really? The best salsa is the one that drips down your wrist and makes you chase it with your tongue.</p>
            </details>

            <h3>Side Note: Things We Whisper to Our Tacos</h3>

            <ul>
                <li>You complete me.</li>
                <li>Just one more, I swear.</li>
                <li>I’m not crying, it’s the salsa.</li>
            </ul>

            <p><q>Tacos don’t judge. They just show up, ready to be loved.</q> — inline quote from a wise napkin</p>

            <h2>Long May They Fold</h2>

            <p>If this page looks beautiful — if the spacing feels calm, the line height generous, the headings bold and clear — it’s only fitting. Typography should rise to meet the taco’s level.</p>

            <p>After all, <strong>what greater joy is there to style than praise for the greatest food of all time?</strong></p>
            <p>So here’s to tacos.</p>
            <p>May your shell never crack too soon.</p>
            <p>May your filling be plentiful.</p>
            <p>And may your napkin always be nearby.</p>
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

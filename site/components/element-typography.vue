<template>
    <div v-html="HTMLStructure" />
</template>

<script lang="ts" setup>
import {
    computed,
} from 'vue';

const props = defineProps<{
    element: string
    text: string
    textLocation: 'textContent' | 'placeholder' 
}>()

const HTMLStructure = computed(() => {
    const text = props.text.trim();

    if (props.element === 'caption') {
        return `
            <table class="ElementTypography">
                <caption 
                    class="mb-0"
                    tabindex="-1"
                >
                    ${text}
                </caption>
            </table>
        `
    }
    else if (props.element === 'td') {
        return `
            <table class="ElementTypography">
                <tbody>
                    <tr>
                        <td tabindex="-1">${text}</td>
                    </tr>
                </tbody>
            </table>
        `
    }
    else if (props.element === 'th') {
        return `
            <table class="ElementTypography">
                <thead>
                    <th tabindex="-1">${text}</caption>
                </thead>
            </table>
        `
    }
    else {
        if (props.textLocation === 'placeholder') {
            return `<${props.element} placeholder="${text}" tabindex="-1" />`;
        }
    
        if (props.textLocation === 'textContent') {
            return `<${props.element} tabindex="-1">${text}</${props.element}>`;
        }
    }
});
</script>

<style lang="scss">
.ElementTypography {

    caption {
        width: max-content;
    }

    thead,
    tbody {
        border: unset;
    }
}
</style>

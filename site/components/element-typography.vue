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
                <caption class="mb-0">${text}</caption>
            </table>
        `
    }
    else if (props.element === 'td') {
        return `
            <table class="ElementTypography">
                <tbody>
                    <tr>
                        <td>${text}</td>
                    </tr>
                </tbody>
            </table>
        `
    }
    else if (props.element === 'th') {
        return `
            <table class="ElementTypography">
                <thead>
                    <th>${text}</caption>
                </thead>
            </table>
        `
    }
    else {
        if (props.textLocation === 'placeholder') {
            return `<${props.element} placeholder="${text}" />`;
        }
    
        if (props.textLocation === 'textContent') {
            return `<${props.element}>${text}</${props.element}>`;
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

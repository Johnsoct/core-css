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
    if (props.element === 'caption') {
        return `
            <table class="ElementTypography">
                <caption class="mb-0">${props.text}</caption>
            </table>
        `
    }
    else if (props.element === 'td') {
        return `
            <table class="ElementTypography">
                <tbody>
                    <tr>
                        <td>${props.text}</td>
                    </tr>
                </tbody>
            </table>
        `
    }
    else if (props.element === 'th') {
        return `
            <table class="ElementTypography">
                <thead>
                    <th>${props.text}</caption>
                </thead>
            </table>
        `
    }
    else {
        if (props.textLocation === 'placeholder') {
            return `<${props.element} placeholder="${props.text}" />`;
        }
    
        if (props.textLocation === 'textContent') {
            return `<${props.element}>${props.text}</${props.element}>`;
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

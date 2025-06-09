<template>
    <div v-if="props.element === 'caption'">
        <table class="ElementTypography">
            <caption 
                class="mb-0"
                tabindex="-1"
            >
                {{ props.text.trim() }}
            </caption>
        </table>
    </div>
    <div v-else-if="props.element === 'summary'">
        <details>
            <summary>{{ props.text.trim() }}</summary>
        </details>
    </div>
    <div v-else-if="props.element === 'td'">
        <table class="ElementTypography">
            <tbody>
                <tr>
                    <td tabindex="-1">{{ props.text.trim() }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-else-if="props.element === 'th'">
        <table class="ElementTypography">
            <thead>
                <tr>
                    <th tabindex="-1">{{ props.text.trim() }}</th>
                </tr>
            </thead>
        </table>
    </div>
    <div v-else-if="props.textLocation === 'placeholder'">
        <component
            :is="props.element"
            disabled
            :placeholder="props.text.trim()"
        />
    </div>
    <div v-else>
        <component
            :is="props.element"
            disabled
        >
            {{ props.text.trim() }}
        </component>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    element: string
    text: string
    textLocation: 'textContent' | 'placeholder' 
}>();
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

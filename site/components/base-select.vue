<script lang="ts" setup>
// Packages
import {
    onBeforeUnmount,
    onMounted,
    ref,
    useTemplateRef,
} from 'vue';
// Types
import {
    Ref,
} from 'vue';

const events = defineEmits<{
    select: [HTMLTableCaptionElement]
}>();
const props = defineProps<{
    options: HTMLTableCaptionElement[]
}>();

// VARIABLES
// VARIABLES
// VARIABLES

const refSearchInput = useTemplateRef('refSearchInput');
const refSelectInput = useTemplateRef('refSelectInput');
const sortedOptions = props
    .options
    .sort((a: HTMLTableCaptionElement, b: HTMLTableCaptionElement) => {
        return a.innerText.toLowerCase() < b.innerText.toLowerCase()
            ? -1
            : 1;
    });
const substringSearchMatches: Ref<HTMLTableCaptionElement[]> = ref([]);

// FUNCTIONS
// FUNCTIONS
// FUNCTIONS

const clearRefSearchInput = (): void => {
    if (refSearchInput.value) {
        refSearchInput.value.value = '';
    }
};
const clearSubstringSearchMatches = (): void => {
    substringSearchMatches.value = [];
};
const handleSelectBlur = (): void => {
    clearRefSearchInput();
    clearSubstringSearchMatches();
};
const handleInputFocus = (e: KeyboardEvent): void => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();

        clearSubstringSearchMatches();

        if (refSearchInput.value) {
            refSearchInput.value.focus();
        }
    }
};
const handleInputSearch = (e: Event): void => {
    const query = (e.target as HTMLInputElement).value.trim().toLowerCase();
    substringSearchMatches.value = searchSubstrings(query);
};
const handleSelectClick = (e: Event, option: HTMLTableCaptionElement): void => {
    e.preventDefault();
    handleSelectBlur();

    events('select', option)
};
// TODO: keybinds
const handleSelectKeydown = (e: Event, option: HTMLTableCaptionElement): void => {
    e.preventDefault();
    handleSelectBlur();

    events('select', option)
};
const searchBinary = (input: string): HTMLTableCaptionElement | null => {
    const query = input.toLowerCase().trim();
    let indexEnd = sortedOptions.length - 1;
    let indexStart = 0;

    while (indexStart <= indexEnd) {
        const middleIndex = indexStart + Math.floor((indexEnd - indexStart) / 2);
        const target = sortedOptions[middleIndex];
        //console.log('Loop:', indexStart, indexEnd);
        //console.log('Inner loop:', middleIndex, query, target.innerText.toLowerCase().trim());

        if (query === target.innerText.toLowerCase().trim()) {
            return target;
        }

        if (query < target.innerText.toLowerCase().trim()) {
            indexEnd = middleIndex - 1;
        }

        if (query > target.innerText.toLowerCase().trim()) {
            indexStart = middleIndex + 1;
        }
    }

    return null;
}
const searchSubstrings = (input: string): HTMLTableCaptionElement[] => {
    const query = input.toLowerCase().trim();

    if (!query) {
        return [];
    }

    return sortedOptions.filter((value: HTMLTableCaptionElement) => {
        return value.innerText.toLowerCase().trim().startsWith(query);
    })
}

// LIFE CYCLE
// LIFE CYCLE
// LIFE CYCLE

onBeforeUnmount(() => {
    // REMOVE EVENT LISTENERS
    window.removeEventListener('keydown', handleInputFocus);

    if (refSelectInput.value) {
        refSelectInput.value.removeEventListener('blur', handleSelectBlur);
    }
})

onMounted(() => {
    // ADD EVENT LISTENERS
    window.addEventListener('keydown', handleInputFocus);

    if (refSelectInput.value) {
        refSelectInput.value.addEventListener('blur', handleSelectBlur);
    }
});
</script>

<template>
    <div 
        aria-controls="BaseSelect__select"
        :aria-expanded="substringSearchMatches.length ? true : false"
        aria-haspopup="listbox"
        aria-label="Search for option"
        aria-owns="BaseSelect__select"
        class="BaseSelect"
        ref="refSelectInput"
        role="combobox"
    >
        <input
            @input="handleInputSearch"
            :class="['BaseSelect__input', { 'BaseSelect__input--open': substringSearchMatches.length }]"
            ref="refSearchInput"
        />
        <ul 
            v-if="substringSearchMatches.length"
            :class="['Select BaseSelect__select', { 'BaseSelect__select--open': substringSearchMatches.length }]"
            id="BaseSelect__select"
            role="listbox"
        >
            <li
                v-for="(option, index) in substringSearchMatches"
                @keydown="handleSelectKeydown($event, option)"
                @click="handleSelectClick($event, option)"
                :key="index"
                :aria-selected="false"
                class="Select__option BaseSelect__option"
                :id="`BaseSelect__option-${index}`"
                role="option"
            >
                {{ option.innerText.toLowerCase().trim() }}
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use "sass:map";
@use "@modules/constants/radii.scss" as *;
@use "@modules/color/colors.scss" as *;
@use "@modules/utility/mixins.scss" as *;
@use "@modules/typography/functions.scss" as *;

.BaseSelect {
    @include flex($direction: column);
    position: relative;

    &__input {
        border: 1px solid map.get($base-color, "border");
        border-radius: $border-radius;
        width: rus(12);

        &--open {
            border-bottom: 0;
            border-radius: $border-radius $border-radius 0 0;
        }
    }

    &__select {
        border: none;
        left: 0;
        position: absolute;
        top: rus(2);
        width: 100%;

        &--open {
            border: 1px solid map.get($base-color, "border");
            border-radius: 0 0 $border-radius $border-radius;
        }
    }
}
</style>

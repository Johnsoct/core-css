# Introduction

Core-CSS is intentionally lightweight. It was built by taking the multiple in-house SCSS frameworks I've built for various SaaS companies and stripping away the company-specific styles. The goal it's trying to accomplish is to serve as the foundation on which in-house, SaaS CSS frameworks can be built.

From my experience, there are a few key categories of styles crucial to every SaaS application I've worked in:

1. Typography system which influences vertical spacing throughout the app (margin and padding)
2. Spacing
3. Layout
4. Animations
5. Utilities

## Typography

Although very mathematical, typography is a mix of science and creative decision making. Core-CSS automates a lot of the provided typography styles by utilizing specific ratios, such as the golden ratio (1.6); however, it does not go to the end of the Earth to define every possible typography style because many mathematical implementations aren't realistic in how we use text in modern web apps.

A good example of this is how interchangeable `<label>` and `<span>` are used in production codebases. Instead of styling these elements as if they're "used correctly," a focus will be put on providing explicit styles for specific HTML text-based tags with concrete uses and utilities classes that can be used to override any hardcoded tag styles.

## Spacing

All well design typography systems strongly take into consideration verbal rhythm, which is how vertical white space is used to create associations among page content. It is my intention to provide a plethora of dynamically created spacing classes based off of a calculation utilizing the typography ratio(s), such as `pb-4` for `padding-bottom: 0.25rem)` or `4px` if utilizing the golden ratio with a base font size of `10px`, which would result in a spacing of 1/4 of 1.6 times the base font size.

A good example of this is how `<h1>` tags are styled to have much greater `line-height` and/or `padding-bottom/padding-top/margin-bottom/margin-top` to separate the heading text from previous blocks of text while creating a smaller separation between a following body of text for readability.

## Layout

Although opinionated, I do not intend to provide a grid, row, or column-based layout system you'd expect to find in a library like Bootstrap or Tailwind. I am not building this library for CSS users of any experience level. It is my preference to have access to a few core `display` classes and mixins which I can use to quickly bootstrap custom layouts for the current SaaS product I'm working on.

A good example would be the following mixin for quickly applying flexbox properties:

```scss
@mixin flex(
    $direction: row,
    $align: flex-start,
    $basis: auto,
    $justify: flex-start,
    $wrap: nowrap,
    $grow: unset,
    $shrink: unset
) {
    align-items: $align;
    display: flex;
    flex-basis: $basis;
    flex-direction: $direction;
    flex-grow: $grow;
    flex-shrink: $shrink;
    flex-wrap: $wrap;
    justify-content: $justify;
}
```

## Animations

Every SaaS application can make use of smooth animations between different states, such as when an element becomes visible or a portion of an element expands.

Although intended for use with VueJS's `<Transition>` and `<TransitionGroup>`'s built-in components, Core-CSS provides a handful of easy-to-use transition classes, such as:

```scss
// FADE

.Transition__fade-enter-active,
.Transition__fade-leave-active {
    transition: opacity 0.15s $ease-in-quad, transform 0.15s $ease-in-quad;
}

.Transition__fade-enter,
.Transition__fade-leave-to {
    opacity: 0;
    transform: translateY(rems(-10px));
    transition: opacity 0.15s $ease-in-quad, transform 0.15s $ease-in-quad;
}
```

## Utilities

We all like utilities that make things easier and faster, right? Over time, I'll continue to add SCSS utility functions, classes, and mixins as I see fit.

For now, here is a list of utilities currently in the library:

- `strip-unit` - Function to strip the units from a numeric value, such as "4px"
- `flex` - Mixin for creating robust flex elements
- `overflow-ellipsis` - Mixin for creating robust text ellipsises with respect to hyphens and line count
- Normalize.css for resetting browser styles to a universal standard so our custom styles are applied equally

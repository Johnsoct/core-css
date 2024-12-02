![core-css](https://github.com/user-attachments/assets/8ace120d-b93c-4809-9bff-c70aad0ffdbf)

# Core CSS (SASS, ftw)
I've spent the last decade building user interfaces on the web and these are the core styles I have found critical for
beginning greenfield projects.  It is intentionally not all-inclusive. It's not Bootstrap. It's definitely not Tailwind.

The focus is and has always been on what styles do I need to quickly begin building a greenfield projects.

- Normalize.css
- Helper functions, `rems` conversion for non-rems values, `pow` to calculate the power of a value
- Mixins, flexbox mixin to one-line flex properties, `@mixin flex ($direction: row, $align: flex-start, $basis: auto, $justify: flex-start, $wrap: nowrap, $grow: unset, $shrink: unset)`
- Color constants, base colors and shade variations of those base colors
- Functions simplifying media queries, `@function media-between-widths($smaller-width, $larger-width) { ... }`
- Breakpoint constants, `$mobile-small: 375px`
- Spacing constants, margin and padding classes
- Container constants, `$dialog-shadow: rems(0px) rems(4px) rems(6px) rems(-2px) rgba(16, 24, 40, 0.03), ...;`
- Typography constants
- Typography defaults
- Transition constants and enter/leave classes

## I've always found the following things to be the most helpful in quickly scaffolding a project
- Typography settings based on an actual type system (line-height, size, letter-spacing, weight, margin)
- Margin and padding classes to control spacing and alignment within columns and rows
- Flexbox mixin to quickly scaffold layouts
- Function for converting pixel values to rems so I don't have to math

## Disclaimer
**It is of my opinion that layout is not a critical piece of a new project.**
### Layout changes a lot before initial product release
A greenfield project's layout is going to change three or more times before you're happy, and it's the content which has value, not the layout. The
layout is a usability improvement of the content.

### Layout classes
If there is one thing that annoys me more than anything about CSS frameworks, especially Tailwind, it's how overly complex their grid system is to understand.
I understand why the complexity exists (their grid system needs to be usable to create any layout imaginable while being responsive);
however, as a frontend web developer, which should indicate a specialty in the following languages in order of expertise: HTML, CSS, and JavaScript,
I understand how the `display` property works in the DOM; I understand how flexbox and grid operate down to the individual properties; 
and I'd argue most projects don't have a complex layout. 

It is my personal opinion most young, or new, frontend web developers are react developers first, and HTML and CSS experts last, when in reality, HTML and CSS
are suppose to be the entry points for new frontend devs. Being a frontend dev is suppose to mean being knowledgeable and an expert with CSS.

So, to my point, from my experience building multiple SaaS interfaces doing upwards of $30,000,000/month in recurring revenue, flexbox is absolutely adequate 
without the complexity of grid, is syntactically simple, and there isn't a need for tens to hundreds of flexbox classes to construct a fluid, responsive layout. 
I would strongly argue understanding how to write custom flexbox is quicker, and more valuable, than parsing and understanding a CSS framework's layout class system.
 

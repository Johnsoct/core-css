# Core Concepts

I'd like to take this opportunity to explain two specific sections of this library:

1. Typography
2. Spacing

## Typography

It is not possible to declare a perfect typography system with math alone. Although I have tweaked this library for use with built-in sans-serif typefaces and Inter, you may need to override some of the typography variables, such as the heading or body line-height ratios, to accommadate your specific needs.

### Color

By default, all text-based elements will have a non-black (#000) color because straight black on a white background is too much contrast.

### Font size

Although web designs often integrate small, crisp fonts, they don't actually translate into readable, easily traversable text.

Today, the recommended font size for mobile screens is 16 pixels and between 18 and 22 pixels for desktops, but it is important to remember that certain typefaces will look larger or smaller to other typefaces at the same pixel value (this includes font weight, as well).

### Line length

As engineers, we've heard the industry recommendation for line length in our IDEs - 80 to 120 characters; however, those recommendations are actually based in science.

Long lines of text exhausts the eyes quicker than shorter lines because our eyes require frequent pauses which they get less of when reading longer lines of text.

Line breaks provide those much needed pauses, hence the recommendation of 80 to 120, or whatever feels best to you.

According to Matej Latin, it is better to use a longer line length with languages with longer than average word length, such as German, as it decreases the likelyhood of a ragged, ridgeline of broken text on the right hand side of each left-aligned line.

### Line height

Also called "leading" in print media, line height is white space evenly distributed above and below a line of text.

Line height is not arbituary. Line height should correlate with line length, font size, and font weight, or the longer or greater the value, the greater the line height's. Font size also affects line height in the same manner.

#### Paragraphs

For paragraphs, an ideal line height is typically between 1.3 and 1.6 times the size of the text; however, you need to take into consideration your line length and font weight, which could increase the line height on top of multiplying it by the size of the text.

#### Headings

Headings, however, are more complicated, mostly because they're typically very short. It is recommended to stay between 1 and 1.2 times the size of the text. Although, like German potentially affecting your line length, certain langauges may use non-Latin characters requiring larger line heights.

Additionally, capital or uppercase headings should have slightly larger line height.

### Paragraphs

Paragraphs are read word-by-word not letter-by-letter and the white space between each character and line matter; therefore, according to the research of [Matej Latin](https://betterwebtype.com/web-typography-book/), the typography of a paragraph should be an interconnection of three specific settings: 

1. Font size
2. Line height
3. Line length

These three details are interconnected, not to be set in isolation.

We've talked about font size and line height, but I'd like to cover line length briefly.

#### Line length

By utilizing `rem` and `em` units, we can dynamically set maximum line lengths for any font size and line height combination.

`35em` represents 35 x base font size, so a base font size of 10px would equal 350px. Depending on the typeface, this may allow too many characters in one line, however, utilizing relative length units is a powerful way of getting really close to our desired final product, which in terms of this library is a typography system that is better than 90% of the "systems" currently in use in web-based SaaS applications.

### Rhythm

Regardless of the visual aesthetic of nice rhythm, rhythm in typography increases our readers' ability to process information because our brains are really good at recognizing patterns. We can consider it the "flow" of our text.

When good rhythm is present, the user more easily settles into consuming the content compared to explicitly focusing on trying to read.

#### Horizontal vs vertical rhythmm

Horizontal rhythm mostly impacts the legibility of your text.

Vertical rhythm impacts the readability of the text and establishes dichotomies in information.

#### Horizontal

##### Letter spacing (tracking)

Letter spacing lowercase text is not recommended (i.e. bodies of text); however, headings and uppercase text tend to benefit from slight decreases and increases, respectively, in letter spacing because of their larger, heavier appearance.

"Slight" means anywhere between 1 and 5 percent, such as `letter-spacing: -1%`

* Headings can have up to a -1 to -5 percent letter spacing
* Uppercase test can have up to a 1 to 5 percent letter spacing
* Acronyms and long series of digits can have up to a 1 to 5 percent letter spacing

##### Kerning

Kerning is the alternating amount of white space around each character.

Although surprising, most typefaces don't actually assign the same amount of white spaces to each character. There's often more or less space around specific characters, hence the nickname, "keming" for "kerning," which is from the "r" and "n" often appearing as a "m" with certain typefaces.

CSS provides a few options for fixing kerning, which this library does for its internally supported typefaces; however, you may want to become familiar with the following properties if you're using a custom web font.

`font-kerning: auto | normal | none;`

However, most browsers default to `auto` for larger types and disabled for smaller, mostly because kerning isn't nearly as obvious on smaller type.

### Modular scales



## Spacing

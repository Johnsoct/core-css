---
next:
    text: Spacing
    link: /documentation/spacing
outline: [1, 4]
prev: 
    text: Styleguide
    link: /documentation/styleguide
---

# Typography

First, I'd like to note typography systems are developed around displaying long-form text content, such as a blog or an e-book; therefore, there are always going to be situations where you need to zero out the margins on a label or reduce the line-height of an element in a card component. So, this system is a guide, but don't feel like you're stuck with it.

It is not possible to declare a perfect typography system with math alone. Although I have tweaked this library for use with built-in sans-serif typefaces and Inter, you may need to override some of the typography variables, such as the heading or body line-height ratios, to accommadate your specific needs.

## Color

<!--DOCS: baseblack-->
By default, all text-based elements will have a non-black (`#222222`) color because straight black on a white background is too much contrast.

## Font size

Although web designs often integrate small, crisp fonts, they don't actually translate into readable, easily traversable text.

Today, the recommended "base" font size for mobile screens is 16 pixels and between 18 and 22 pixels for desktops, but it is important to remember that certain typefaces will look larger or smaller to other typefaces at the same pixel value (this includes font weight, as well). **Base** font size refers to the size of body text, such as paragraphs.

<!-- DOCS: basefontsize -->
Core-CSS uses `16px` as its base font size across mobile and desktop.

## Line length

The industry recommends a maximum line length of 80-120 characters in our in our IDEs.

Long lines of text exhausts the eyes quicker than shorter lines because our eyes require frequent pauses which they get less of when reading longer lines of text. Line breaks provide those much needed pauses, hence the recommendation of 80 to 120, or whatever feels best to you.

### Line lengths for longer-worded languages 
According to Matej Latin, one of my favorite designers from Slovenia, it is better to use a longer line length with languages with longer than average word length, such as German, as it decreases the likelyhood of a ragged, ridgeline of broken text on the right hand side of each left-aligned line.

Core-CSS utilizes the `max-width` property to set the maximum width of each semantic element base on its font-size and line-height, and it's based on the English language.

## Line height

Also called "leading" in print media, line height is white space evenly distributed above and below a line of text. 

Line height should not be arbituary; it should correlate with font size and weight. The larger the font size and/or weight, the larger the line-height, and vice versa. 

<!--DOCS: lineheight-->
Core-CSS utilizes `1.5` for body text and `1.25` for header text.

### Paragraphs

For paragraphs, an ideal line height is typically between 1.3 and 1.6 times the size of the text.

### Headings

Headings, however, are more complicated, mostly because they're typically very short. It is recommended to stay between 1 and 1.2 times the size of the text. Although, like German potentially affecting your line length, certain languages may use non-Latin characters requiring larger line heights.

Additionally, capital or uppercase headings should have slightly larger line height.

## Paragraphs

Paragraphs are read word-by-word not letter-by-letter and the white space between each character and line matter; therefore, according to the research of [Matej Latin](https://betterwebtype.com/web-typography-book/), the typography of a paragraph should be an interconnection of three specific settings: 

1. Font size
2. Line height
3. Line length

These three details are interconnected, not to be set in isolation.

## Rhythm

Regardless of the visual aesthetic of nice rhythm, rhythm in typography increases our readers' ability to process information because our brains are really good at recognizing patterns. We can consider it the "flow" of our text.

When good rhythm is present, the user more easily settles into consuming the content compared to explicitly focusing on trying to read.

Core-CSS uses what we call a "rhythmical unit" to maintain rhythm throughout text and layout. RUs (rhythmical units) are calculated by `$base-font-size * $line-height`, and is used to generate all Core-CSS' width, margin, and padding.

### Horizontal vs vertical rhythmm

Horizontal rhythm mostly impacts the legibility of your text.

Vertical rhythm impacts the readability of the text and establishes dichotomies in information.

### Horizontal

#### Alignment

Due to browsers' poor algorithms for justifying text and the increased difficulty of reading text with dyslexia, it is recommended to always left-align text on the web.

#### Letter spacing (tracking)

Letter spacing lowercase text is not recommended (i.e. bodies of text); however, headings and uppercase text tend to benefit from slight decreases and increases, respectively, because of their larger, heavier appearance.

<!-- DOCS: letterspacing -->
"Slight" means anywhere between 1 and 5 percent, such as `letter-spacing: calc($base-font-size * 0.03);`

* Headings can have up to a -1 to -5 percent letter spacing
* Uppercase test can have up to a 1 to 5 percent letter spacing
* Acronyms and long series of digits can have up to a 1 to 5 percent letter spacing

#### Kerning

Kerning is the alternating amount of white space around each character.

Although surprising, most typefaces don't actually assign the same amount of white spaces to each character. There's often more or less space around specific characters, hence the nickname, "keming" for "kerning," which is from the "r" and "n" often appearing as a "m" with certain typefaces.

CSS provides a few options for fixing kerning, which this library does for its internally supported typefaces; however, you may want to become familiar with the following properties if you're using a custom web font.

`font-kerning: auto | normal | none;`

However, most browsers default to `auto` for larger types and disabled for smaller, mostly because kerning isn't nearly as obvious on smaller type.

#### Paragraph indentation

Although indentation is often used to create visual separation between paragraphs, it is recommended to only indent paragraphs immediately following another paragraph (i.e. a paragraph following an image, header, etc., would not be indented).

Luckily, CSS makes this very simple:

<!--DOCS: paragraphindent-->
```css
p + p {
  text-indent: 1em; // 0.5-3em, however, 1em or 1lh is standard
}
```

Additionally, when we apply paragraph indentation we don't need to apply bottom margin-padding to paragraphs because the indentation serves the visual separation.

#### Hanging punctuation

Although a minor detail without a good CSS solution (and I'm not interested in solving typography problems with JavaScript), "hanging punctuation" is when punctuation marks, such as quotes or pull points, are displayed outside of the main body of text to avoid disrupting the horizontal flow; however, `hanging-punctuation` is only supported, somewhat, by Safari, so... we can use `text-indent`, somewhat.

<!--DOCS: bodyquotes-->
```css
blockquote p {
    text-indent: -0.5em; // May need to customize
}
```

Regardless, both are imperfect solutions and probably not worth your time trying to perfect, especially if your usage of this library isn't primarily long-form text content.

However, when it comes to bullet points, browsers can reliably style the bullets outside of the horizontal flow of text due to bullets being attach to specific HTML elements (`li`) and not within the paragraph.

<!--DOCS: bulletpoints-->
```css
ul, ol {
    list-style-position: outside;
    padding-left: 0;
}
```

### Vertical rhythm

Vertical rhythm, in typography, is based on a "baseline grid," which is simply how spacing is handled within your application. In Core-CSS, RUs are used to set and maintain vertical rhythm.

**Note:** Utilizing line-height is very important because increasing line-height of text on the web adds an equal amount of space above and below the text. Unlike print and graphic design, browsers calculate line height from the middle of the text not the line it sits on.

#### Headings

After calculating our "rhythmical unit," we use whole or half multiples to calculate the margin of our heading elements, with the top margin always being larger than the bottom margin.

*This is purely an example of how RUs are used to calculate margins for text-based elements; however, Core-CSS uses whole and fractional RUs to provide a variety of margin and padding utility classes.

```scss
$heading-line-height: 1.25;
$ru: 24px; // base font size * body line height

h3 {
    font-size: 48px; 
    line-height: $heading-line-height;
    margin-bottom: calc(1 * $ru);
    margin-top: calc(3 * $ru);
}
```

#### Images

Because this library can't predict the size and ratio of images, I recommend using the "rhythmical unit" as a guide, but strictly use it for the spacing around your image. This way, your text and page proportions still have rhythm.

Typically, large, solid blocks of content do not break rhythm apart, even if it does break your grid (which is only a guide).

## Modular scales

Modular scales are typography scaling systems supporting a mathematical approach to defining font sizes for each text-based element, such as headings, anchors, paragraphs, labels, etc.

Although I do believe a mathematical approach is more than adequate for most applications, if your application is heavy on text-based content, you may want to feather the settings one way or another to get each text element working together just right!

There are a few popular scales, but this library uses the "perfect fifth" scale. Perfect fifth is a ratio of 1.5; therefore, we take our base font size, `16px`, and multiple it by `(1.5 * $scale)` to determine the font size settings for text elements larger and smaller than the base.

This is designed to work specifically with headings, so please avoid using different heading elements to target a specific font-size. Heading elements should be used semantically. Although, this isn't to say there aren't valid situations where you should overwrite a heading style, but we'll leave it up to you to know when you should do so. 

Core-CSS provides heading classes matching the default heading typography styles so you can choose the semantically correct element while getting the typography styles you want:
<!-- DOCS: headingclasses -->
```
H1 -> .heading-ms4
H2 -> .heading-ms3
H3 -> .heading-ms2
H4, H5, H6 -> .heading-ms1
```

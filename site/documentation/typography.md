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

By default, all text-based elements will have a non-black (#000) color because straight black on a white background is too much contrast.

## Font size

Although web designs often integrate small, crisp fonts, they don't actually translate into readable, easily traversable text.

Today, the recommended font size for mobile screens is 16 pixels and between 18 and 22 pixels for desktops, but it is important to remember that certain typefaces will look larger or smaller to other typefaces at the same pixel value (this includes font weight, as well).

## Line length

As engineers, we've heard the industry recommendation for line length in our IDEs - 80 to 120 characters; however, those recommendations are actually based in science.

Long lines of text exhausts the eyes quicker than shorter lines because our eyes require frequent pauses which they get less of when reading longer lines of text.

Line breaks provide those much needed pauses, hence the recommendation of 80 to 120, or whatever feels best to you.

According to Matej Latin, it is better to use a longer line length with languages with longer than average word length, such as German, as it decreases the likelyhood of a ragged, ridgeline of broken text on the right hand side of each left-aligned line.

## Line height

Also called "leading" in print media, line height is white space evenly distributed above and below a line of text.

Line height is not arbituary. Line height should correlate with line length, font size, and font weight, or the longer or greater the value, the greater the line height's. Font size also affects line height in the same manner.

### Paragraphs

For paragraphs, an ideal line height is typically between 1.3 and 1.6 times the size of the text; however, you need to take into consideration your line length and font weight, which could increase the line height on top of multiplying it by the size of the text.

### Headings

Headings, however, are more complicated, mostly because they're typically very short. It is recommended to stay between 1 and 1.2 times the size of the text. Although, like German potentially affecting your line length, certain langauges may use non-Latin characters requiring larger line heights.

Additionally, capital or uppercase headings should have slightly larger line height.

## Paragraphs

Paragraphs are read word-by-word not letter-by-letter and the white space between each character and line matter; therefore, according to the research of [Matej Latin](https://betterwebtype.com/web-typography-book/), the typography of a paragraph should be an interconnection of three specific settings: 

1. Font size
2. Line height
3. Line length

These three details are interconnected, not to be set in isolation.

We've talked about font size and line height, but I'd like to cover line length briefly.

### Line length

By utilizing `rem` and `em` units, we can dynamically set maximum line lengths for any font size and line height combination.

`35em` represents 35 x base font size, so a base font size of 10px would equal 350px. Depending on the typeface, this may allow too many characters in one line, however, utilizing relative length units is a powerful way of getting really close to our desired final product, which in terms of this library is a typography system that is better than 90% of the "systems" currently in use in web-based SaaS applications.

## Rhythm

Regardless of the visual aesthetic of nice rhythm, rhythm in typography increases our readers' ability to process information because our brains are really good at recognizing patterns. We can consider it the "flow" of our text.

When good rhythm is present, the user more easily settles into consuming the content compared to explicitly focusing on trying to read.

### Horizontal vs vertical rhythmm

Horizontal rhythm mostly impacts the legibility of your text.

Vertical rhythm impacts the readability of the text and establishes dichotomies in information.

### Horizontal

#### Alignment

Due to browsers' poor algorithms for justifying text and the increased difficulty of reading text with dyslexia, it is recommended to always left-align text on the web.

#### Letter spacing (tracking)

Letter spacing lowercase text is not recommended (i.e. bodies of text); however, headings and uppercase text tend to benefit from slight decreases and increases, respectively, in letter spacing because of their larger, heavier appearance.

"Slight" means anywhere between 1 and 5 percent, such as `letter-spacing: -1%`

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

```css
p + p {
  text-indent: 1em; // 0.5-3em, however, 1em or 1lh is standard
}
```

Additionally, when we apply paragraph indentation we don't need to apply bottom margin-padding to paragraphs because the indentation serves the visual separation.

#### Hanging punctuation

Although a minor detail without a good CSS solution (and I'm not interested in solving typography problems with JavaScript), "hanging punctuation" is when punctuation marks, such as quotes or pull points, are displayed outside of the main body of text to avoid disrupting the horizontal flow; however, `hanging-punctuation` is only supported, somewhat, by Safari, so... we can use `text-indent`, somewhat.

```css
blockquote p {
    text-indent: -0.5em; // May need to customize
}
```

Regardless, both are imperfect solutions and probably not worth your time trying to perfect, especially if your usage of this library isn't primarily long-form text content.

However, when it comes to bullet points, browsers can reliably style the bullets outside of the horizontal flow of text due to bullets being attach to specific HTML elements (`li`) and not within the paragraph.

```css
ul, ol {
    list-style-position: outside;
    padding-left: 0;
}
```

### Vertical rhythm

Vertical rhythm, in typography, is based on the line-height of your body text, which we can use to create a "rhthymical unit." 

**Note:** Utilizing line-height is very important because increasing line-height of text on the web adds an equal amount of space above and below the text. Unlike print and graphic design, browsers calculate line height from the middle of the text not the line it sits on.

#### Headings

After defining our body text line-height, or our "rhythmical unit," we use whole multiples to calculate the line-height and margin of our heading elements, with the top margin always being larger than the bottom margin.

```css
$lh: 24px;

h3 {
    // we use em/rems, but just for example...
    font-size: 48px; 
    line-height: calc(2 * $lh);
    margin-bottom: calc(1 * $lh);
    margin-top: calc(3 * $lh);
}
```

#### Images

Because this library can't predict the size and ratio of images, I recommend using the "rhythmical unit" as a guide, but strictly use it for the spacing around your image. This way, your text and page proportions still have rhythm.

Typically, large, solid blocks of content do not break rhythm apart, even if it does break your grid (which is only a guide).

## Modular scales

Modular scales are typography scaling systems supporting a mathematical approach to defining font sizes and line heights for each text-based element, such as headings, anchors, paragraphs, labels, etc.

Although I do believe a mathematical approach is "good enough" for most applications, if your application is heavy on text-based content, you may want to feather the settings one way or another to get each text element working together just right!

There are a few popular scales, but this library uses the "perfect fifth" scale. Perfect fifth is a ratio of 1.5; therefore, we take our base font size, `16px`, and multiple it by `(1.5 * $scale)` to determine the typography settings for text elements larger and smaller than the base.

This is designed to work specifically with headings, so please avoid using different heading elements to target a specific font-size. Heading elements should be used semantically. Although, this isn't to say there aren't valid situations where you should overwrite a heading style, but we'll leave it up to you to know when you should do so.


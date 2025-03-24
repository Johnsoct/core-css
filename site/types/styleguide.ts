export type typographyScales = -2 | -1 | 0 | 1 | 2 | 3 | 4

export type typographyData = {
    associatedClasses?: string[]
    lineHeight: number
    maxWidth: [number, number]
    miscellaneous?: string
    name: string
    size: number | [typographyScales, typographyScales]
    text: string
    textLocation: 'textContent' | 'placeholder'
    tracking?: number
    weight: number
}

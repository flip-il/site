import {NestedCSSProperties} from 'typestyle/lib/types'

export const h2Class: NestedCSSProperties = {
    padding:    '40px',
    textAlign:  'justify',
    $nest:      {
        '&::first-letter': {
            fontSize:   '3rem',
            fontFamily: 'Bangers',
            textShadow: '5px 5px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -2px 0 black, -2px 0 0 black',
            color:      '#fff'
        }
    }
}

export const baseFont: NestedCSSProperties = {
    fontSize: '2rem',
    textShadow: '2px 2px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -1px 0 black, -1px 0 0 black'
}

export const borderText: NestedCSSProperties = {
    fontSize: '1rem',
    textShadow: ''
}
import {NestedCSSProperties} from 'typestyle/lib/types'

export const h2Class : NestedCSSProperties = {
    padding: '40px',
    textAlign: 'justify',
    $nest: {
        '&::first-letter': {
            fontSize: '3rem',
            fontFamily: 'Bangers',
            textShadow: '5px 5px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -2px 0 black, -2px 0 0 black',
            color: '#fff'
        }
    }
}

export const baseFont : NestedCSSProperties = {
    textShadow: '2px 2px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -1px 0 black, -1px 0 0 black'
}

export const borderText : NestedCSSProperties = {
    fontSize: '1rem',
    textShadow: ''
}

export const popArtShadow : NestedCSSProperties = {
    boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000'
}

export const speechBubble : NestedCSSProperties = {
    position: 'relative',
    borderRadius: '50%',
    border: 'black 0.1em solid',
    $nest: {
        '&::after': {
            content: '',
            position: 'absolute',
            right: 0,
            top: '50%',
            width: 0,
            height: 0,
            border: '20px solid transparent',
            borderLeftColor: '#000',
            marginTop: '-10px',
            marginRight: '-20px',
            borderWidth: '0 13px 13px'
        }
    }

}
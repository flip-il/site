import {VNode} from '@cycle/dom'
import {AppState} from '../state'
import {AppData} from '../data'

import {style, keyframes} from 'typestyle'
import {titleToAnchor} from '../helpers'
import splashImage from '../../public/flip-logo-splash.png'
import {baseFont, h2Class} from '../style-helpers'

export default function splash(): VNode {
    const pulsateKeyframes = keyframes({
        '0%, 100%': {transform: 'rotate(-4deg) scale(1.1, 1.1)'},
        '50%': {transform: 'rotate(-4.5deg) scale(1.12, 1.12)'}
    })

    const popArtShadow = {
        textShadow: '5px 5px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -2px 0 black, -2px 0 0 black',
        color: '#fff'
    }
    const splashImageClass = style({
        maxWidth: '1200px',
        height: '65vh',
        maxHeight: '840px',
        margin: '0 auto',
        background: `url(${splashImage}) no-repeat 50%`,
        backgroundSize: 'contain', marginTop: '40px',
        overflowX: 'hidden'
    })
    const dateClass = style({
        textAlign: 'center',
        fontSize: '5em',
        fontFamily: 'Bangers',
        margin: '0 auto',
        maxWidth: '1000px',
        animation: `${pulsateKeyframes} 3s infinite`
    }, popArtShadow)
    const subtitleClass = style({
        textAlign: 'center',
        fontSize: '3em',
        fontFamily: 'Bangers',
        margin: '0 auto',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto'
    }, popArtShadow)
    const signupClass = style({
        textAlign: 'center',
        fontSize: '3em',
        fontFamily: 'Bangers',
        margin: '0 auto',
        maxWidth: '1000px',
        animation: `${pulsateKeyframes} 4s infinite`
    }, popArtShadow)

    const overviewClass = style(h2Class, { fontSize: '1.5rem'}, baseFont)

    return (
        <div id={titleToAnchor('FLIP')}>
            <div className={splashImageClass}>
            </div>
            <div className={subtitleClass}>
                {AppData['About'].subtitle}
            </div>
            <div className={dateClass}>
                {AppData['About'].date}
            </div>
            <div className={overviewClass}>
                {AppData['About'].overview}
            </div>
            <div className={signupClass}>
                <a href="https://goo.gl/forms/hRzJCFvVNZ5Dd5qn1">Call for Papers is Open!</a>
            </div>
        </div>
    )
}

import {VNode} from '@cycle/dom'
import {AppState} from '../state'
import {AppData} from '../data'

import {style, keyframes} from 'typestyle'
import * as csstips from 'csstips'
import {titleToAnchor} from '../helpers'
import splashImage from '../../public/flip-logo-splash.png'
import {baseFont, h2Class} from '../style-helpers'

export default function splash() : VNode {
    const pulsateKeyframes = keyframes({
        '0%, 100%': {transform: 'rotate(-4deg) scale(1.1, 1.1)'},
        '50%': {transform: 'rotate(-4.5deg) scale(1.12, 1.12)'}
    })

    const popArtShadow = {
        textShadow: '5px 5px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -2px 0 black, -2px 0 0 black',
        color: '#fff'
    }
    const splashImageClass = style({
        maxWidth: '50vw',
        maxHeight: '39vw',
        minWidth: '280px',
        minHeight: '218px',
        marginTop: '40px',
        flex: 1
    })
    const dateClass = style({
        textAlign: 'center',
        fontSize: '4em',
        fontFamily: 'Bangers',
        margin: '0 auto',
        marginTop: '50px',
        maxWidth: '1000px',
        animation: `${pulsateKeyframes} 3s infinite`
    }, popArtShadow)
    const venueClass = style({
        textAlign: 'center',
        fontSize: '2em',
        fontFamily: 'Bangers',
        margin: '0 auto',
        marginTop: '50px',
        maxWidth: '1000px',
        $nest: {a: {textDecoration: 'none'}}
    }, popArtShadow)
    const subtitleContainerClass = style({
        margin: 'auto',
        flex: 1
    })
    const subtitleClass = style({
        textAlign: 'center',
        fontSize: '3em',
        fontFamily: 'Bangers'
    }, popArtShadow)
    const signupClass = style({
        textAlign: 'center',
        fontSize: '3em',
        fontFamily: 'Bangers',
        margin: '0 auto',
        marginTop: '60px',
        maxWidth: '1000px',
        animation: `${pulsateKeyframes} 4s infinite`
    }, popArtShadow)

    const overviewClass = style(h2Class, { fontSize: '1.5em'}, baseFont)
    const container = style(csstips.horizontal, csstips.wrap, {flexDirection: 'row-reverse'})

    return (
        <div>
            <div id={titleToAnchor('About')} className={container}>
                <img className={splashImageClass} src={splashImage}>
                </img>
                <div className={subtitleContainerClass}>
                    <div className={subtitleClass}>
                        {AppData['About'].subtitle}
                    </div>
                    <div className={dateClass}>
                        {AppData['About'].date}
                    </div>
                    <div className={venueClass}>
                        <a href={'https://goo.gl/maps/s793M3zGxzK2'}>Academic College Tel-Aviv-Yafo, Tel Aviv</a>
                    </div>
                </div>
            </div>
            <div className={overviewClass}>
                {AppData['About'].overview}
            </div>
            <div className={signupClass}>
                <a href='https://goo.gl/forms/hRzJCFvVNZ5Dd5qn1'>Call for Papers is Open!</a>
            </div>
        </div>
    )
}

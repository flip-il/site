import {VNode} from '@cycle/dom'
import {AppState} from '../state'
import {AppData} from '../data'

import {style, keyframes} from 'typestyle'
import {titleToAnchor} from '../helpers'
import splashImage from '../../public/flip-logo-splash.png'

export default function splash() : VNode {
    const pulsateKeyframes = keyframes({
                                           '0%, 100%': {transform: 'rotate(-2deg) scale(1, 1)'},
                                           '50%':      {transform: 'rotate(-6deg) scale(1.2, 1.2)'}
                                       })

    const popArtShadow = {
        textShadow: '5px 5px 0 #000, 2px 0 0 black,  0 2px 0 black, 0 -2px 0 black, -2px 0 0 black',
        color:      '#fff'
    }
    const splashImageClass = style({
                                       maxWidth:       '1200px',
                                       height:         '65vh',
                                       margin:         '0 auto',
                                       marginBottom:   '-4vh',
                                       background:     `url(${splashImage}) no-repeat 50%`,
                                       backgroundSize: 'contain', marginTop: '40px',
                                       overflowX:      'hidden'
                                   })
    const dateClass = style({
                                textAlign:  'center',
                                fontSize:   '5em',
                                fontFamily: 'Bangers',
                                margin:     '0 auto',
                                maxWidth:   '1000px',
                                animation:  `${pulsateKeyframes} 3s infinite`
                            }, popArtShadow)
    const subtitleClass = style({
                                    textAlign:  'center',
                                    fontSize:   '3em',
                                    fontFamily: 'Bangers',
                                    margin:     '0 auto',
                                    maxWidth:   '1000px'
                                }, popArtShadow)
    const signupClass = style({
                                  textAlign:  'center',
                                  fontSize:   '3em',
                                  fontFamily: 'Bangers',
                                  margin:     '0 auto',
                                  maxWidth:   '1000px',
                                  animation:  `${pulsateKeyframes} 4s infinite`
                              }, popArtShadow)
    const overviewClass = style({
        padding: '40px',
        textAlign: 'justify'
    })

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
        </div>
    )
}

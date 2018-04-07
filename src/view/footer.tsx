import { style } from 'typestyle'
import * as csstips from 'csstips'
import { VNode } from '@cycle/dom'

import cycleLogo from '../../public/cyclejs_logo.svg'
import typescriptLogo from '../../public/typescript.png'
import fbIcon from '../../public/FB-icon.png'
import twitterIcon from '../../public/Twitter-icon.svg'

export default function footer() : VNode {
    const footerClass = style(csstips.horizontal, {
        width: '100%',
        backgroundColor: 'black',
        padding: '0.5em',
        marginTop: '60px'
    })
    const cycleJSClass = style({width: '26px', height: '26px', verticalAlign: 'bottom'})
    const typescriptClass = cycleJSClass
    const codeOfConductClass = style({
        marginTop: 'auto',
        marginBottom: 'auto'
    })
    const techStackClass = style({marginRight: 'auto'})
    const contactClass = style({
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        $nest: {'a': {marginLeft: '4px', marginRight: '4px'}}
    })
    const iconClass = {
        height: '25px',
        width: '25px',
        backgroundSize: 'cover',
        marginLeft: '4px',
        marginRight: '4px',
        verticalAlign: 'bottom'
    }
    const emailIcon = style(iconClass, {display: 'inline-block'})
    const twitterIconClass = style({backgroundImage: `url(${twitterIcon})`}, iconClass, {display: 'inline-block'})
    const facebookIconClass = style({backgroundImage: `url(${fbIcon})`}, iconClass, {display: 'inline-block'})

    return (
        <div className={footerClass}>
            <div className={techStackClass}>
                <p>Made with ♥ using <a href='https://cycle.js.org/'>cyclejs <img className={cycleJSClass}
                                                                                  src={cycleLogo}/></a>, <a
                    href='https://www.typescriptlang.org/'>typescript <img className={typescriptClass}
                                                                           src={typescriptLogo}/></a> and <a
                    href='http://typestyle.io/#/'>typestyle 🌹</a></p>
            </div>
            <div className={contactClass}>
                <a href={'mailto:info@flip-il.org'}><span className={emailIcon}>📧</span>info@flip-il.org</a>
                <a href={'https://twitter.com/FLIPCon'} target='_blank'><span className={twitterIconClass}/>@FLIPCon</a>
                <a href={'https://www.facebook.com/FLIPcon/'} target='_blank'><span className={facebookIconClass}/>Facebook</a>
            </div>
            <div className={codeOfConductClass}>
                <a href='/code-of-conduct.pdf' target='_blank'>code of conduct</a>
            </div>
        </div>
    )
}
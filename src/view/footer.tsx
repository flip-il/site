import { style } from 'typestyle'
import * as csstips from 'csstips'
import { VNode, table } from '@cycle/dom'

import cycleLogo from '../../public/cyclejs_logo.svg'
import typescriptLogo from '../../public/typescript.png'
import fbIcon from '../../public/FB-icon.png'
import twitterIcon from '../../public/Twitter-icon.svg'

export default function footer() : VNode {
    const footerClass = style({
        width: '100%',
        backgroundColor: 'black',
        padding: '0.5em'
    })
    const cycleJSClass = style({width: '26px', height: '26px', verticalAlign: 'bottom'})
    const typescriptClass = cycleJSClass
    const contactClass = style({
        textAlign: 'right',
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
    const facebookIconClass = style({ backgroundImage: `url(${fbIcon})` }, iconClass, { display: 'inline-block' })

    return (
        <table className={footerClass}>
            <tr>
                <td>Made with ♥ using <a href='https://cycle.js.org/'>cyclejs <img className={cycleJSClass} src={cycleLogo} /></a>, <a href='https://www.typescriptlang.org/'>typescript <img className={typescriptClass} src={typescriptLogo} /></a> and <a href='http://typestyle.io/#/'>typestyle 🌹</a></td>
                <td className={contactClass}>
                    <a href={'mailto:info@flip-il.org'}><span className={emailIcon}>📧</span>info@flip-il.org</a>
                    <a href={'https://twitter.com/FLIPCon'} target='_blank'><span className={twitterIconClass} />@FLIPCon</a>
                    <a href={'https://www.facebook.com/FLIPcon/'} target='_blank'><span className={facebookIconClass} />Facebook</a>
                    <a href='/code-of-conduct.pdf' target='_blank'>code of conduct</a>
                </td>
            </tr>
        </table>
    )
}
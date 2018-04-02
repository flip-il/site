import { style } from 'typestyle'
import * as csstips from 'csstips'
import { VNode } from '@cycle/dom'

import cycleLogo from '../../public/cyclejs_logo.svg'
import typescriptLogo from '../../public/typescript.png'

export default function footer() : VNode {
    const footerClass = style(csstips.horizontal, {
        width: '100%',
        backgroundColor: 'black',
        padding: '0.5em',
        marginTop: '60px'
    })
    const cycleJSClass = style({ width: '26px', height: '26px', verticalAlign: 'bottom' })
    const typescriptClass = cycleJSClass
    const codeOfConductClass = style({ marginLeft: 'auto', marginTop: 'auto', marginBottom: 'auto'})
    const techStackClass = style({ marginRight: 'auto' })

    return (
        <div className={footerClass}>
            <div className={techStackClass}>
                <p>Made with ♥ using <a href='https://cycle.js.org/'>cyclejs <img className={cycleJSClass} src={cycleLogo} /></a>, <a href='https://www.typescriptlang.org/'>typescript <img className={typescriptClass} src={typescriptLogo} /></a> and <a href='http://typestyle.io/#/'>typestyle 🌹</a></p>
            </div>
            <div className={codeOfConductClass}>
                <a href='/code-of-conduct.pdf' target='_blank'>code of conduct</a>
            </div>
        </div>
    )
}
import { VNode } from '@cycle/dom'

import { style } from 'typestyle'

import { baseFont } from '../style-helpers'

const container = style({textAlign: 'center'}, baseFont)

export default function codeOfConduct() : VNode {
    return (
        <div>
            <h1>Code of Conduct:</h1>
            <div className={container}>
                All attendees, speakers, sponsors and staff are subjected to our <a href='/code-of-conduct.pdf' target="_blank">code of conduct</a>.
            </div>
        </div>
    )
}

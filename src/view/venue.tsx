import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style } from 'typestyle'
import { titleToAnchor } from '../helpers'

import venueImage from '../../public/MTALogo.jpg'
import { baseFont, speechBubble } from '../style-helpers'

const imageClass = style({maxWidth: '90vw'}, speechBubble)
const venueClass = style({textAlign: 'center', fontSize: '1.5em', position: 'relative'}, baseFont)

export default function Venue() : VNode {
    return (
        <div id={titleToAnchor('Venue')}>
            <h1>Venue:</h1>
            <div className={venueClass}>
                <p>
                    Academic College Tel-Aviv-Yafo
                    <br/> Khever ha-Le'umim St 10, Tel Aviv-Yafo
                    <br/>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13527.181824146794!2d34.7609645!3d32.0477275!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d9377924fc3e984!2sThe+Academic+College+of+Tel+Aviv-Yaffo!5e0!3m2!1sen!2sil!4v1521136015172"
                        width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                </p>
                <img src={venueImage} className={imageClass}/>
            </div>
        </div>
    )
}

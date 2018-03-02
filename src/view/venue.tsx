import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import { style } from 'typestyle'
import { titleToAnchor } from '../helpers'

import venueImage from '../../public/MTALogo.jpg'

const imageClass = style({maxWidth: '90vw'})
const venueClass = style({textAlign: 'center', fontSize: '1.5em', position: 'relative'})

export default function Venue() : VNode {
  return (
    <div id={titleToAnchor('Venue')}>
      <h1>Venue:</h1>
      <div className={venueClass}>
      <p>
        Academic College Tel-Aviv-Yafo
        <br/> Venue Street 6, Vienna
        <br/>
        <a href='#' target='_blank'>see in Google Maps</a>
      </p>
      <img src={venueImage} className={imageClass} />
      </div>
    </div>
  )
}

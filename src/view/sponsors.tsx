import { VNode } from '@cycle/dom'
import { AppState } from '../state'

import { style } from 'typestyle'
import * as csstips from 'csstips'
import { titleToAnchor } from '../helpers'
import { SponsorData, SponsorsData } from '../data/sponsors-data'
import Sponsor from './sponsor'
import { baseFont } from '../style-helpers'

const container = style(csstips.horizontal, csstips.wrap, csstips.centerJustified, csstips.horizontallyCenterChildren, csstips.aroundJustified)

const add = (obj : { [index : string] : SponsorData[] }, sponsor : SponsorData) =>
    Object.assign({}, obj, {[sponsor.sponsorType]: [...(obj[sponsor.sponsorType] || []), sponsor]})
const sponsorGroups : { [index : string] : SponsorData[] } = SponsorsData.reduce((coll, sponsor) => add(coll, sponsor), {})

export default function sponsors(state : AppState) : VNode {
    return (
        <div id={titleToAnchor('Sponsors')}>
            <h1>Our Sponsors &amp; Partners</h1>
            <h2>Silver Sponsors</h2>
            <div className={container}>
                {sponsorGroups['Silver'].map((sponsor : SponsorData, i : number) => Sponsor(sponsor, i))}
            </div>
            <h2>Partners</h2>
            <div className={container}>
                {sponsorGroups['Partner'].map((sponsor : SponsorData, i : number) => Sponsor(sponsor, i))}
            </div>
            <h2><a href='/sponsors.pdf'>Become a Sponsor!</a></h2>
            <div className={container}>
                <p className={style(baseFont)}>
                    Contact us at <a href='mailto:sponsors@flip-il.org'>sponsors@flip-il.org</a>
                </p>
            </div>
        </div>
    )
}

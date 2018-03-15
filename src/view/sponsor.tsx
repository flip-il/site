import { VNode } from '@cycle/dom'
import { possibleStates as EventAnimationStates } from '../state'

import { classes, style } from 'typestyle'
import { baseFont, speechBubble } from '../style-helpers'
import { SponsorData, SponsorType } from '../data/sponsors-data'


function eventAnimationStateToClass(state : EventAnimationStates) : string {

    const baseStyle = {
        fontSize: '0.85em',
        lineHeight: '1.4em',
        cursor: 'pointer'
    }

    const collapsedClass = style({
        textAlign: 'justify',
        height: '0',
        overflow: 'hidden'
    }, baseStyle)
    const expandedClass = style({
        textAlign: 'justify',
        maxHeight: '75em',
        overflow: 'hidden'
    }, baseStyle)
    switch (state) {
        case 'collapsed':
            return collapsedClass
        case 'expanded':
            return expandedClass
        default:
            throw 'impossible state'
    }
}

export default function Sponsor(sponsor : SponsorData,
                                index : number) : VNode {
    const sponsorName = style({
        margin: '2rem 0 0 2rem',
        cursor: 'pointer',
        display: 'inline-block'
    }, baseFont)

    const sponsorLogo = {
        borderRadius: '50%',
        boxShadow: '0 0 0 3px #fff, 0 0 0 6px #000, 5px 4px 0 6px #000',
        cursor: 'pointer'
    }

    const sponsorClass = style({
        flexBasis: '28%',
        $nest: {
            [`&:hover .${sponsorName}`]: {
                color: 'moccasin'
            },
            [`&:hover .${sponsorLogoClass}`]: {
                boxShadow: '0 0 0 3px moccasin, 0 0 0 6px #000, 5px 4px 0 6px #000'
            }
        }
    })

    function sponsorLogoClass(type : SponsorType) : string {
        switch (type) {
            case 'Partner':
                return style({
                    height: '75px'
                }, sponsorLogo, speechBubble)
            case 'Gold':
                return style({
                    height: '150px'
                }, sponsorLogo, speechBubble)
            case 'Silver':
                return style({
                    height: '120px'
                }, sponsorLogo, speechBubble)
            case 'Bronze':
                return style({
                    height: '75px'
                }, sponsorLogo, speechBubble)
            default:
                return 'unreachable statement'
        }
    }

    return (
        <div className={classes('sponsor', sponsorClass)} data-sponsorindex={index.toString()}>
            <a href={sponsor.link} target="_blank">
                <img className={sponsorLogoClass(sponsor.sponsorType)} src={sponsor.logo}/>
                <p className={sponsorName}>{sponsor.name}</p>
            </a>
        </div>
    )
}

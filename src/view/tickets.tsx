import { VNode } from '@cycle/dom'

import { classes, style } from 'typestyle'
import * as csstips from 'csstips'
import { titleToAnchor } from '../helpers'
import { baseFont } from '../style-helpers'
import { TicketData, ticketsList } from '../data/tickets-data'

const container = style(
    csstips.horizontal,
    csstips.wrap,
    csstips.centerJustified,
    csstips.horizontallyCenterChildren,
    csstips.aroundJustified,
    csstips.flex10
)

const borderRadius = '45px'

const ticketContainer = style({
    borderRadius: borderRadius,
    // border: '10px solid white',
    boxShadow: '0 0 0 10px #fff, 0 0 0 13px #000, 12px 11px 0 13px #000',
    textDecoration: 'none',
    margin: '25px',
    $nest: {
        '*': {
            textDecoration: 'none'
        },
        'a': {
            height: '100%',
            width: '100%',
            borderRadius: borderRadius,
            display: 'inline-block'
        },
        '&:hover': {
            $nest: {
                'h1': {
                    color: 'moccasin'
                },
                'h2': {
                    color: 'moccasin'
                }
            },
            boxShadow: '0 0 0 10px moccasin, 0 0 0 13px #000, 12px 11px 0 13px #000'
        }
    }
}, csstips.flex3)
const ticketUnavailable = style({
    boxShadow: '0 0 0 10px #bbb, 0 0 0 13px #000, 12px 11px 0 13px #000',
    cursor: 'default',
    $nest: {
        '*': {
            color: '#bbb',
            cursor: 'default'
        },
        '&:hover': {
            $nest: {
                'h1': {
                    color: '#aaa ! important'
                },
                'h2': {
                    color: '#aaa ! important'
                }
            },
            boxShadow: '0 0 0 10px #aaa, 0 0 0 13px #000, 12px 11px 0 13px #000'
        }
    }
})
const ticketTitle = style({
    fontSize: '2em',
    textDecoration: 'none',
    textDecorationLine: 'none',
    marginTop: '40px'
})
const ticketPrice = style({
    fontSize: '1.6em',
    textDecoration: 'none',
    textDecorationLine: 'none'
})
const ticketComments = style({
    fontSize: '1.2',
    textDecoration: 'none',
    textDecorationLine: 'none',
    padding: '1em'
}, baseFont)

function ticketContainerClass(ticket : TicketData) : string {
    return ticket.available ? classes(ticketContainer) : classes(ticketContainer, ticketUnavailable)
}

export default function tickets() : VNode {
    return (
        <div id={titleToAnchor('Tickets')}>
            <h1>Tickets</h1>
            <div className={container}>
                {ticketsList.filter(t => t.shouldDisplay).map(ticket => (
                    <div className={ticketContainerClass(ticket)}>
                        <a href={ticket.available ? ticket.purchaseLink : undefined} target='_blank'>
                            <h1 className={ticketTitle}>{ticket.title}</h1>
                            <h2 className={ticketPrice}>{ticket.priceILS} ILS</h2>
                            <p className={ticketComments}>{ticket.comment}</p>
                        </a>
                    </div>
                ))}
            </div>
            <div className={container}>
                <p className={style(baseFont, {marginTop: '40px'})}>
                    Questions? Problems? Contact us at <a href='mailto:info@flip-il.org'>info@flip-il.org</a>
                </p>
            </div>
        </div>
    )
}

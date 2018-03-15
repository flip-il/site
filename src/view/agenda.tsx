import { VNode } from '@cycle/dom'
import { AppState } from '../state'
import { AppData } from '../data'

import specificAgenda from './specific-agenda'

import { titleToAnchor } from '../helpers'
import { style } from 'typestyle'
import { baseFont } from '../style-helpers'

export default function Agenda(state : AppState) : VNode {
    return (
        <div id={titleToAnchor('Agenda')}>
            <h1>Agenda:</h1>
            <h2>Coming Soon!</h2>
            <p className={style(baseFont, {fontSize: '1.2rem'})}>
                In the meantime, our <a>call for papers</a> is open!
            </p>
            {/*{specificAgenda(AppData.Agenda.Gathering, state)}*/}
            {/*{specificAgenda(AppData.Agenda.Opening, state)}*/}
            {/*{specificAgenda(AppData.Agenda.Talks, state)}*/}
        </div>
    )
}

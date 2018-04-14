import {AboutData} from './data/about-data'
import {Agenda, AgendaDataGathering, AgendaDataOpening, AgendaDataTalks} from './data/agenda-data'
import {SponsorData, SponsorsData} from './data/sponsors-data'
import {default as TeamMembers, TeamMember} from './data/team-data'
import { TicketsData, ticketsList } from './data/tickets-data'

type AppDataType = {
    'About' : any,
    'Agenda' : {
        [index : string] : Agenda<any>
    },
    'Sponsors' : any[],
    // 'Venue' : undefined,
    'Team' : TeamMember[],
    'Tickets' : TicketsData
}

export const AppData : AppDataType = {
    'About':    AboutData,
    'Tickets': ticketsList,
    'Agenda':   {
        'Gathering': AgendaDataGathering,
        'Opening':   AgendaDataOpening,
        'Talks':     AgendaDataTalks
    },
    'Sponsors': SponsorsData,
    'Team':     TeamMembers
}

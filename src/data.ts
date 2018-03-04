import {AboutData} from './data/about-data'
import {Agenda, AgendaDataGathering, AgendaDataOpening, AgendaDataTalks} from './data/agenda-data'
import {Sponsor, SponsorsData} from './data/sponsors-data'
import {default as TeamMembers, TeamMember} from './data/team-data'

type AppDataType = {
    'About' : any,
    'Agenda' : {
        [index : string] : Agenda<any>
    },
    'Sponsors' : any[],
    'Venue' : undefined,
    'Team' : TeamMember[]
}

export const AppData : AppDataType = {
    'About':    AboutData,
    'Agenda':   {
        'Gathering': AgendaDataGathering,
        'Opening':   AgendaDataOpening,
        'Talks':     AgendaDataTalks
    },
    'Sponsors': SponsorsData,
    'Venue':    undefined,
    'Team':     TeamMembers
}

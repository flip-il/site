import {AboutData} from './data/about'
import {SplashData} from './data/splash-data'
import {Agenda, AgendaDataGathering, AgendaDataOpening, AgendaDataTalks} from './data/agenda-data'
import {Sponsor, SponsorsData} from './data/sponsors'
import {default as TeamMembers, TeamMember} from './data/team-data'

type AppDataType = {
    'About': any,
    'Agenda': {
        [index: string]: Agenda<any>
    },
    'Sponsors': any[],
    'Venue': undefined,
    'Team': TeamMember[]
}

export const AppData: AppDataType = {
    'About':    SplashData,
    'Agenda':   {
        'Gathering': AgendaDataGathering,
        'Opening':   AgendaDataOpening,
        'Talks':     AgendaDataTalks
    },
    'Sponsors': SponsorsData,
    'Venue':    undefined,
    'Team':     TeamMembers
}

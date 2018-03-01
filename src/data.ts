import { SplashData } from './data/splash-data'
import { Agenda, AgendaDataGathering, AgendaDataOpening, AgendaDataTalks } from './data/agenda-data'
import { default as TeamMembers, TeamMember } from './data/team-data'

type AppDataType = {
  'Flip-IL' : any,
  'Agenda' : {
    [index : string] : Agenda<any>
  },
  'Venue' : undefined,
  'Team' : TeamMember[]
}

export const AppData : AppDataType = {
  'Flip-IL': SplashData,
  'Agenda': {
    'Gathering': AgendaDataGathering,
    'Opening': AgendaDataOpening,
    'Talks': AgendaDataTalks
  },
  'Venue': undefined,
  'Team': TeamMembers
}

import { Speaker, Speakers } from './speaker-data'

type RoomsGathering = 'The gather zone'
type RoomsTalks = 'Auditorium' | 'Class X'

export type Event<T> = {
  id : number
  title : string
  shortDescription? : boolean
  room? : T
  speakers? : Speaker[]
  description? : string
}

export type TimeSlot<T> = {
  events : Event<T>[]
  startTime : string
  endTime : string
}

export type Agenda<T> = {
  roomNames : T[],
  timeSlots : TimeSlot<T>[]
}

export const AgendaDataGathering : Agenda<RoomsGathering> = {
  roomNames: ['The gather zone'],
  timeSlots: [
    {
      startTime: '08:00',
      endTime: '09:00',
      events: [{
        id: 1,
        title: 'Registration',
        room: 'The gather zone'
      }]
    }
  ]
}

export const AgendaDataTalks : Agenda<RoomsTalks> = {
  roomNames: ['Auditorium', 'Class X'],
  timeSlots: [
    {
      startTime: '09:00',
      endTime: '10:00',
      events: [{
        id: 1,
        title: 'Turning High-level Functional Programs into Low-level Programs with Improved Performance',
        description: '',
        room: 'Auditorium',
        speakers: [Speakers['dr. jeremy yallop']]
      }]
    },
    {
      startTime: '10:00',
      endTime: '10:30',
      events: [{
        id: 1,
        title: 'Boring Usecases for Exciting Types',
        description: 'Codensity! Indexed state! Zipper comonad! What are these words and co-words? There\'s lots of jargon in functional programming, and without context, it seems pretty academic. In this talk, I\'ll show a few lesser known functional constructs and how they can be put to work in a day-to-day usecase.',
        room: 'Auditorium',
        speakers: [Speakers['itamar ravid']]
      },
      {
        id: 1,
        title: 'The Math Behind Functional Languages (HE)',
        description: '',
        room: 'Class X',
        speakers: [Speakers['dvir faivel']]
      }]
    },
    {
      startTime: '10:30',
      endTime: '11:00',
      events: [{
        id: 1,
        title: 'Spoxy Proxy',
        shortDescription: true,
        description: 'Creating a smart proxy with a short-lived internal cache using Elixir',
        room: 'Auditorium',
        speakers: [Speakers['yaron wittenstein']]
      },
      {
        id: 1,
        title: 'The Math Behind Functional Languages (HE)',
        description: '',
        room: 'Class X',
        speakers: [Speakers['dvir faivel']]
      }]
    },
    {
      startTime: '11:00',
      endTime: '11:15',
      events: [{
        id: 1,
        title: 'CROSS ROOM EVENT! ZOMG!!!'
      }]
    }
  ]
}

// Go over all events and give them and their speakers a unique ID
let eventID : number = 1
function GenerateEventIDs<T>(agendaData : Agenda<T>) : void {
  agendaData.timeSlots.forEach(timeslot => {
    timeslot.events.forEach(event => {
      event.id = eventID
      eventID += 1
    })
  })
}

GenerateEventIDs(AgendaDataGathering)
GenerateEventIDs(AgendaDataTalks)

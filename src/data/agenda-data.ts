import { Speaker, Speakers } from './speaker-data'

type RoomsGathering = 'A Room'
type RoomsOpening = 'THE Room'
type RoomsTalks = 'R1' | 'R2' | 'R3'

export type Event<T> = {
  id : number
  title : string
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
  roomNames: ['A Room'],
  timeSlots: [
    {
      startTime: '08:00',
      endTime: '09:00',
      events: [{
        id: 1,
        title: 'Congregation commences',
        room: 'A Room'
      }]
    }
  ]
}

export const AgendaDataOpening : Agenda<RoomsOpening> = {
  roomNames: ['THE Room'],
  timeSlots: [
    {
      startTime: '09:00',
      endTime: '09:15',
      events: [{
        id: 1,
        title: 'Opening words',
        room: 'THE Room',
        speakers: [Speakers['speaker mcspeakerface']]
      }]
    },
    {
      startTime: '09:15',
      endTime: '10:05',
      events: [{
        id: 1,
        title: 'Keynote - leveraging key notes',
        description: 'Look, this is just a sample description, I\'m not really sure what you were expecting to find here.',
        room: 'THE Room',
        speakers: [Speakers['speaker mcspeakerface']]
      }]
    },
    {
      startTime: '10:05',
      endTime: '10:15',
      events: [{
        id: 1,
        title: 'Break (10m)'
      }]
    }
  ]
}

export const AgendaDataTalks : Agenda<RoomsTalks> = {
  roomNames: ['R1', 'R2', 'R3'],
  timeSlots: [
    {
      startTime: '10:15',
      endTime: '11:00',
      events: [{
        id: 1,
        title: 'First room event',
        description: 'These events are here so that we remember how to set up the data to display events in multiple rooms. This is all very exciting.',
        room: 'R1',
        speakers: [Speakers['speaker mcspeakerface']]
      },
      {
        id: 1,
        title: 'Room #2, electric bugaloo!',
        description: 'This would be a good opportunity to say that I don\'t really know what a bugaloo is.',
        room: 'R2',
        speakers: [Speakers['speaker mcspeakerface']]
      },
      {
        id: 1,
        title: 'Room #3, arrow in the knee',
        description: 'You should really give Skyrim a spin if you have not gotten around to it somehow. It is a really immersive experience.',
        room: 'R3',
        speakers: [Speakers['speaker mcspeakerface']]
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
GenerateEventIDs(AgendaDataOpening)
GenerateEventIDs(AgendaDataTalks)

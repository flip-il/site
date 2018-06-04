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
  roomNames: ['Weston Building Ground Floor'],
  timeSlots: [
    {
      startTime: '08:00',
      endTime: '09:00',
      events: [{
        id: 1,
        title: 'Registration',
        room: 'Weston Building Ground Floor'
      }]
    }
  ]
}

export const AgendaDataTalks : Agenda<RoomsTalks> = {
  roomNames: ['Auditorium', 'Class 008'],
  timeSlots: [
    {
      startTime: '09:00',
      endTime: '10:00',
      events: [{
        id: 1,
        shortDescription: true,
        title: 'Keynote',
        description: 'Turning High-level Functional Programs into Low-level Programs with Improved Performance',
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
        shortDescription: true,
        description: 'Explaining functional programming concepts we use daily such as type-classes, semi-groups and monoids',
        room: 'Class 008',
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
        title: 'Workshop - Haskell from the Inside Out',
        shortDescription: true,
        description: 'Learn the basic assumptions of Haskell that lead to its many distinguishing features',
        room: 'Class 008',
        speakers: [Speakers['michael snoyman']]
      }]
    },
    {
      startTime: '11:00',
      endTime: '11:30',
      events: [{
        id: 1,
        title: 'Short Break',
        room: 'Auditorium'
      },
      {
        id: 1,
        title: 'Workshop Continues',
        room: 'Class 008'
      }]
    },
    {
      startTime: '11:30',
      endTime: '12:00',
      events: [{
        id: 1,
        title: 'Practical functional programming with Clojure',
        shortDescription: true,
        description: 'Impure, practical functional',
        room: 'Auditorium',
        speakers: [Speakers['daniel szmulewicz']]
      },
      {
        id: 1,
        title: 'Workshop Continues',
        room: 'Class 008'
      }]
    },
    {
      startTime: '12:00',
      endTime: '12:30',
      events: [{
        id: 1,
        title: 'Contributing to the F# compiler (He)',
        shortDescription: true,
        description: 'How I contributed to the F# compiler and had fun!',
        room: 'Auditorium',
        speakers: [Speakers['avi avni']]
      }, {
        id: 2,
        title: 'Workshop Continues',
        room: 'Class 008'
      }]
    },
    {
      startTime: '12:30',
      endTime: '14:00',
      events: [{
        id: 1,
        title: 'Lunch'
      }]
    },
    {
      startTime: '14:00',
      endTime: '14:15',
      events: [{
        id: 1,
        title: 'Functional Programming is for Everyone (Lightning Talk)',
        room: 'Auditorium',
        description: 'Functional programming is enjoying mainstream attention in the last few years, yet very few companies in Israel are actually practicing functional programming. In this talk I’ll suggest a few possible explanations and present opportunities I see to make functional programming catch fire.',
        speakers: [Speakers['sharon shmorak']]
      }]
    },
    {
      startTime: '14:15',
      endTime: '14:30',
      events: [{
        id: 1,
        title: 'Why Choosing Functional Programming for Doing DevOps (Lightning Talk)',
        room: 'Auditorium',
        description: 'Creator of NGS, a domain specific language for systems engineering tasks, speaks about the unique combination of functional features in NGS and how they fit the design and the purpose of the language.',
        speakers: [Speakers['ilya sher']]
      }]
    },
    {
      startTime: '14:30',
      endTime: '15:00',
      events: [{
        id: 1,
        title: 'Elm from a Business Perspective',
        room: 'Auditorium',
        description: 'In Gizra, we run an unusual stack that helps us reach blazing fast websites - Drupal runs our backends, Elm in the front, and most recently Yesod (a Haskell framework). There’s a certain mindset in choosing these technologies - it’s about the idea of “correctness”; making sure we can move quickly without breaking stuff. In this session, I’ll provide an in depth explanation about this mindset both from the development perspective, and the business one.',
        speakers: [Speakers['amitai burstein']]
      }]
    },
    {
      startTime: '15:00',
      endTime: '15:30',
      events: [{
        id: 1,
        title: '5 Ways to Improve Performance of Your Java/Kotlin App',
        room: 'Auditorium',
        shortDescription: true,
        description: 'Learn 5 Functional Programming paradigms (state, referential transparency...) to improve any Java/Kotlin based app',
        speakers: [Speakers['boris farber']]
      }, {
        id: 2,
        title: 'Functional APIs with Absinthe GraphQL',
        room: 'Class 008',
        shortDescription: true,
        description: 'Absinthe is a GraphQL toolkit for Elixir-based Phoenix web framework. This talk will discuss Absinthe itself, as well as various patterns of designing GraphQL APIs with it.',
        speakers: [Speakers['zvi avraham']]
      }]
    },
    {
      startTime: '15:30',
      endTime: '16:00',
      events: [{
        id: 1,
        title: 'Short Break'
      }]
    },
    {
      startTime: '16:00',
      endTime: '16:30',
      events: [{
        id: 1,
        title: 'You Can Be Groovy',
        room: 'Auditorium',
        shortDescription: true,
        description: 'Groovy, the JVM\'s underdog, is a functional top dog',
        speakers: [Speakers['noam tenne']]
      },
      {
        id: 2,
        title: 'Make it Clean - Workshop',
        room: 'Class 008',
        description: 'Can we find a way to write easy to understand, readable and fairly “clean” lambda expressions? This is a TOUGH question. Many experienced programmers which are new (or not...) to lambdas fail miserably. I’ve been trying to tackle this challenge in scala and today I will share with you how to CLEAN your scala code.',
        speakers: [Speakers['adi polak']]
      }]
    },
    {
      startTime: '16:30',
      endTime: '17:00',
      events: [{
        id: 1,
        title: 'Functional Reactive Programming Using RxJS (HE)',
        room: 'Auditorium',
        shortDescription: true,
        description: 'Overview and best practices for using Functional Reactive Programming (FRP) in front end development',
        speakers: [Speakers['ziv perry']]
      },
      {
        id: 2,
        title: 'Workshop Continues',
        room: 'Class 008'
      }]
    },
    {
      startTime: '17:00',
      endTime: '17:30',
      events: [{
        id: 1,
        title: 'Short Break',
        room: 'Auditorium'
      },
      {
        id: 2,
        title: 'Workshop Continues',
        room: 'Class 008'
      }]
    },
    {
      startTime: '17:30',
      endTime: '18:00',
      events: [{
        id: 1,
        title: 'Purely Functional Games',
        room: 'Auditorium',
        description: 'Games are often considered to be inherently mutable, event driven programs, and are usually considered a "bad fit" for functional programming. Is that really the case? If not, how would a game written in a purely functional style look like? In this talk we\'ll try to provide answers to these questions.',
        speakers: [Speakers['gil mizrahi']]
      },
      {
        id: 2,
        title: 'Workshop Continues',
        room: 'Class 008'
      }]
    },
    {
      startTime: '18:00',
      endTime: '18:45',
      events: [{
        id: 1,
        title: 'Make Your Own Functional Programmers',
        room: 'Auditorium',
        description: 'Recruiting functional programmers is hard. Have you considered making your own? Let\'s talk about how to build an effective training program that will quickly transform any die-hard Java-loving and design-patterns-chanting imperative programmer, without requiring too much of your lead engineer\'s time.',
        speakers: [Speakers['hila noga']]
      }]
    },
    {
      startTime: '18:45',
      endTime: '19:00',
      events: [{
        id: 1,
        title: 'Closing Event'
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

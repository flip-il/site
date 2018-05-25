import { Person } from './person'

export type Speaker = Person

import speakerMcSpeakerface from '../../public/speakers/speaker_mcspeakerface.jpg'
import itamarRavid from '../../public/speakers/itamar_ravid.jpg'
import dvirFaivel from '../../public/speakers/dvir_faivel.png'
import yaronWittenstein from '../../public/speakers/Yaron.jpg'
import michaelSnoyman from '../../public/speakers/snoyman.jpg'

export const SpeakerList : Speaker[] = [
  {
    portrait: speakerMcSpeakerface,
    name: 'Dr. Jeremy Yallop',
    bio: 'This is where some bio information would go',
    linkedInUrl: ''
  },
  {
    portrait: dvirFaivel,
    name: 'Dvir Faivel',
    shortBio: true,
    bio: 'Interested in Scala, functional programming, big data, parallel and distributed programming, and more geeky stuff',
    linkedInUrl: ''
  },
  {
    portrait: yaronWittenstein,
    name: 'Yaron Wittenstein',
    bio: 'Creating software is my passion, my most loved programming languages are Ruby and Elixir and I only code in vim :)',
    linkedInUrl: ''
  },
  {
    portrait: michaelSnoyman,
    name: 'Michael Snoyman',
    bio: 'Michael Snoyman is the founder and lead developer of multiple Haskell open source projects, including Yesod, Conduit, Stack, and Stackage. His main interests are creating developer-friendly, high performance libraries that minimize bugs. Michael is VP of Engineering at FP Complete, where he focuses on using Haskell and modern devops to help projects make it to market faster and with fewer bugs.',
    linkedInUrl: ''
  },
  {
    portrait: speakerMcSpeakerface,
    name: 'Daniel Szmulewicz',
    shortBio: true,
    bio: 'Software craftsman / Entrepreneur / Founder of the Clojure user group in Israel',
    linkedInUrl: ''
  },
  {
    portrait: itamarRavid,
    name: 'Itamar Ravid',
    bio: 'Itamar is a freelance software engineer. He’s been working with all facets of software development for over a decade - from data infrastructure, through CI/CD processes to backend development. His current interests include in microservice architectures and stream processing systems on the JVM. Itamar is a functional programming addict and contributes to several open-source projects in the Scala ecosystem, such as the Cats library and ENSIME.',
    linkedInUrl: ''
  }
]

type SpeakerDictionary = {[name : string] : Speaker}

// Export a dictionary of speakers indexed by their lowercase name
export const Speakers : SpeakerDictionary =
  SpeakerList.reduce<SpeakerDictionary>((speakers : SpeakerDictionary, speaker : Speaker) => {
    speakers[speaker.name.toLowerCase()] = speaker
    return speakers
  }, {})

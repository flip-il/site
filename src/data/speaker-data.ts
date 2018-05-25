import { Person } from './person'

export type Speaker = Person

import speakerMcSpeakerface from '../../public/speakers/speaker_mcspeakerface.jpg'
import itamarRavid from '../../public/speakers/itamar_ravid.jpg'
import dvirFaivel from '../../public/speakers/dvir_faivel.png'
import yaronWittenstein from '../../public/speakers/Yaron.jpg'

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

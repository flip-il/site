import { Person } from './person'

export type Speaker = Person

import speakerMcSpeakerface from '../../public/speakers/speaker_mcspeakerface.jpg'

export const SpeakerList : Speaker[] = [
  {
    portrait: speakerMcSpeakerface,
    name: 'Speaker McSpeakerface',
    bio: 'Speaker always felt like he had a lot of things to say, and he is going to say all of those things at you.'
  }
]

type SpeakerDictionary = {[name : string] : Speaker}

// Export a dictionary of speakers indexed by their lowercase name
export const Speakers : SpeakerDictionary =
  SpeakerList.reduce<SpeakerDictionary>((speakers : SpeakerDictionary, speaker : Speaker) => {
    speakers[speaker.name.toLowerCase()] = speaker
    return speakers
  }, {})
